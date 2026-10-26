import { useEffect, useRef } from 'react';
import './CodeWave.css';

function CodeWave() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let animationId;
    let time = 0;

    const codeSnippets = [
      'const creativity = imagination + logic;',
      'function buildDreams() { return possibilities }',
      'import { creativity, passion } from "./developer";',
      'const developer = { name: "Jose", passion: "coding" };',
      'const ideas = projects.map(idea => create_art(idea));',
      'def create_art(inspiration) return imagination:'
    ];

    function animate() {
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      ctx.font = '14px monospace';
      ctx.fillStyle = '#9FE6B8';

      codeSnippets.forEach((snippet, rowIndex) => {
        const opacity = 1 - rowIndex * 0.22;
        ctx.globalAlpha = opacity;
        const characters = snippet.split('');
        const baseY = 65 + rowIndex * 60;

        characters.forEach((character, charIndex) => {
          const x = 25 + charIndex * 15;

          const wave = Math.sin(time + charIndex * 0.3 + rowIndex * 0.8) * 25;
          const y = baseY + wave;
          ctx.fillText(character, x, y);
          ctx.globalAlpha = 1;
        });
      });

      time += 0.05;

      animationId = requestAnimationFrame(animate);
    }

    canvas.width = 600;
    canvas.height = 400;

    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="code-wave">
      <canvas ref={canvasRef} className="code-canvas" />
    </div>
  );
}

export default CodeWave;