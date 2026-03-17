import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const education = [
  {
    school: "Lovely Professional University",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    location: "Phagwara, Punjab",
    date: "Aug '23 - Present",
    score: "CGPA: 7.88",
    side: "left"
  },
  {
    school: "Model Senior Secondary School",
    degree: "Intermediate",
    location: "Ambala, Haryana",
    date: "Apr '22 - Mar '23",
    score: "Percentage: 85%",
    side: "right"
  },
  {
    school: "Maharishi Markendeshwar School",
    degree: "Matriculation",
    location: "Ambala, Haryana",
    date: "Apr '20 - Mar '21",
    score: "Percentage: 87%",
    side: "left"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 text-white relative">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          Education
        </h2>

        <div className="relative">

          {/* Vertical Timeline */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-purple-600 transform -translate-x-1/2"></div>

          <div className="space-y-24">

            {education.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.4, duration: 0.7 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  item.side === "left"
                    ? "justify-start"
                    : "justify-end"
                }`}
              >

                <div className="w-[45%] relative group">

                  {/* Glow */}
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-60 transition"></div>

                  {/* Card */}
                  <div className="relative bg-[#0f172a] p-8 rounded-2xl border border-white/10">

                    <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                      {item.school}
                    </h3>

                    <p className="text-gray-300 mb-4">
                      {item.degree}
                    </p>

                    <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">

                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt /> {item.location}
                      </span>

                      <span className="flex items-center gap-1">
                        <FaCalendarAlt /> {item.date}
                      </span>

                    </div>

                    <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-sm">
                      {item.score}
                    </span>

                  </div>

                </div>

                {/* Timeline Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-full border-4 border-[#020617]">
                  <FaGraduationCap />
                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}