
import React from 'react';

const projects = [
  {
    title: "The Clothes Store",
    description: "A premium e-commerce platform for women's fashion. Built with Spring Boot and React for a high-performance shopping experience.",
    tech: ["Spring Boot", "React", "MySQL"],
    techColors: ["#B5838D", "#5D8AA8", "#8B4513"],
    liveLink: "https://raouane-clothes-store.vercel.app",
    githubLink: "https://github.com/raouanekl/clothes-store",
    image: "./assets/clothes-store.jpg",
    fallback: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "JavaFX Manager",
    description: "Desktop-based management solution focused on efficient resource tracking and intuitive user interactions.",
    tech: ["JavaFX", "Java", "SQL"],
    techColors: ["#6B8E23", "#B5838D", "#5D8AA8"],
    liveLink: "#",
    githubLink: "https://github.com/raouanekl/javafx-manager",
    image: "./assets/javafx-manager.jpg",
    fallback: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "calculator",
    description: "A design portfolio concept focusing on visual storytelling and interactive UI elements using modern web standards.",
    tech: ["React", "typescript", "html"],
    techColors: ["#5D8AA8", "#9D81BA", "#DAA520"],
    liveLink: "https://raouanekl.github.io/calculator/",
    githubLink: "https://github.com/raouanekl/calculator",
    image: "./assets/OIP.webp",
    fallback: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-28 space-y-4">
          <span className="text-[#B5838D] font-bold uppercase tracking-[0.5em] text-[10px]">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-medium text-[#4A3E3E] serif italic">Featured Work</h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-[#B5838D] via-[#5D8AA8] to-[#6B8E23] mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {projects.map((project, idx) => (
            <div key={idx} className="group space-y-8">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[50px] shadow-2xl border-8 border-white group-hover:border-[#B5838D]/10 transition-all duration-700 bg-gray-50">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  onError={(e) => { 
                    e.currentTarget.src = project.fallback; 
                  }}
                />
                <div className="absolute inset-0 bg-[#4A3E3E]/60 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[4px] flex flex-col items-center justify-center gap-6 p-8">
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center bg-white py-4 rounded-full text-[#B5838D] text-[10px] font-bold uppercase tracking-[0.3em] shadow-xl hover:bg-[#B5838D] hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0"
                    >
                        Visit Live Site
                    </a>
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center bg-transparent border-2 border-white/50 py-4 rounded-full text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-[#4A3E3E] hover:border-white transition-all transform translate-y-4 group-hover:translate-y-0 delay-75"
                    >
                        View Source Code
                    </a>
                </div>
              </div>

              <div className="px-4 text-center">
                <h3 className="text-3xl font-medium text-[#4A3E3E] serif italic mb-4">{project.title}</h3>
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                  {project.tech.map((t, i) => (
                    <span 
                      key={t} 
                      className="text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-white border border-gray-100 shadow-sm"
                      style={{ color: project.techColors[i] }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-[#7D6B6B] text-sm leading-relaxed font-light line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
