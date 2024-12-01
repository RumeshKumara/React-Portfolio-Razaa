// import React from 'react'
import image1 from "/public/1.png";
import image2 from "/public/1.png";
import image3 from "/public/1.png";
import image4 from "/public/1.png";
import image5 from "/public/1.png";

const projectsData = [
  {
    image: image1,
    title: "Habit Tracker",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quae eius et nulla architecto, ipsum molestias facere nisi perferendis sunt maiores repudiandae nemo voluptatibus modi reiciendis facilis ut. Voluptatibus, eaque!",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
  },
  {
    image: image2,
    title: "Todo App",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quae eius et nulla architecto, ipsum molestias facere nisi perferendis sunt maiores repudiandae nemo voluptatibus modi reiciendis facilis ut. Voluptatibus, eaque!",
    technologies: ["TypeScript", "Next.js", "Tailwind", "PostgreSQLL"],
  },
  {
    image: image3,
    title: "Social Media App",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quae eius et nulla architecto, ipsum molestias facere nisi perferendis sunt maiores repudiandae nemo voluptatibus modi reiciendis facilis ut. Voluptatibus, eaque!",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
  },
  {
    image: image4,
    title: "Restaurant Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quae eius et nulla architecto, ipsum molestias facere nisi perferendis sunt maiores repudiandae nemo voluptatibus modi reiciendis facilis ut. Voluptatibus, eaque!",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
  },
  {
    image: image5,
    title: "Admin Dashboard",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quae eius et nulla architecto, ipsum molestias facere nisi perferendis sunt maiores repudiandae nemo voluptatibus modi reiciendis facilis ut. Voluptatibus, eaque!",
    technologies: ["React", "Tailwind", "Docker", "MySQL"],
  },

]

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col items-center gap-8 md:flow-row md:gap-24">
      <img src={project.image} alt="" className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]" />

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold">{project.title}</div>
          <p className="text-gray-400">{project.description}</p>
        </div>

        <div className="flex flex-col gap-5">
          {
            project.technologies.map((tech, index) => (
              <span key={index} className="p-3 bg-black rounded-lg">{tech}</span>
            ))
          }
        </div>
      </div>
    </div>
  )
}
const Project = () => {
  return (
    <div id="projects" className="flex flex-col items-center justify-center w-full min-h-screen gap-16 p-4 md:px-14 md:py-24 ">
      <h1 className="text-4xl font-light text-white md:text-6xl">My Projects</h1>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {
          projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        }
      </div>
    </div>
  )
}

export default Project
