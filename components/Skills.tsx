
import React from 'react';

const skills = [
  { name: 'Java (Spring Boot)', category: 'Backend Development', color: '#B5838D', bg: '#FFF0F1' },
  { name: 'JavaScript & React', category: 'Frontend Development', color: '#5D8AA8', bg: '#F0F7FF' },
  { name: 'JavaFX', category: 'Desktop Solutions', color: '#6B8E23', bg: '#F5FFEF' },
  { name: 'MySQL', category: 'Databases', color: '#8B4513', bg: '#FFF8F0' },
  { name: 'MS Project', category: 'Project Management', color: '#6A5ACD', bg: '#F3F0FF' },
  { name: 'Canva (UI/UX)', category: 'Design', color: '#DAA520', bg: '#FFFDF0' },
];

const Skills = () => {
  return (
    <section className="py-24 bg-white/50 px-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-20 space-y-4">
          <span className="text-[#B5838D] font-bold uppercase tracking-[0.4em] text-[10px]">Expertise</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#4A3E3E] serif italic">Technical Proficiencies</h2>
          <div className="w-10 h-[2px] bg-[#B5838D] mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <div 
              key={skill.name} 
              className="group p-10 rounded-[40px] border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              style={{ 
                backgroundColor: 'white',
                borderColor: `${skill.color}20`,
              }}
            >
              <div className="flex flex-col items-center text-center gap-6">
                <div 
                  className="w-16 h-16 rounded-3xl flex items-center justify-center transition-transform group-hover:rotate-12"
                  style={{ backgroundColor: `${skill.color}15` }}
                >
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: skill.color }}></div>
                </div>
                <div>
                  <h3 className="font-bold text-[#4A3E3E] text-sm tracking-[0.1em] uppercase">{skill.name}</h3>
                  <p 
                    className="text-[10px] font-bold uppercase tracking-[0.2em] mt-2"
                    style={{ color: skill.color }}
                  >
                    {skill.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
