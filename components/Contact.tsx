

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const myEmail = "rorkihal@gmail.com";
  const myPhone = "0555332095";

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`Hello Raouane,\n\n${formData.message}\n\nFrom,\n${formData.name} (${formData.email})`);
    window.location.href = `mailto:${myEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-32 px-8 overflow-hidden">
      {/* Vibrant Multi-color Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#B5838D]/10 rounded-full blur-[120px] -z-10 -translate-x-1/2"></div>
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#5D8AA8]/10 rounded-full blur-[100px] -z-10 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#6B8E23]/5 rounded-full blur-[150px] -z-10"></div>
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-[#9D81BA]/10 rounded-full blur-[80px] -z-10"></div>

      <div className="container mx-auto max-w-6xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          
          {/* Left Side: Info */}
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1 bg-white border border-[#B5838D]/20 text-[#B5838D] rounded-full text-[10px] font-bold uppercase tracking-[0.4em] shadow-sm">
                Get In Touch
              </span>
              <h2 className="text-5xl md:text-7xl font-semibold text-[#4A3E3E] serif italic leading-tight">
                Let's <span className="text-[#B5838D]">create</span> <br /> 
                something <span className="text-[#5D8AA8]">magic</span>.
              </h2>
            </div>
            
            <p className="text-[#7D6B6B] text-lg leading-relaxed font-light max-w-md">
              Currently accepting new projects. Based in <span className="font-semibold text-[#4A3E3E] italic">Constantine, Algeria</span>.
            </p>

            <div className="space-y-8 pt-4">
              {/* Email Card - Rose Theme */}
              <div className="group flex items-center gap-6 p-6 bg-white/70 backdrop-blur-md rounded-[30px] border border-[#B5838D]/20 hover:border-[#B5838D]/50 transition-all duration-500 hover:shadow-xl shadow-sm">
                <div className="w-14 h-14 bg-gradient-to-br from-[#B5838D] to-[#E5989B] rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#B5838D]">Direct Email</span>
                  <a href={`mailto:${myEmail}`} className="text-xl text-[#4A3E3E] hover:text-[#B5838D] transition-colors font-medium serif italic">{myEmail}</a>
                </div>
              </div>

              {/* Phone Card - Sky Blue Theme */}
              <div className="group flex items-center gap-6 p-6 bg-white/70 backdrop-blur-md rounded-[30px] border border-[#5D8AA8]/20 hover:border-[#5D8AA8]/50 transition-all duration-500 hover:shadow-xl shadow-sm">
                <div className="w-14 h-14 bg-gradient-to-br from-[#5D8AA8] to-[#7FB3D5] rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:-rotate-6 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#5D8AA8]">Call Now</span>
                  <a href={`tel:${myPhone}`} className="text-xl text-[#4A3E3E] hover:text-[#5D8AA8] transition-colors font-medium serif italic">{myPhone}</a>
                </div>
              </div>

              {/* Location Card - Sage Green Theme */}
              <div className="group flex items-center gap-6 p-6 bg-white/70 backdrop-blur-md rounded-[30px] border border-[#6B8E23]/20 hover:border-[#6B8E23]/50 transition-all duration-500 hover:shadow-xl shadow-sm">
                <div className="w-14 h-14 bg-gradient-to-br from-[#6B8E23] to-[#9DC183] rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#6B8E23]">Location</span>
                  <span className="text-xl text-[#4A3E3E] font-medium serif italic">Constantine, DZ</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-3">
            <div className="bg-white/90 backdrop-blur-xl p-10 md:p-16 rounded-[60px] shadow-2xl border border-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#9D81BA]/10 to-transparent rounded-bl-[100px]"></div>
              
              <form onSubmit={handleSubmit} className="space-y-10 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name Field - Lavender Accent */}
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#9D81BA] ml-2">Full Name</label>
                    <input 
                      type="text" required
                      placeholder="Jane Doe"
                      className="w-full bg-white rounded-2xl border border-[#9D81BA]/20 p-5 focus:ring-4 focus:ring-[#9D81BA]/10 focus:border-[#9D81BA]/50 outline-none transition-all text-[#4A3E3E] placeholder:text-[#9D81BA]/30"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  {/* Email Field - Sky Blue Accent */}
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#5D8AA8] ml-2">Email Address</label>
                    <input 
                      type="email" required
                      placeholder="jane@example.com"
                      className="w-full bg-white rounded-2xl border border-[#5D8AA8]/20 p-5 focus:ring-4 focus:ring-[#5D8AA8]/10 focus:border-[#5D8AA8]/50 outline-none transition-all text-[#4A3E3E] placeholder:text-[#5D8AA8]/30"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                
                {/* Message Field - Rose Accent */}
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#B5838D] ml-2">Your Message</label>
                  <textarea 
                    rows={4} required
                    placeholder="Tell me about your project..."
                    className="w-full bg-white rounded-3xl border border-[#B5838D]/20 p-5 focus:ring-4 focus:ring-[#B5838D]/10 focus:border-[#B5838D]/50 outline-none transition-all resize-none text-[#4A3E3E] placeholder:text-[#B5838D]/30"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-2xl p-6 transition-all duration-500 shadow-xl shadow-[#B5838D]/20 active:scale-95"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#B5838D] via-[#5D8AA8] to-[#9D81BA] group-hover:scale-110 transition-transform duration-500"></div>
                  <span className="relative z-10 text-white font-bold uppercase tracking-[0.5em] text-xs">
                    Send Colorful Message
                  </span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
