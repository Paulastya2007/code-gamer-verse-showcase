
import { ExternalLink, Github, Smartphone, Monitor, Gamepad2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Mobile Finance Tracker",
      description: "React Native app with expense tracking, budget management, and financial insights using Expo and MySQL.",
      icon: Smartphone,
      tech: ["React Native", "Expo", "MySQL", "JavaScript"],
      color: "from-blue-500 to-purple-600",
      category: "Mobile App"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application with Next.js, featuring user authentication, payment integration, and admin dashboard.",
      icon: Monitor,
      tech: ["Next.js", "TypeScript", "MySQL", "Tailwind"],
      color: "from-green-500 to-cyan-600",
      category: "Web App"
    },
    {
      title: "Interactive Puzzle Game",
      description: "Web-based puzzle game with multiple levels, leaderboards, and smooth animations built with React.",
      icon: Gamepad2,
      tech: ["React", "JavaScript", "CSS3", "Local Storage"],
      color: "from-pink-500 to-red-600",
      category: "Game"
    },
    {
      title: "JEE Study Companion",
      description: "Personal study tracker with formula sheets, practice problems, and progress analytics for JEE preparation.",
      icon: Monitor,
      tech: ["React", "TypeScript", "Chart.js", "Firebase"],
      color: "from-purple-500 to-indigo-600",
      category: "Web App"
    },
    {
      title: "Real-time Chat App",
      description: "Mobile chat application with real-time messaging, file sharing, and group chat functionality.",
      icon: Smartphone,
      tech: ["React Native", "Node.js", "Socket.io", "MongoDB"],
      color: "from-yellow-500 to-orange-600",
      category: "Mobile App"
    },
    {
      title: "Portfolio Website",
      description: "This interactive portfolio website with unique animations, 3D elements, and responsive design.",
      icon: Monitor,
      tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
      color: "from-cyan-500 to-blue-600",
      category: "Web App"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          A showcase of my development journey across web, mobile, and game development
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            
            <div className="relative p-6">
              {/* Project Icon & Category */}
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color} bg-opacity-20`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-purple-300 bg-purple-500/20 px-2 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-md border border-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105">
                  <ExternalLink size={16} />
                  Live Demo
                </button>
                <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-300 transform hover:scale-105">
                  <Github size={16} />
                </button>
              </div>
            </div>

            {/* Hover Effect Lines */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50">
          View All Projects on GitHub
        </button>
      </div>
    </section>
  );
};

export default Projects;
