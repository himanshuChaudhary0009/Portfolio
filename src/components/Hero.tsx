import FloatingIcons from "./FloatingIcons";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Github, Linkedin, Mail, FolderKanban, Download } from "lucide-react";
import useParallax from "./useParallax";

export default function Hero() {
  const typedRef = useRef(null);
const heroRef = useRef(null);
useParallax(heroRef);
  useEffect(() => {
    const typed = new Typed(typedRef.current!, {
      strings: [
        "Full Stack Developer",
        "React Developer",
        "Node.js Backend Developer",
        "Problem Solver"
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1200,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center text-white gradient-mesh overflow-hidden">
      <FloatingIcons />
    <div ref={heroRef}></div>
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <p className="text-lime-400 tracking-widest mb-4">
          AVAILABLE FOR OPPORTUNITIES
        </p>

        <h1 className="text-6xl md:text-7xl font-bold mb-4 relative">
          <span className=" text-white">Himanshu Chaudhary</span>
        </h1>
        
        <h2 className="text-2xl text-lime-400 mb-6">
          <span ref={typedRef}></span>
        </h2>

        <p className="max-w-xl text-gray-300 leading-relaxed mb-8">
          B.Tech CSE student building scalable full-stack web applications
          using React, Node.js, and modern backend systems. Passionate about
          creating seamless digital experiences.
        </p>

        {/* MAIN BUTTONS */}
        <div className="flex flex-wrap gap-5 mb-8">

          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-lime-400 to-green-500 text-black font-semibold shadow-lg hover:scale-105 hover:shadow-lime-400/40 transition"
          >
            <FolderKanban size={18}/>
            Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black transition shadow-md hover:shadow-lime-400/40"
          >
            Contact
          </a>

          <a
            href="/Resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-purple-400 text-purple-400 hover:bg-purple-500 hover:text-white transition shadow-md hover:shadow-purple-400/40"
          >
            <Download size={18}/>
            Resume
          </a>

        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-6 text-gray-300">

          <a
            href="https://github.com/himanshuChaudhary0009"
            target="_blank"
            className="p-3 rounded-full border border-gray-600 hover:border-lime-400 hover:text-lime-400 hover:shadow-lg hover:shadow-lime-400/30 transition"
          >
            <Github size={22}/>
          </a>

          <a
            href="https://www.linkedin.com/in/himanshu-chaudhary556/"
            target="_blank"
            className="p-3 rounded-full border border-gray-600 hover:border-blue-400 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400/30 transition"
          >
            <Linkedin size={22}/>
          </a>

          <a
            href="mailto:himanshuuu556@gmail.com"
            className="p-3 rounded-full border border-gray-600 hover:border-purple-400 hover:text-purple-400 hover:shadow-lg hover:shadow-purple-400/30 transition"
          >
            <Mail size={22}/>
          </a>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">

        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">

          <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-bounce"></div>

        </div>

        <span className="text-gray-400 text-xs mt-2">
          scroll
        </span>

      </div>

    </section>
  );
} 