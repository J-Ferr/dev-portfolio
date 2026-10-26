import { useEffect, useRef } from 'react';
import './CodeWave.css';

function CodeWave() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationId;
    let time = 0;

    const codeSnippets = [
      'const creativity = imagination + logic;',
      'function buildDreams() { return possibilities }',
      'import { creativity, passion } from "./developer";',
      'const developer = { name: "Jose", passion: "coding" };',
      'const ideas = projects.map(idea => create_art(idea));',
      'def create_art(inspiration): return imagination'
    ];

    function animate() {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      ctx.clearRect(0, 0, width, height);

      ctx.font = '14px monospace';
      ctx.fillStyle = '#9FE6B8';

      codeSnippets.forEach((snippet, rowIndex) => {
        const characters = (snippet + ' ').split('');
        const rowSpacing = height / (codeSnippets.length + 1);
        const baseY = rowSpacing * (rowIndex + 1);

        const spacing = 12;
        const repeatWidth = characters.length * spacing;
        const speed = 0.6 + rowIndex * 0.25;
        const offset = (time * 40 * speed) % repeatWidth;

        const opacity = 1 - rowIndex * 0.12;
        ctx.globalAlpha = opacity;

        for (
          let copy = -1;
          copy <= Math.ceil(width / repeatWidth) + 1;
          copy++
        ) {
          characters.forEach((character, charIndex) => {
            const x = copy * repeatWidth + charIndex * spacing - offset;

            const wave = Math.sin(
              x * 0.025 + time + rowIndex * 0.8) * 30;

            const y = baseY + wave;
            ctx.fillText(character, x, y);
          });
        }
      });
      ctx.globalAlpha = 1;

      if (!prefersReducedMotion) {
        time += 0.03;
        animationId = requestAnimationFrame(animate);
      }
    }

    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect();

      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="code-wave">
      <canvas
      ref={canvasRef}
      className="code-canvas"
      aria-hidden="true"
      />
    </div>
  );
}

export default CodeWave;