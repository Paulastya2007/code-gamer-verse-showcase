
import { useState, useEffect } from "react";
import { Github, Linkedin, Terminal, Code, Gamepad2 } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Future IIT Engineer & Full-Stack Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const floatingIcons = [
    { Icon: Code, delay: "0s", position: "top-20 left-20" },
    { Icon: Terminal, delay: "2s", position: "top-32 right-32" },
    { Icon: Gamepad2, delay: "4s", position: "bottom-40 left-32" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Background Icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <Icon
          key={index}
          className={`absolute ${position} text-purple-500/20 w-16 h-16 animate-pulse`}
          style={{ animationDelay: delay }}
        />
      ))}

      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="inline-block p-4 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 flex items-center justify-center">
              <span className="text-2xl font-bold text-black">P</span>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
          Paulastya Chakraborty
        </h1>

        <div className="text-xl md:text-2xl text-gray-300 mb-8 h-8">
          <span className="border-r-2 border-purple-400 pr-1 animate-pulse">
            {displayText}
          </span>
        </div>

        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Passionate about solving complex problems through code while preparing for IIT JEE. 
          I build innovative web apps, mobile applications, and games that make a difference.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50">
            View My Work
          </button>
          <button className="px-8 py-3 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            Download Resume
          </button>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/Paulastya2007"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 hover:bg-purple-600 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/paulastya-chakraborty/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
