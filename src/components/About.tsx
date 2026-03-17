import { FaCode, FaDatabase, FaGlobe, FaMagic } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-24 text-white relative">

      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-5xl font-bold text-center mb-4">
          About Me
        </h2>

        <p className="text-gray-400 text-center mb-14">
          Passionate about creating impactful digital experiences
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Card */}
          <div className="relative group">

            {/* Glow border */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition"></div>

            <div className="relative bg-[#0f172a] p-8 rounded-2xl border border-white/10">

              <h3 className="text-2xl text-cyan-400 font-semibold mb-4">
                Who I Am
              </h3>

              <p className="text-gray-300 leading-relaxed mb-6">
                Passionate Full Stack Developer with expertise in building
                scalable web applications. Experienced in React.js, Node.js,
                and modern web technologies. Strong problem-solving skills
                with 200+ coding challenges solved. Committed to writing
                clean, maintainable code and creating exceptional user
                experiences.
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-3">

                {[
                  "Problem-Solving",
                  "Team Player",
                  "Adaptability",
                  "Time Management"
                ].map((tag, i) => (

                  <span
                    key={i}
                    className="px-4 py-2 rounded-full border border-cyan-400/40 text-cyan-300 text-sm"
                  >
                    {tag}
                  </span>

                ))}

              </div>

            </div>

          </div>


          {/* Right Grid */}
          <div className="grid grid-cols-2 gap-6">

            {/* Card 1 */}
            <FeatureCard
              icon={<FaCode />}
              title="Full Stack Development"
              text="Building complete web solutions from frontend to backend"
            />

            {/* Card 2 */}
            <FeatureCard
              icon={<FaDatabase />}
              title="Database Design"
              text="Expertise in MySQL and MongoDB for efficient data management"
            />

            {/* Card 3 */}
            <FeatureCard
              icon={<FaGlobe />}
              title="Modern Technologies"
              text="Using latest frameworks and tools for optimal performance"
            />

            {/* Card 4 */}
            <FeatureCard
              icon={<FaMagic />}
              title="Problem Solving"
              text="200+ coding challenges solved with strong algorithmic skills"
            />

          </div>

        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, text }: any) {
  return (
    <div className="relative group">

      {/* Glow border */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl blur opacity-20 group-hover:opacity-70 transition"></div>

      <div className="relative bg-[#0f172a] p-6 rounded-xl border border-white/10">

        <div className="text-cyan-400 text-2xl mb-3">
          {icon}
        </div>

        <h4 className="font-semibold mb-2">
          {title}
        </h4>

        <p className="text-gray-400 text-sm">
          {text}
        </p>

      </div>

    </div>
  );
}