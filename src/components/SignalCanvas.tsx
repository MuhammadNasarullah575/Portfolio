"use client";

import { useEffect, useRef } from "react";

export default function SignalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const spacing = 45;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    class Signal {
      x: number = 0;
      y: number = 0;
      length: number = 80;
      speed: number = 2.5;
      direction: number = 0; // 0: Right, 1: Down, 2: Left, 3: Up
      currentLength: number = 0;
      color: string = "#00ff9c";
      isBlue: boolean = false;

      constructor() {
        this.init();
      }

      init() {
        this.x = Math.floor(Math.random() * (width / spacing)) * spacing;
        this.y = Math.floor(Math.random() * (height / spacing)) * spacing;
        this.length = Math.random() * 120 + 60;
        this.speed = Math.random() * 3 + 1.8;
        this.direction = Math.floor(Math.random() * 4);
        this.currentLength = 0;
        this.isBlue = Math.random() > 0.65;
        this.color = this.isBlue ? "#00b3ff" : "#00ff9c";
      }

      update() {
        this.currentLength += this.speed;
        if (this.currentLength >= this.length) {
          // Change direction or re-init
          if (Math.random() > 0.4) {
            // Pick perpendicular direction
            if (this.direction === 0 || this.direction === 2) {
              this.direction = Math.random() > 0.5 ? 1 : 3;
            } else {
              this.direction = Math.random() > 0.5 ? 0 : 2;
            }
            this.currentLength = 0;
            this.length = Math.random() * 100 + 40;
          } else {
            this.init();
          }
        }

        switch (this.direction) {
          case 0:
            this.x += this.speed;
            break;
          case 1:
            this.y += this.speed;
            break;
          case 2:
            this.x -= this.speed;
            break;
          case 3:
            this.y -= this.speed;
            break;
        }

        // Boundary wrap
        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
          this.init();
        }
      }

      draw() {
        if (!ctx) return;
        ctx.strokeStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 8;
        ctx.lineWidth = 1.8;

        ctx.beginPath();
        let tailX = this.x;
        let tailY = this.y;
        const tailLength = Math.min(this.currentLength, 50);

        switch (this.direction) {
          case 0:
            tailX -= tailLength;
            break;
          case 1:
            tailY -= tailLength;
            break;
          case 2:
            tailX += tailLength;
            break;
          case 3:
            tailY += tailLength;
            break;
        }

        ctx.moveTo(tailX, tailY);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();

        // Bright glowing pulse head
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const signalCount = Math.min(Math.floor(window.innerWidth / 50), 28);
    const signals: Signal[] = [];
    for (let i = 0; i < signalCount; i++) {
      signals.push(new Signal());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint grid intersections/dots
      ctx.fillStyle = "rgba(31, 41, 51, 0.4)";
      for (let x = 0; x < width; x += spacing * 2) {
        for (let y = 0; y < height; y += spacing * 2) {
          ctx.fillRect(x - 0.5, y - 0.5, 1, 1);
        }
      }

      // Update and draw active signals
      signals.forEach((sig) => {
        sig.update();
        sig.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-25 -z-10"
      style={{
        maskImage: "radial-gradient(circle at center, black 30%, transparent 85%)",
        WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 85%)",
      }}
    />
  );
}

