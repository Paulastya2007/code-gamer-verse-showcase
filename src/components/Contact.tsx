
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "paulastya.dev@gmail.com",
      href: "mailto:paulastya.dev@gmail.com"
    },
    {
      icon: Github,
      title: "GitHub",
      content: "github.com/Paulastya2007",
      href: "https://github.com/Paulastya2007"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      content: "linkedin.com/in/paulastya-chakraborty",
      href: "https://www.linkedin.com/in/paulastya-chakraborty/"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Ready to collaborate, discuss opportunities, or just chat about technology and development
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              I'm always open to discussing new opportunities, collaborating on interesting projects, 
              or helping with development challenges. Whether you're looking for a developer, 
              have a project idea, or just want to connect, feel free to reach out!
            </p>
          </div>

          {/* Contact Methods */}
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                  <item.icon className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.content}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
            <h4 className="font-semibold text-white mb-4">Quick Facts</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-purple-400">Location:</span>
                <p className="text-gray-300">India</p>
              </div>
              <div>
                <span className="text-purple-400">Response Time:</span>
                <p className="text-gray-300">Within 24 hours</p>
              </div>
              <div>
                <span className="text-purple-400">Languages:</span>
                <p className="text-gray-300">English, Hindi</p>
              </div>
              <div>
                <span className="text-purple-400">Availability:</span>
                <p className="text-gray-300">Open to opportunities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/20 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="w-6 h-6 text-purple-400" />
            <h3 className="text-xl font-bold text-white">Send a Message</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300 resize-none"
                placeholder="Tell me about your project or just say hello..."
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-16 pt-8 border-t border-purple-500/20">
        <p className="text-gray-400">
          Built with ❤️ using React, TypeScript, and Tailwind CSS
        </p>
        <p className="text-sm text-gray-500 mt-2">
          © 2024 Paulastya Chakraborty. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
