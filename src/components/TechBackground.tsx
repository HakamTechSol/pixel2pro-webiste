import { useEffect, useRef } from "react";

interface CanvasNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  type: "dot" | "symbol";
  char?: string;
  size?: number;
  opacity: number;
}

const TechBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const totalCount = Math.min(78, Math.floor((width * height) / 15000));
    const nodes: CanvasNode[] = [];

    const educationalSymbols = [
      "</>", "{}", "[]", "( )", "f()", "JS", "Py", "C#", "SQL", "AI",
      "??", "??", "1", "0", "++", "=>", "Code", "Web"
    ];

    for (let i = 0; i < totalCount; i++) {
      const isSymbol = Math.random() < 0.48;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.38,
        vy: (Math.random() - 0.5) * 0.38,
        radius: Math.random() * 1.8 + 1.25,
        type: isSymbol ? "symbol" : "dot",
        char: isSymbol ? educationalSymbols[Math.floor(Math.random() * educationalSymbols.length)] : undefined,
        size: isSymbol ? Math.floor(Math.random() * 6) + 12 : undefined,
        opacity: Math.random() * 0.28 + 0.2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(148, 163, 184, 0.16)";
      ctx.lineWidth = 1;
      const gridSpacing = 78;

      for (let x = 0; x < width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        node.x += node.vx;
        node.y += node.vy;

        const margin = 24;
        if (node.x < -margin) node.x = width + margin;
        if (node.x > width + margin) node.x = -margin;
        if (node.y < -margin) node.y = height + margin;
        if (node.y > height + margin) node.y = -margin;

        if (node.type === "symbol" && node.char && node.size) {
          ctx.font = `700 ${node.size}px Inter, "Segoe UI", sans-serif`;
          ctx.fillStyle = `rgba(51, 65, 85, ${node.opacity})`;
          ctx.fillText(node.char, node.x, node.y);
        } else {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(51, 65, 85, ${node.opacity})`;
          ctx.fill();
        }

        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 145) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            const lineOpacity = (1 - distance / 145) * 0.18;
            ctx.strokeStyle = `rgba(71, 85, 105, ${lineOpacity})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 select-none opacity-70"
      style={{ mixBlendMode: "multiply" }}
    />
  );
};

export default TechBackground;
