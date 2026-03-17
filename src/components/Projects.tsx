import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Disaster-Mate",
    subtitle: "Student Disaster Preparedness",
    date: "Nov '25 - Dec '25",
    description:
      "Full-stack disaster preparedness platform providing real-time alerts, emergency drills, and safety guidance for students.",
    points: [
      "Built 3+ core modules with interactive dashboard",
      "Designed 10+ reusable UI components using Tailwind CSS"
    ],
    demo: "https://disastermate.vercel.app",
    github: "https://github.com/himanshuChaudhary0009/DisasterMate",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"]
  },
  {
    title: "Fraud-Detection Assistance",
    subtitle: "Smart Transaction Risk Detection",
    date: "Mar '25 - Apr '25",
    description:
      "AI-powered system analyzing transaction data to identify potentially fraudulent or high-risk activities.",
    points: [
      "Enabled structured input for 5+ transaction attributes",
      "Implemented AI-driven risk classification logic"
    ],
    github: "https://github.com/himanshuChaudhary0009/Fraud_detection_assistance",
    tech: ["HTML", "Python", "Google Gemini AI"]
  },
  {
    title: "Crop Yield Prediction",
    subtitle: "Data-Driven Farming Portal",
    date: "Feb '25 - Apr '25",
    description:
      "Crop yield prediction platform enabling data-driven decisions with location-specific insights and real-time weather data.",
    points: [
      "Improved crop planning accuracy for 100+ simulated farmer profiles",
      "Implemented real-time weather data integration"
    ],
    github: "https://github.com/himanshuChaudhary0009/Crop-Yield-Prediction-",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "PHP", "MySQL"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-5xl font-bold text-center mb-4">
          Featured Projects
        </h2>

        <p className="text-gray-400 text-center mb-16">
          Showcasing my recent work and technical achievements
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.7 }}
              viewport={{ once: true }}
              className="relative group"
            >

              {/* Glow Border */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-60 transition"></div>

              {/* Card */}
              <div className="relative bg-[#0f172a] p-8 rounded-2xl border border-white/10">

                {/* Header */}
                <div className="flex justify-between items-start mb-3">

                  <h3 className="text-2xl font-semibold">
                    {project.title}
                  </h3>

                  <span className="text-gray-400 text-sm">
                    {project.date}
                  </span>

                </div>

                <p className="text-cyan-400 mb-4">
                  {project.subtitle}
                </p>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Points */}
                <ul className="text-gray-400 text-sm space-y-2 mb-5">

                  {project.points.map((p, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-cyan-400">•</span> {p}
                    </li>
                  ))}

                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">

                  {project.tech.map((tech, i) => (

                    <span
                      key={i}
                      className="text-xs border border-cyan-500/40 text-cyan-400 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Buttons */}
                <div className="flex gap-4">

                  <a
                    href={project.github}
                    className="flex items-center gap-2 border border-gray-600 px-4 py-2 rounded-lg hover:border-cyan-400 transition"
                  >
                    <FaGithub />
                    Code
                  </a>

                  <a
                    href={project.demo}
                    className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 rounded-lg"
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}