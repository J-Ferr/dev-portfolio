import { useEffect, useRef } from 'react';
import './CodeWave.css';

function CodeWave() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const entranceStart = performance.now();

    let animationId;
    let time = 0;

    let pointerX = 0;
    let pointerY = 0;
    let targetPull = 0;
    let pull = 0;

    function handlePointerMove(event) {
      if (event.pointerType === 'touch' || prefersReducedMotion) return;

      const rect = canvas.getBoundingClientRect();
      pointerX = event.clientX - rect.left;
      pointerY = event.clientY - rect.top;
      targetPull = 1;
    }

    function handlePointerLeave() {
      targetPull = 0;
    }

    const codeSnippets = [
      'const creativity = imagination + logic;',
      'function buildDreams() { return possibilities }',
      'import { creativity, passion } from "./developer";',
      'const developer = { name: "Jose", passion: "coding" };',
      'const ideas = projects.map(idea => create_art(idea));',
      'def create_art(inspiration): return imagination'
    ];

    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerleave', handlePointerLeave);
 

    function animate() {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      ctx.clearRect(0, 0, width, height);

      const elapsed = performance.now() - entranceStart;

      function revealWidth(delay) {
        if (prefersReducedMotion) return width;

        const progress = Math.max(0, Math.min(1, (elapsed - 450 - delay) / 1000));
        const eased = progress * progress * (3 - 2 * progress);

        return width * eased;
      }

      pull += (targetPull - pull) * 0.12;

      function waveY(x, phaseOffset = 0) {
        const progress = Math.max(0, Math.min(1, x / width));
        const rise = progress * progress * (3 - 2 * progress);
        const dip = Math.sin(progress * Math.PI) * 0.32;

        const wavelength = Math.PI * 2 * 1.25;
        const phase = progress * wavelength - time * 1.2 + phaseOffset;
        const amplitude = 6 + Math.sin(progress * Math.PI) * 18;
        const idleDrift = Math.sin(phase) * amplitude;
        const restingY = height * (0.72 + dip - rise * 0.54) + idleDrift;
        const distance = Math.hypot(x - pointerX, restingY - pointerY);
        const influence = Math.max(0, 1 - distance / 180);
        const pullY = Math.max(-36, Math.min(36, pointerY - restingY));

        return restingY + pullY * influence * pull;
      }

      ctx.font = '14px monospace';
      ctx.fillStyle = '#526a94';
      
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, 0, revealWidth(0), height);
      ctx.clip();

      codeSnippets.slice(0, 2).forEach((snippet, rowIndex) => {
        const characters = (snippet + ' ').split('');

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

            const y = waveY(x) + (rowIndex === 0 ? -12 : 22);
            ctx.fillText(character, x, y);
          });
        }
      });
      ctx.restore();
      ctx.globalAlpha = 1;
      
      function drawWave(offset, lineWidth, opacity, phaseOffset = 0, delay = 0) {
        const endX = revealWidth(delay);
        if (endX <= 0) return;

        ctx.beginPath();
        ctx.moveTo(0, waveY(0, phaseOffset) + offset);

        for (let x = 4; x <= endX; x += 4) {
          ctx.lineTo(x, waveY(x, phaseOffset) + offset);
        }

        ctx.lineTo(endX, waveY(endX, phaseOffset) + offset);
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = '#355cff';
        ctx.globalAlpha = opacity;
        ctx.stroke();
      }

      drawWave(-20, 1, 0.14, -0.9, 300);
      drawWave(-8, 1, 0.26, -0.45, 100);
      drawWave(8, 1, 0.26, 0.45, 200);
      drawWave(20, 1, 0.14, 0.9, 400);
      drawWave(0, 4, 1);

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
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('pointerleave', handlePointerLeave);
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