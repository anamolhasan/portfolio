import React from "react";
import { BiLogoVisualStudio } from "react-icons/bi";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiGithub,
  SiFirebase,
  SiNextdotjs,
  SiReactrouter,
  SiJsonwebtokens,
  SiStripe,
  SiFigma,
} from "react-icons/si";

const Skills = () => {
  const frontend = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400 text-4xl" />,
    },
    { name: "React", icon: <FaReact className="text-cyan-400 text-4xl" /> },
     { name: 'React Router v7', icon: <SiReactrouter className="text-red-500 text-4xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black text-4xl" /> },

    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-teal-400 text-4xl" />,
    },
  ];

  const backend = [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-600 text-4xl" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600 text-4xl" />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-yellow-500 text-4xl" />,
    },
     { name: 'JWT', icon: <SiJsonwebtokens className="text-orange-400 text-4xl" /> },
    { name: 'Stripe', icon: <SiStripe className="text-purple-500 text-4xl" /> },
  ];

  const tools = [
    { name: "Git", icon: <FaGitAlt className="text-orange-600 text-4xl" /> },
    { name: "GitHub", icon: <SiGithub className="text-gray-800 text-4xl" /> },
    {
      name: "VS Code",
      icon: <BiLogoVisualStudio className="text-blue-600 text-4xl" />,
    },
     { name: 'Figma', icon: <SiFigma className="text-pink-500 text-4xl" /> },
  ];

  const SkillCategory = ({ title, skills }) => (
    <div className=" py-7 px-14 rounded-lg border">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="">
        {skills.map((skill, index) => (
          <div key={index} className="flex  items-center  p-4  transition">
            {skill.icon}
            <p className="mt-2 pl-5 font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="bg-white py-16">
      <div className=" px-5 md:px-10 space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          My Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-15">
          <SkillCategory title="Frontend" skills={frontend} />
          <SkillCategory title="Backend" skills={backend} />
          <SkillCategory title="Tools" skills={tools} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
