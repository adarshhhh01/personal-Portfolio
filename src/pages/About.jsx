import React from "react";
import Badge from "../components/Badge";
import { Calendar, MapPin, GraduationCap, Heart } from "lucide-react";
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

const About2 = () => {
  return (
    <div id="about" className="flex flex-row-2 mx-auto bg-[#050505] min-h-screen  ">
      <div className="flex flex-row items-center -mt-15 absolute right-[50%]  backdrop-opacity-[.15 drop-shadow-xl">
        <div className="relative w-32 h-32 rounded-full bg-[#f38400] flex flex-col justify-center items-center animate-spin-slow">
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
      </div>

      {/* ================= TECHNOLOGIES SECTION ================= */}
      <section className=" px-6 py-40 grid grid-col-3 gap-3 basis-1/2 md:w-1/2 top-0 right-100 pl-50 mt-30 justify-center">
        <h3 className="text-2xl font-display font-semibold mb-1 text-white">
          Technologies I Love
        </h3>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="text-sm py-2 px-4 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-200"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      {/* ================= JOURNEY TIMELINE ================= */}
      <section className="px-6 py-16 grid grid-col-3 gap-3 basis-1/2 md:w-1/2 mt-30 top-0 left-100 justify-center">
        <h3 className="text-2xl font-display font-semibold mb-6 flex items-center gap-3">
          <GraduationCap className="h-6 w-6 text-orange-400" />
          Journey
        </h3>

        <div className="space-y-6">
          {timeline.map((item, index) => (
            <div key={index} className="relative pl-10">
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
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About2;
