import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiJavascript } from "react-icons/si";
import {
  Atom,
  Code,
  Database,
  Globe,
  Server,
  GitBranch,
  Cpu,
  Layers
} from "lucide-react";
export default function FloatingIcons() {

  return (
    
    <div className="absolute inset-0 overflow-hidden pointer-events-none text-white/10 text-6xl">

      <FaReact className="absolute top-20 left-20 animate-bounce" />

      <FaNodeJs className="absolute bottom-20 left-40 animate-pulse" />

      <SiJavascript className="absolute top-40 right-20 animate-bounce" />

      <SiMongodb className="absolute bottom-40 right-32 animate-pulse" />

      <FaGitAlt className="absolute top-1/2 left-1/2 animate-bounce" />

    </div>
    
  );
}