import { useEffect } from "react";

export default function useParallax(ref:any) {

  useEffect(() => {
    const handleMove = (e:MouseEvent) => {

      const x = (window.innerWidth/2 - e.clientX) / 30;
      const y = (window.innerHeight/2 - e.clientY) / 30;

      if(ref.current){
        ref.current.style.transform = `translate(${x}px, ${y}px)`
      }
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);

  }, []);
}