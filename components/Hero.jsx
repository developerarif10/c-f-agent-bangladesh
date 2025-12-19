import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full flex flex-col pt-32 pb-12 md:pb-24 px-6 md:px-12 border-b border-white/5">
        {/* Background with nicer gradient and grain */}
        <div className="absolute inset-0 z-0">
             {/* Cinematic Image */}
            <img src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=2574&auto=format&fit=crop" alt="Logistics Network" className="w-full h-full object-cover brightness-[0.35] saturate-0" />
            {/* Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f]/90 via-[#0f0f0f]/50 to-[#0f0f0f]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0f0f0f_100%)] opacity-80"></div>
            {/* Grain Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto flex-grow flex flex-col justify-center items-center text-center space-y-8 md:space-y-12">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_20px_rgba(255,77,28,0.15)]">
                <span className="flex h-1.5 w-1.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff4d1c] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#ff4d1c]"></span>
                </span>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-white/90">Global Network Active</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium uppercase leading-[0.95] tracking-tighter text-white">
                Move Cargo  
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40"> Without</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d1c] to-[#ff8c69]">Boundaries.</span>
            </h1>
            
            <p className="text-neutral-400 text-sm md:text-lg max-w-2xl font-light leading-relaxed mx-auto">
                Next-generation customs clearing and freight forwarding. We combine decades of expertise with modern tracking technology to ensure your supply chain never stops.
            </p>

            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4">
                <Link href="#calculator" className="bg-[#ff4d1c] hover:bg-[#ff3300] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group w-full sm:w-auto shadow-[0_0_25px_rgba(255,77,28,0.4)]">
                    Calculate Rate <Icon icon="lucide:arrow-right" className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#contact" className="glass text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-all flex items-center justify-center w-full sm:w-auto">
                    Talk to an Agent
                </Link>
            </div>
        </div>

    </section>
  );
}