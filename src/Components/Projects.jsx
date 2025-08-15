import React from "react";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

import portfolioImg from "../assets/tourzen.png";
import ecommerceImg from "../assets/secure-tomorrow.png";
import blogImg from "../assets/plantly.png";
import { Link } from "react-router";

const Projects = () => {
  const projects = [
    {
      title: "Tourzen",
      description:
        "A dynamic tour booking platform that helps users explore and plan their perfect trips with an easy-to-use interface, built with React and Tailwind CSS.",
      image: portfolioImg,
      tech: [
       <FaReact className="text-cyan-400" />,
        <SiTailwindcss className="text-teal-400" />,
        <FaNodeJs className="text-green-500" />,
        <SiMongodb className="text-green-700" />,
      ],
      github: "https://github.com/anamolhasan/tourzen-client?tab=readme-ov-file",
      live: "https://tourzen-b2ebf.web.app/",
    projectDetails:'tourzen'
    },
    {
      title: "Secure Tomorrow",
      description:
        "An insurance management system offering secure policy handling, claims processing, and customer account management for peace of mind.",
      image: ecommerceImg,
      tech: [
        <FaReact className="text-cyan-400" />,
        <SiTailwindcss className="text-teal-400" />,
        <FaNodeJs className="text-green-500" />,
        <SiMongodb className="text-green-700" />,
      ],
      github: "https://github.com/anamolhasan/secure_tomorrow_client",
      live: "https://tomorrow-130f9.web.app/",
        projectDetails:'secure-tomorrow'
    },
    {
      title: "Plantly",
      description:
        "An interactive community-driven plant care blog where users can publish articles, exchange gardening advice, and participate in discussions to nurture their passion for plants.",
      image: blogImg,
      tech: [
        <FaReact className="text-cyan-400" />,
        <SiTailwindcss className="text-teal-400" />,
        <FaNodeJs className="text-green-500" />,
        <SiMongodb className="text-green-700" />,
      ],
      github: "https://github.com/anamolhasan/plantly-client",
      live: "https://plantly-ff2fd.web.app/",
         projectDetails:'plantly'
    },
  ];

  return (
    <section className=" py-16" id="projects">
      <div className="container mx-auto px-5 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center  mb-12">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition transform"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex gap-3 text-2xl mb-4">
                    {project.tech.map((icon, i) => (
                      <span key={i}>{icon}</span>
                    ))}
                  </div>
                   <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-900 transition"
                  >
                    <FaGithub /> Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                  >
                    <FiExternalLink /> Live
                  </a>
                  <Link
                    to={`/projectDetails/${project.projectDetails}`}
                    // href='/project1'
                   
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                  >
                    <FiExternalLink /> Details
                  </Link>
                 
                </div>
                </div>
               
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
