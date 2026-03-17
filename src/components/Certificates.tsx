import { motion } from "framer-motion";
import { Award, ExternalLink, BadgeCheck } from "lucide-react";

const certificates = [
  {
    title: "Oracle Generative AI Professional",
    org: "Oracle Corporation",
    date: "Sep 2025",
    badge: "AI Certification",
    link: "https://www.linkedin.com/posts/himanshu-chaudhary556_oracle-certified-professional-certificate-activity-7378849035123642368-_GMV",
  },
  {
    title: "ChatGPT Made Easy: AI Essentials",
    org: "Udemy",
    date: "2025",
    badge: "AI Tools",
    link: "https://www.linkedin.com/posts/himanshu-chaudhary556_udemy-course-completion-certificate-activity-7378752570577764353-Yf2Z",
  },
  {
    title: "Data Structures and Algorithms (C++)",
    org: "Centre of Professional Enhancement – LPU",
    date: "Jul 2025",
    badge: "DSA",
    link: "https://www.linkedin.com/posts/himanshu-chaudhary556_datastructures-skilldevelopment-lpu-activity-7371926243291738113-oda1",
  },
  {
    title: "Bits and Bytes of Computer Networking",
    org: "Coursera",
    date: "2024",
    badge: "Networking",
    link: "https://www.linkedin.com/posts/himanshu-chaudhary556_completion-certificate-for-the-bits-and-bytes-activity-7238262777822257152-nbEB",
  },
  {
    title: "Introduction to Cybersecurity",
    org: "Cisco Networking Academy",
    date: "2024",
    badge: "Cybersecurity",
    link: "https://www.linkedin.com/posts/himanshu-chaudhary556_completion-certificate-for-introduction-to-activity-7238263132308094976-LVpj",
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 px-6 text-white">

      {/* Section Title */}
      <h2 className="text-5xl font-bold text-center mb-16">
        Certificates
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {certificates.map((cert, index) => (

          <motion.a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"

            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
            viewport={{ once: true }}

            className="relative group rounded-2xl"
          >

            {/* Floating Glow Border */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>

            {/* Card */}
            <div className="relative bg-[#0f172a] p-7 rounded-2xl border border-white/10 overflow-hidden">

              {/* Shine Hover Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                <div className="absolute -left-full top-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 group-hover:left-full transition-all duration-1000"></div>
              </div>

              {/* Header */}
              <div className="flex items-center gap-3 mb-4 text-cyan-400">

                <Award size={22} />

                <h3 className="text-lg font-semibold leading-tight">
                  {cert.title}
                </h3>

              </div>

              {/* Organization */}
              <p className="text-gray-300 text-sm mb-4">
                {cert.org}
              </p>

              {/* Badge */}
              <div className="flex items-center justify-between">

                <span className="flex items-center gap-1 text-xs px-3 py-1 rounded-full border border-cyan-400/40 text-cyan-300">
                  <BadgeCheck size={14} />
                  {cert.badge}
                </span>

                <span className="text-xs text-gray-400">
                  {cert.date}
                </span>

              </div>

              {/* Link Icon */}
              <div className="mt-5 flex justify-end text-cyan-400">
                <ExternalLink size={18}/>
              </div>

            </div>

          </motion.a>

        ))}

      </div>

    </section>
  );
}