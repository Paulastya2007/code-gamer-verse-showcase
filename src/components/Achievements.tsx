
import { Trophy, Star, Zap, Target, Award, Code } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Code,
      title: "Full-Stack Developer",
      description: "Mastered modern web development with React, Next.js, and mobile development",
      progress: 90,
      color: "from-blue-500 to-purple-600",
      badge: "Expert"
    },
    {
      icon: Zap,
      title: "JEE Preparation",
      description: "Consistent preparation with strong foundation in PCM subjects",
      progress: 75,
      color: "from-green-500 to-cyan-600",
      badge: "In Progress"
    },
    {
      icon: Trophy,
      title: "Project Portfolio",
      description: "Successfully completed 10+ projects across web and mobile platforms",
      progress: 100,
      color: "from-yellow-500 to-orange-600",
      badge: "Completed"
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Advanced skills in algorithms, data structures, and logical thinking",
      progress: 85,
      color: "from-pink-500 to-red-600",
      badge: "Advanced"
    },
    {
      icon: Star,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces with modern design principles",
      progress: 80,
      color: "from-purple-500 to-indigo-600",
      badge: "Proficient"
    },
    {
      icon: Award,
      title: "Game Developer",
      description: "Built interactive games and engaging user experiences",
      progress: 70,
      color: "from-cyan-500 to-blue-600",
      badge: "Intermediate"
    }
  ];

  const stats = [
    { number: "15+", label: "Projects Completed", icon: Code },
    { number: "6+", label: "Technologies Mastered", icon: Star },
    { number: "2+", label: "Years Coding", icon: Zap },
    { number: "100%", label: "Passion for Learning", icon: Trophy }
  ];

  return (
    <section id="achievements" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Achievements & Progress
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Gaming-style progress tracking of my development journey and accomplishments
        </p>
      </div>

      {/* Stats Counter */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/20">
            <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Achievement Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:transform hover:scale-105"
          >
            {/* Achievement Badge */}
            <div className="absolute top-4 right-4">
              <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${achievement.color} text-white`}>
                {achievement.badge}
              </span>
            </div>

            <div className="p-6">
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${achievement.color} bg-opacity-20 mb-4`}>
                <achievement.icon className="w-6 h-6 text-white" />
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {achievement.description}
              </p>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-300">Progress</span>
                  <span className="text-sm font-semibold text-purple-400">{achievement.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${achievement.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${achievement.progress}%` }}
                  />
                </div>
              </div>

              {/* Achievement Level */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < Math.floor(achievement.progress / 20)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-600"
                    } transition-colors duration-300`}
                  />
                ))}
              </div>
            </div>

            {/* Hover Glow Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
          </div>
        ))}
      </div>

      {/* Next Goals Section */}
      <div className="mt-16 text-center">
        <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">Next Milestones</h3>
          <div className="grid md:grid-cols-3 gap-4 text-left">
            <div className="p-4 bg-gray-800/50 rounded-lg">
              <h4 className="font-semibold text-purple-400 mb-2">IIT JEE Success</h4>
              <p className="text-sm text-gray-300">Clear JEE with excellent rank</p>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-lg">
              <h4 className="font-semibold text-cyan-400 mb-2">Open Source</h4>
              <p className="text-sm text-gray-300">Contribute to major projects</p>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-lg">
              <h4 className="font-semibold text-pink-400 mb-2">Startup Launch</h4>
              <p className="text-sm text-gray-300">Build and launch my own product</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
