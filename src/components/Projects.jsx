import React from "react";
import projectsData from "./projectsData.json"; // Update the path
import { FiGithub, FiYoutube, FiLink } from "react-icons/fi";
import { FaStar } from 'react-icons/fa';

export default function Projects() {

  return (
    <div className="mt-20 mx-20">
      <div className="my-4">
        <img src="https://media.tenor.com/I3RjM4xQO0kAAAAi/monitors-typing.gif" className='w-20 h-20' />
        <h1 className='text-4xl font-bold text-pink-600  pb-4'>Projects<span className="text-white">.built()</span></h1>
        <span className='text-xl font-semibold mt-6'>Some projects that are close to my heart ♡</span>
        <p className="font-mono opacity-40">Below are some of my favourite projects I've worked on so far, these include hackathon submissions, side tinkers, etc.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16">
        {projectsData.map((project, index) => (
          <div key={project.id} className={`bg-black p-8 rounded-xl mb-8 shadow-purple ${index === projectsData.length - 1 ? 'flex justify-center items-center p-16 pl-20 opacity-40 hover:opacity-90 border-3 border-dashed border-darkGray' : 'hover:shadow-purple-intense'}`} style={{ borderRadius: '10%' }}>
            <a
              href={index === projectsData.length - 1 ? "https://github.com/Dksie09" : project.links[0]?.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-grow"
            >
              <h2 className="text-lg font-semibold text-white">
                <span className="text-pink-600">{project.title.charAt(0)}</span>
                {project.title.slice(1)}
              </h2>

              <div className="mt-4">
                <ul className="flex flex-wrap gap-2 mt-1">
                  {project.tags.map(tag => (
                    <li key={tag} className="bg-gray-800 px-2 py-1 rounded">{tag}</li>
                  ))}
                </ul>
              </div>
              <p className="text-gray-300 mt-2">{project.description}</p>

              <div className="mt-4">
                <ul className="mt-1 flex-wrap">
                  {project.links.map(link => (
                    <li key={link.name}>
                      <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex-row items-center button is-secondary my-3">
                        {link.name === "Star my repo" && <FaStar className="mr-1 " />}
                        {link.name === "Deployed App" && <FiLink className="mr-1" />}
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}