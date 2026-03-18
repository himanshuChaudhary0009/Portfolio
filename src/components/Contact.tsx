import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 text-white overflow-hidden"
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">

        <h2 className="text-4xl font-bold mb-4">
          <span className="text-white">Get In Touch</span>
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto">
          I'm always open to discussing new opportunities, collaborations,
          or interesting projects. Feel free to reach out!
        </p>

      </div>

      {/* Contact Card */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Email Card */}
        <div className="glow-card p-8 rounded-xl border border-lime-400/20 hover:border-lime-400 transition">

          <Mail className="text-lime-400 mb-4" size={32} />

          <h3 className="text-xl font-semibold mb-2">
            Email Me
          </h3>

          <p className="text-gray-400 mb-6">
            For collaborations, opportunities or project discussions.
          </p>

          <a
            href="mailto:himanshuuu556@gmail.com"
            className="inline-block bg-lime-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Send Email
          </a>

        </div>

        {/* Social Links */}
        <div className="glow-card p-8 rounded-xl border border-lime-400/20 hover:border-lime-400 transition">

          <h3 className="text-xl font-semibold mb-6">
            Connect With Me
          </h3>

          <div className="flex gap-6">

            <a
              href="https://github.com/himanshuChaudhary0009"
              target="_blank"
              className="icon-glow"
            >
              <Github size={30} />
            </a>

            <a
              href="https://linkedin.com/in/himanshu-chaudhary556/"
              target="_blank"
              className="icon-glow"
            >
              <Linkedin size={30} />
            </a>

            <a
              href="mailto:himanshuuu556@gmail.com"
              className="icon-glow"
            >
              <Mail size={30} />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}