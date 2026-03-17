import { FaCode, FaLayerGroup, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

const programming = [
  { name: "C++", level: "85%" },
  { name: "JavaScript", level: "85%" },
  { name: "Java", level: "85%" },
  { name: "PHP", level: "85%" },
];

const frameworks = [
  { name: "React.js", level: "85%" },
  { name: "Node.js", level: "85%" },
  { name: "Express.js", level: "85%" },
  { name: "HTML5", level: "85%" },
  { name: "CSS3", level: "85%" },
  { name: "Tailwind CSS", level: "85%" },
];

const tools = [
  { name: "MySQL", level: "85%" },
  { name: "MongoDB", level: "85%" },
  { name: "Git", level: "85%" },
  { name: "GitHub", level: "85%" },
];

function SkillBar({ name, level, gradient }: any) {
  return (
    <div className="mb-5">
      <p className="mb-1 text-gray-300">{name}</p>

      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: level }}
          transition={{ duration: 1 }}
          className={`h-full bg-gradient-to-r ${gradient}`}
        />

      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 text-white relative">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4">
          Skills & Technologies
        </h2>

        <p className="text-gray-400 text-center mb-14">
          My technical expertise and tools I work with
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Programming */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >

            <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-70 transition"></div>

            <div className="relative bg-[#111827] p-8 rounded-2xl border border-white/10 shadow-xl">

              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600">
                  <FaCode />
                </div>
                <h3 className="text-xl font-semibold">
                  Programming Languages
                </h3>
              </div>

              {programming.map((skill, i) => (
                <SkillBar
                  key={i}
                  name={skill.name}
                  level={skill.level}
                  gradient="from-cyan-400 to-blue-500"
                />
              ))}

            </div>
          </motion.div>

          {/* Frameworks */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="relative group"
          >

            <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-70 transition"></div>

            <div className="relative bg-[#111827] p-8 rounded-2xl border border-white/10 shadow-xl">

              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600">
                  <FaLayerGroup />
                </div>

                <h3 className="text-xl font-semibold">
                  Frameworks & Libraries
                </h3>
              </div>

              {frameworks.map((skill, i) => (
                <SkillBar
                  key={i}
                  name={skill.name}
                  level={skill.level}
                  gradient="from-blue-500 to-purple-500"
                />
              ))}

            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >

            <div className="absolute -inset-[1px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-70 transition"></div>

            <div className="relative bg-[#111827] p-8 rounded-2xl border border-white/10 shadow-xl">

              <div className="flex items-center gap-3 mb-6">

                <div className="p-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600">
                  <FaTools />
                </div>

                <h3 className="text-xl font-semibold">
                  Tools & Platforms
                </h3>

              </div>

              {tools.map((skill, i) => (
                <SkillBar
                  key={i}
                  name={skill.name}
                  level={skill.level}
                  gradient="from-purple-500 to-pink-500"
                />
              ))}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}