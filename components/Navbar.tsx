
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-lg shadow-[#B5838D]/10' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-8 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-2xl font-semibold text-[#4A3E3E] serif italic hover:text-[#B5838D] transition-colors flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#B5838D]"></span>
          raouane-dev
        </a>
        
        <div className="hidden md:flex items-center space-x-8 text-[10px] font-bold uppercase tracking-[0.3em] text-[#4A3E3E]">
          <a href="#home" className="hover:text-[#B5838D] transition-colors">Home</a>
          <a href="#projects" className="hover:text-[#B5838D] transition-colors">Projects</a>
          <a href="#contact" className="hover:text-[#B5838D] transition-colors">Contact</a>
          <div className="flex items-center gap-4 ml-4">
            <a 
              href="https://github.com/raouanekl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#4A3E3E] hover:text-[#B5838D] transition-colors"
            >
              GitHub
            </a>
            <a 
              href="./assets/cv.pdf" 
              download 
              className="bg-[#B5838D] text-white px-6 py-2.5 rounded-full hover:bg-[#E5989B] transition-all shadow-md"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="md:hidden flex gap-4">
            <a href="https://github.com/raouanekl" target="_blank" rel="noopener noreferrer" className="text-[#B5838D] p-2 bg-white rounded-full shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
            <a href="./assets/cv.pdf" download className="text-[#B5838D] p-2 bg-white rounded-full shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
