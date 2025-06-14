
import { BookOpen, Code, Gamepad2, Trophy } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: "IIT JEE Aspirant",
      description: "Dedicated preparation with strong foundation in Physics, Chemistry & Mathematics"
    },
    {
      icon: Code,
      title: "Full-Stack Developer",
      description: "Expert in React, Next.js, React Native, and modern web technologies"
    },
    {
      icon: Gamepad2,
      title: "Game Developer",
      description: "Creating engaging games and interactive experiences"
    },
    {
      icon: Trophy,
      title: "Problem Solver",
      description: "Passionate about algorithms, data structures, and competitive programming"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          I'm a passionate developer and future engineer who believes in the power of technology 
          to solve real-world problems while pursuing academic excellence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
          <p className="text-gray-300 leading-relaxed">
            Currently preparing for IIT JEE while simultaneously building my development skills. 
            I believe that the analytical thinking required for physics and mathematics perfectly 
            complements the logical problem-solving needed in programming.
          </p>
          <p className="text-gray-300 leading-relaxed">
            My passion lies in creating applications that not only showcase technical excellence 
            but also provide meaningful solutions. From mobile apps built with React Native to 
            engaging web experiences with Next.js, I enjoy every aspect of the development process.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {["JavaScript", "TypeScript", "React", "Next.js", "React Native", "MySQL", "Node.js"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 flex items-center justify-center text-6xl font-bold text-black">
                P
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Paulastya Chakraborty</h4>
              <p className="text-purple-300">Developer & JEE Aspirant</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, index) => (
          <div key={index} className="group p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
            <div className="mb-4">
              <item.icon className="w-12 h-12 text-purple-400 group-hover:text-cyan-400 transition-colors duration-300" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
            <p className="text-gray-400 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
