import { LucideLinkedin, LucideMail, LucideExternalLink, LucideDownload, LucideAward, LucideCode2, LucideDatabase, LucideBarChart3, LucideFileSpreadsheet } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative">
      {/* Star Field Background */}
      <div className="stars-container">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: ${Math.random() * 100}%,
              left: ${Math.random() * 100}%,
              width: ${Math.random() * 3}px,
              height: ${Math.random() * 3}px,
              '--duration': ${2 + Math.random() * 3}s,
            } as any}
          />
        ))}
      </div>

      {/* Left Side Panel */}
      <aside className="lg:w-80 lg:h-screen lg:fixed lg:left-0 lg:top-0 bg-black/40 backdrop-blur-xl border-b lg:border-b-0 lg:border-r border-white/10 z-50 flex flex-col items-center py-12 px-8">
        <div className="relative mb-8">
          <div className="w-32 h-32 rounded-full border-2 border-neon-blue shadow-[0_0_20px_rgba(0,240,255,0.5)] overflow-hidden animate-float">
            <img 
              src="https://picsum.photos/seed/v-srivarthini/400/400" 
              alt="V. Srivarthini" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-neon-blue animate-ping opacity-20"></div>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-2xl font-display font-bold tracking-widest neon-text mb-2">V.SRIVARTHINI</h1>
          <p className="text-sm text-gray-400 font-light tracking-wide">Web Developer | Data Analyst</p>
        </div>

        <nav className="flex flex-col gap-4 w-full text-center lg:text-left">
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#certificates" className="nav-link">Certificates</a>
          <a href="#resume" className="nav-link">Resume</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="lg:ml-80 flex-1 px-6 lg:px-16 py-12 lg:py-24 space-y-32">
        
        {/* About Section */}
        <section id="about" className="reveal">
          <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-4">
            <span className="w-12 h-1 bg-neon-blue rounded-full"></span>
            About Me
          </h2>
          <div className="glass-card neon-border">
            <p className="text-gray-300 leading-relaxed text-lg">
              Hello! I'm <span className="neon-text font-semibold">V. Srivarthini</span>, a passionate developer and analyst dedicated to building 
              <span className="text-white"> high-performance web applications</span> and deriving 
              <span className="text-white"> actionable insights</span> from complex data. With a strong foundation in both 
              creative design and technical analysis, I bridge the gap between user experience and data-driven decision making.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="reveal">
          <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-4">
            <span className="w-12 h-1 bg-neon-blue rounded-full"></span>
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'HTML', icon: <LucideCode2 className="w-5 h-5" />, level: '95%' },
              { name: 'CSS', icon: <LucideCode2 className="w-5 h-5" />, level: '90%' },
              { name: 'Python', icon: <LucideCode2 className="w-5 h-5" />, level: '85%' },
              { name: 'SQL', icon: <LucideDatabase className="w-5 h-5" />, level: '88%' },
              { name: 'Data Visualization', icon: <LucideBarChart3 className="w-5 h-5" />, level: '82%' },
              { name: 'Excel', icon: <LucideFileSpreadsheet className="w-5 h-5" />, level: '92%' },
            ].map((skill) => (
              <div key={skill.name} className="glass-card neon-border group hover:scale-105 transition-transform">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-neon-blue/10 rounded-lg text-neon-blue">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold">{skill.name}</h3>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-neon-blue h-full shadow-[0_0_10px_#00f0ff] transition-all duration-1000" 
                    style={{ width: skill.level }}
                  ></div>
                </div>
                <span className="text-xs text-gray-400 mt-2 block text-right">{skill.level}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="reveal">
          <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-4">
            <span className="w-12 h-1 bg-neon-blue rounded-full"></span>
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="glass-card neon-border group overflow-hidden p-0">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={https://picsum.photos/seed/project${i}/800/400} 
                    alt="Project Thumbnail" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-neon-blue transition-colors">Project Title {i}</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    A comprehensive solution for data analysis and visualization using modern web technologies.
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 px-4 py-2 bg-neon-blue/10 border border-neon-blue/50 text-neon-blue rounded-lg hover:bg-neon-blue hover:text-black transition-all font-semibold"
                  >
                    View Project <LucideExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="reveal">
          <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-4">
            <span className="w-12 h-1 bg-neon-blue rounded-full"></span>
            Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-card neon-border text-center group">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-neon-blue/5 rounded-full group-hover:bg-neon-blue/20 transition-colors">
                    <LucideAward className="w-10 h-10 text-neon-blue" />
                  </div>
                </div>
                <h3 className="font-bold mb-1">Professional Certificate {i}</h3>
                <p className="text-sm text-gray-400">Issued by Google / Coursera</p>
              </div>
            ))}
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="reveal text-center">
          <div className="glass-card neon-border inline-block px-12 py-10">
            <h2 className="text-3xl font-display font-bold mb-6">Ready to work together?</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Check out my detailed professional background and technical expertise.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-neon-blue to-deep-blue text-black font-bold rounded-full shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:shadow-[0_0_50px_rgba(0,240,255,0.6)] hover:scale-105 transition-all"
            >
              <LucideDownload className="w-5 h-5" /> Download Resume
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="reveal">
          <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-4">
            <span className="w-12 h-1 bg-neon-blue rounded-full"></span>
            Get In Touch
          </h2>
          <div className="glass-card neon-border flex flex-col items-center text-center">
            <p className="text-xl text-gray-300 mb-10">
              Let's connect and build something amazing together.
            </p>
            <div className="flex gap-8">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                className="p-4 bg-white/5 rounded-full text-gray-400 hover:text-neon-blue hover:bg-neon-blue/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all"
              >
                <LucideLinkedin className="w-8 h-8" />
              </a>
              <a 
                href="mailto:example@email.com" 
                className="p-4 bg-white/5 rounded-full text-gray-400 hover:text-neon-blue hover:bg-neon-blue/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all"
              >
                <LucideMail className="w-8 h-8" />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm pb-12">
          &copy; {new Date().getFullYear()} V.Srivarthini. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
