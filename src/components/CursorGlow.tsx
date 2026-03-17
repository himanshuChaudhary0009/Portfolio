import { useEffect } from "react";

export default function CursorGlow() {

  useEffect(() => {

    const glow = document.createElement("div");

    glow.style.position = "fixed";
    glow.style.width = "20px";
    glow.style.height = "20px";
    glow.style.borderRadius = "50%";
    glow.style.pointerEvents = "none";
    glow.style.background = "rgba(34,197,94,0.6)";
    glow.style.filter = "blur(15px)";
    glow.style.zIndex = "9999";

    document.body.appendChild(glow);

    const move = (e: MouseEvent) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);

  }, []);

  return null;
}