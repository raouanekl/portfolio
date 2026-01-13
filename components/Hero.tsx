
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-8 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-8 text-center md:text-left z-10">
          <div className="inline-block px-4 py-1.5 bg-[#B5838D]/10 border border-[#B5838D]/20 text-[#B5838D] rounded-full text-[10px] font-bold uppercase tracking-[0.3em]">
            Software Engineering Student
          </div>
          
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight text-[#4A3E3E]">
            I'm <span className="serif italic text-[#B5838D]">Kihal Raouane</span>
          </h1>

          <p className="text-lg text-[#7D6B6B] max-w-lg leading-relaxed font-light">
            Dedicated student at <span className="text-[#4A3E3E] font-medium italic">University Abdelhamid Mehri Constantine 2</span>. 
            Proven experience in full-stack development with a focus on the Java ecosystem (Spring Boot, JavaFX) and project management.
          </p>

          <div className="flex flex-wrap gap-5 pt-4 justify-center md:justify-start">
            <a href="#projects" className="px-10 py-4 bg-[#B5838D] text-white rounded-full font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-[#E5989B] transition-all shadow-lg shadow-[#B5838D]/20">
              View My Work
            </a>
            <a 
              href="./assets/cv.pdf" 
              download="Kihal_Raouane_CV.pdf" 
              className="px-10 py-4 bg-white border border-[#E8D1D1] text-[#4A3E3E] rounded-full font-bold text-[10px] tracking-[0.2em] uppercase hover:border-[#B5838D] transition-all"
            >
              Download CV
            </a>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#B5838D]/10 rounded-full blur-3xl -z-10"></div>
            <div className="w-64 h-64 md:w-96 md:h-96 overflow-hidden rounded-[60px] border-8 border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 bg-white">
              <img 
                src="./assets/picpro.jpg" 
                alt="Kihal Raouane" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                onError={(e) => { 
                  // If the user hasn't uploaded profile.jpg yet, show a nice aesthetic placeholder
                  e.currentTarget.src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
