import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useCanvas from '../../hooks/useCanvas';

class Line {
  x: number;
  y: number;
  offset: number;
  radians: number;
  velocity: number;
  ctx: CanvasRenderingContext2D;

  constructor(x: number, y: number, offset: number, ctx: CanvasRenderingContext2D) {
    this.x = x;
    this.y = y;
    this.offset = offset;
    this.radians = 0;
    this.velocity = 0.01;
    this.ctx = ctx;
  }

  draw = (): void => {
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 1, 0, Math.PI * 2, false);
    this.ctx.fill();
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.x + 300, this.y - 1000);
    this.ctx.stroke();
    this.ctx.closePath();

    this.update();
  };

  update = (): void => {
    this.radians += this.velocity;
    this.y = this.y + Math.cos(this.radians + this.offset);
  };
}

const LandingAnimatedBackground = (): JSX.Element => {
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  let animationId = 0;
  const canvasRef = useCanvas((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    const lineArray = getLines(ctx);

    const animate = (): void => {
      animationId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      lineArray.forEach((line) => {
        line.draw();
      });
    };

    animate();
  });

  useEffect(() => {
    // Update initial dimensions
    setCanvasSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Add listeners
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const getLines = (ctx: CanvasRenderingContext2D): Line[] => {
    const lineArray: Line[] = [];
    for (let i = 0; i < 100; i++) {
      const start = { x: 0, y: window.innerHeight * 0.9 };
      const random = Math.random() - 0.5;
      const unit = 25;

      lineArray.push(
        new Line(
          start.x + (unit + random) * i - 100,
          start.y + (i + random) * -3 + Math.sin(i) * unit - 150,
          0.1 + 1 * i,
          ctx
        )
      );
    }

    return lineArray;
  };

  const onResize = (): void => {
    cancelAnimationFrame(animationId);
    setCanvasSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  return <canvas ref={canvasRef} width={canvasSize.width} height={canvasSize.height}></canvas>;
};

export default LandingAnimatedBackground;
