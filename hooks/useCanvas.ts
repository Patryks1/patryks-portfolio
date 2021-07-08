import React, { useEffect, useRef } from 'react';

const useCanvas = (callback: {
  (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void;
  (arg0: HTMLCanvasElement, arg1: CanvasRenderingContext2D): void;
}): React.MutableRefObject<HTMLCanvasElement> => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas: HTMLCanvasElement = canvasRef.current;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
    callback(canvas, ctx);
  }, []);

  return canvasRef;
};

export default useCanvas;
