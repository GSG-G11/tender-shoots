import React, { useEffect, useRef, useState } from 'react';
import PaintMenu from '../../components/PaintMenu/PaintMenu';
import './Paint.css';

function Draw() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lineColor, setLineColor] = useState('black');
  const [lineOpacity, setLineOpacity] = useState(0.1);

  const saveCanvas = () => {
    const link = document.createElement('a');
    link.download = 'download.jpg';
    link.href = canvasRef.current.toDataURL('image/jpg');
    link.click();
  };
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.globalAlpha = lineOpacity;
    ctx.strokeStyle = lineColor;
    ctxRef.current = ctx;
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, [lineColor, lineOpacity]);

  const startDrawing = (e) => {
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const endDrawing = () => {
    ctxRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = (e) => {
    if (!isDrawing) {
      return;
    }
    ctxRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctxRef.current.stroke();
  };

  return (
    <div className="paint">
      <div className="draw-area">
        <PaintMenu
          setLineColor={setLineColor}
          setLineOpacity={setLineOpacity}
          saveCanvas={saveCanvas}
          clearCanvas={clearCanvas}
        />
        <canvas
          style={{ backgroundColor: 'white' }}
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          onMouseMove={draw}
          ref={canvasRef}
          width="1200px"
          height="720px"
        />
      </div>
    </div>
  );
}

export default Draw;
