
import { useState } from "react";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");

  const skillCategories = {
    Frontend: [
      { name: "React", level: 90, color: "from-blue-400 to-blue-600" },
      { name: "Next.js", level: 85, color: "from-gray-400 to-gray-600" },
      { name: "TypeScript", level: 80, color: "from-blue-500 to-blue-700" },
      { name: "Tailwind CSS", level: 95, color: "from-cyan-400 to-cyan-600" },
      { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-600" }
    ],
    Mobile: [
      { name: "React Native", level: 85, color: "from-purple-400 to-purple-600" },
      { name: "Expo", level: 80, color: "from-indigo-400 to-indigo-600" },
      { name: "Mobile UI/UX", level: 75, color: "from-pink-400 to-pink-600" }
    ],
    Backend: [
      { name: "Node.js", level: 70, color: "from-green-400 to-green-600" },
      { name: "MySQL", level: 75, color: "from-orange-400 to-orange-600" },
      { name: "APIs", level: 80, color: "from-red-400 to-red-600" }
    ],
    GameDev: [
      { name: "Game Logic", level: 75, color: "from-purple-400 to-pink-600" },
      { name: "Interactive Design", level: 80, color: "from-cyan-400 to-purple-600" },
      { name: "2D Graphics", level: 70, color: "from-green-400 to-cyan-600" }
    ]
  };

  const categories = Object.keys(skillCategories);

  return (
    <section id="skills" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Skills Constellation
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Explore my technical skills across different domains of development
        </p>
      </div>

      {/* Category Selector */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
              selectedCategory === category
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-purple-500/20"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Display */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories[selectedCategory].map((skill, index) => (
          <div
            key={skill.name}
            className="group p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
              <span className="text-purple-400 font-bold">{skill.level}%</span>
            </div>
            
            <div className="w-full bg-gray-700 rounded-full h-3 mb-4 overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                style={{ width: `${skill.level}%` }}
              />
            </div>

            {/* Skill Level Indicator */}
            <div className="flex justify-between text-xs text-gray-400">
              <span>Beginner</span>
              <span>Expert</span>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Elements */}
      <div className="mt-16 text-center">
        <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">Currently Learning</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Advanced Algorithms", "System Design", "Machine Learning", "DevOps"].map((topic) => (
              <span key={topic} className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30 animate-pulse">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
