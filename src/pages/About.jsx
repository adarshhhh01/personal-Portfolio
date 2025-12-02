import Badge from "../components/Badge";
import  {motion}  from "framer-motion";
import { GraduationCap } from "lucide-react";
const timeline = [
  {
    year: "2024",
    title: "Full-Stack Developer",
    description:
      "Leading EmpowerHer project - AI-powered platform for social impact",
    type: "work",
  },
  {
    year: "2023",
    title: "Web Development Specialist",
    description:
      "Specialized in real-time applications and modern web technologies",
    type: "work",
  },
  {
    year: "2022",
    title: "Computer Science Student",
    description: "Focused on software engineering and web technologies",
    type: "education",
  },
];

// TECHNOLOGIES DATA
const technologies = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Git",
  "WebSocket",
  "REST APIs",
  "Firebase",
  "Vercel",
];

const About = () => {
  return (
    <div
      id="about"
      className="relative bg-[#050505] text-white pt-48 pb-16"
    >
      {/* Scroll Down Indicator */}
      <div className="absolute w-32 h-32 rounded-full bg-[#f38400] left-1/2 -translate-x-1/2 top-10 flex flex-col justify-center items-center animate-spin-slow">
        {/* 🔵 Curved Text */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
          <defs>
            <path
              id="circlePath"
              d="M 100, 100
           m -75, 0
           a 75,75 0 1,1 150,0
           a 75,75 0 1,1 -150,0"
            />
          </defs>

          <text className="fill-white text-[10px] tracking-[6px] uppercase">
            <textPath
              href="#circlePath"
              startOffset="50%"
              textAnchor="middle"
            >
              SCROLL DOWN • SCROLL DOWN • SCROLL DOWN •
            </textPath>
          </text>
        </svg>

        {/* 🖱 Mouse Scroll Icon */}
        <span className="mouse w-[25px] h-10 border-2 border-white rounded-[15px] relative flex justify-center items-start">
          <span className="mouse-wheel w-1 h-3 bg-white rounded-full mt-1 animate-scroll-wheel"></span>
        </span>
      </div>

      <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
        {/* ================= TECHNOLOGIES SECTION ================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="px-6 py-16 basis-1/2"
          variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
        >
          <h3 className="text-2xl font-display font-semibold mb-4 text-white">
            Technologies I Love
          </h3>

          <motion.div
            className="flex flex-wrap gap-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {technologies.map((tech) => (
              <motion.div
                key={tech}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              >
                <Badge
                  variant="outline"
                  className="text-sm py-2 px-4 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-200"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ================= JOURNEY TIMELINE ================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="px-6 py-16 basis-1/2"
          variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
        >
          <h3 className="text-2xl font-display font-semibold mb-6 flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-orange-400" />
            Journey
          </h3>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
          >
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="relative pl-10"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                {/* Dot */}
                <div className="absolute left-0 top-2 w-4 h-4 bg-orange-400 rounded-full border-4 border-[#050505] shadow-lg"></div>

                {/* Line */}
                {index !== timeline.length - 1 && (
                  <div className="absolute left-2 top-6 bottom-0 w-0.5 bg-gray-700"></div>
                )}

                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-orange-400 bg-orange-500/10 px-2 py-1 rounded">
                      {item.year}
                    </span>
                    <Badge
                      variant={item.type === "work" ? "default" : "secondary"}
                      className="capitalize"
                    >
                      {item.type}
                    </Badge>
                  </div>

                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};
export default About;
