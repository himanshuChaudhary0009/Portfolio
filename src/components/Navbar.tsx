export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 backdrop-blur-lg bg-white/5 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between p-4">
        <h1 className="text-cyan-400 font-bold text-xl">Himanshu Chaudhary</h1>

        <div className="space-x-6 text-gray-300">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}