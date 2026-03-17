import { motion } from "framer-motion";
import { FaCode, FaTrophy, FaHandsHelping, FaRocket } from "react-icons/fa";

const achievements = [
  {
    icon: <FaCode />,
    title: "200+ Problems Solved",
    desc: "Solved 200+ problems on LeetCode and GeeksforGeeks building strong algorithmic foundations.",
    date: "Dec 2025"
  },
  {
    icon: <FaTrophy />,
    title: "HackQuest CTF – Rank #25",
    desc: "Secured 25th rank in the HackQuest Capture The Flag cybersecurity challenge.",
    date: "Mar 2024"
  },
  {
    icon: <FaHandsHelping />,
    title: "NGO Volunteer",
    desc: "Worked with Vatsalya Kishori Foundation supporting education and empowerment initiatives.",
    date: "2024"
  },
  {
    icon: <FaRocket />,
    title: "Full-Stack Project Development",
    desc: "Developed multiple full-stack projects integrating modern frameworks and scalable architecture.",
    date: "2025"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 text-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-5xl font-bold text-center mb-16">
          Achievements
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {achievements.map((item, index) => (

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

                <div className="flex items-start gap-4">

                  <div className="text-cyan-400 text-2xl">
                    {item.icon}
                  </div>

                  <div>

                    <h3 className="text-xl font-semibold mb-1">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-2">
                      {item.desc}
                    </p>

                    <span className="text-cyan-400 text-sm">
                      {item.date}
                    </span>

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Closing Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-20 text-center"
        >

          <div className="relative inline-block group">

            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 blur opacity-40 group-hover:opacity-70 transition rounded-xl"></div>

            <p className="relative bg-[#0f172a] px-8 py-4 rounded-xl border border-white/10 text-lg text-gray-200">
              Committed to continuous learning and excellence.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}