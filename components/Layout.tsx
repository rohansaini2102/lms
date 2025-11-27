import React from 'react';
import { BookOpen, ArrowUpRight } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeScreen?: string;
  onGoHome?: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeScreen, onGoHome }) => {
  return (
    <div className="min-h-screen bg-cream text-dark font-sans selection:bg-neon-green selection:text-dark">
      {/* Sticky Pill Navbar */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <nav className="bg-white/90 backdrop-blur-xl border-2 border-dark/5 px-2 py-2 rounded-full shadow-neubrutalism pointer-events-auto flex items-center gap-2">
          
          {/* Logo Pill */}
          <button 
            onClick={onGoHome}
            className="flex items-center gap-2 bg-dark text-white px-6 py-3 rounded-full hover:bg-neon-blue transition-colors duration-300 group"
          >
            <BookOpen size={20} className="group-hover:rotate-12 transition-transform" />
            <span className="font-grotesk font-bold text-lg tracking-tight">RajPariksha.</span>
          </button>

          {/* Navigation Items (Hidden on mobile) */}
          <div className="hidden md:flex items-center bg-cream/50 rounded-full px-2">
            {['Exams', 'Features', 'Pricing'].map((item) => (
              <button key={item} className="px-5 py-3 font-grotesk font-medium text-dark hover:text-neon-blue transition-colors">
                {item}
              </button>
            ))}
          </div>

          {/* V2 Landing Page Link */}
          <a
            href="/landing-v2/"
            className="bg-neon-pink text-white px-4 py-2 rounded-full font-grotesk font-bold text-sm hover:bg-neon-blue transition-colors duration-300 flex items-center gap-1"
          >
            V2 <ArrowUpRight size={14} />
          </a>

          {/* CTA */}
          <button className="bg-neon-green text-dark px-6 py-3 rounded-full font-grotesk font-bold hover:bg-neon-yellow transition-colors duration-300 flex items-center gap-2">
            Get Started <div className="w-2 h-2 bg-dark rounded-full"></div>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <main className="w-full">
        {children}
      </main>

      {/* Massive Swiss Footer */}
      <footer className="bg-dark text-cream pt-32 pb-12 px-6 rounded-t-[4rem] relative mt-[-2rem] z-10">
        <div className="max-w-7xl mx-auto">
          {/* Huge CTA */}
          <div className="flex flex-col items-center text-center mb-32">
            <h2 className="font-grotesk font-bold text-[12vw] leading-[0.8] mb-8">
              LET'S GET <br/> <span className="text-transparent stroke-text hover:text-neon-pink transition-colors duration-500 cursor-default">SELECTED</span>
            </h2>
            <button className="bg-white text-dark text-2xl md:text-3xl font-bold px-12 py-6 rounded-full hover:bg-neon-green hover:scale-105 hover:shadow-neubrutalism-lg transition-all duration-300 flex items-center gap-4">
              Start Practicing Now
              <ArrowUpRight size={32} />
            </button>
          </div>

          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-12">
            <div className="col-span-1 md:col-span-2">
              <span className="font-grotesk font-bold text-2xl block mb-6">RajPariksha.</span>
              <p className="text-white/60 text-lg max-w-sm">
                The most aesthetic way to crack Rajasthan Government Exams. Built for the modern aspirant.
              </p>
            </div>
            
            <div>
              <h4 className="font-grotesk font-bold text-lg mb-6 text-neon-blue">Sitemap</h4>
              <ul className="space-y-4 text-white/80 font-medium">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">Exams</a></li>
                <li><a href="#" className="hover:text-white">Syllabus</a></li>
                <li><a href="#" className="hover:text-white">About Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-grotesk font-bold text-lg mb-6 text-neon-pink">Socials</h4>
              <ul className="space-y-4 text-white/80 font-medium">
                <li><a href="#" className="hover:text-white">Instagram</a></li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-20 flex flex-col md:flex-row justify-between items-center text-white/40 text-sm font-medium">
            <p>© 2025 RajPariksha Inc.</p>
            <p>Jaipur • Rajasthan • India</p>
          </div>
        </div>
        
        <style>{`
          .stroke-text {
            -webkit-text-stroke: 2px white;
          }
          .stroke-text:hover {
            -webkit-text-stroke: 0px transparent;
          }
        `}</style>
      </footer>
    </div>
  );
};

export default Layout;