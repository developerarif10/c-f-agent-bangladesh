
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col pt-32 pb-12 md:pb-24 px-6 md:px-12 border-b border-white/5">
        {/* Background with nicer gradient and grain */}
        <div className="absolute inset-0 z-0">
             {/* Cinematic Image */}
            <img src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=2574&auto=format&fit=crop" alt="Logistics Network" className="w-full h-full object-cover brightness-[0.35] saturate-0" />
            {/* Gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent"></div>
            {/* Grain Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-screen-2xl mx-auto flex-grow flex flex-col justify-center">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left: Typography */}
                <div className="lg:col-span-7 space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                        <span className="flex h-1.5 w-1.5 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff4d1c] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#ff4d1c]"></span>
                        </span>
                        <span className="text-[10px] uppercase tracking-widest font-semibold text-white/80">Global Network Active</span>
                    </div>

                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium uppercase leading-[0.9] tracking-tighter text-white">
                        Move Cargo <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">Without</span> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d1c] to-[#ff8c69]">Boundaries.</span>
                    </h1>
                    
                    <p className="text-neutral-400 text-sm md:text-base max-w-lg font-light leading-relaxed">
                        Next-generation customs clearing and freight forwarding. We combine decades of expertise with modern tracking technology to ensure your supply chain never stops.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link href="#calculator" className="bg-[#ff4d1c] hover:bg-[#ff3300] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group">
                            Calculate Rate <Icon icon="lucide:arrow-right" className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="#contact" className="glass text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-all flex items-center justify-center">
                            Talk to an Agent
                        </Link>
                    </div>
                </div>

                {/* Right: Interactive Tracking Element (Adds UX Utility) */}
                <div className="lg:col-span-5 hidden lg:block relative">
                    {/* Glass Card */}
                    <div className="glass p-8 rounded-2xl relative overflow-hidden group">
                        {/* Glow Effect */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#ff4d1c]/20 blur-[80px] rounded-full pointer-events-none"></div>

                        <div className="relative z-10 space-y-6">
                            <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Quick Track</span>
                                <Icon icon="lucide:satellite" className="text-[#ff4d1c]" />
                            </div>

                            <div className="space-y-4">
                                <p className="text-sm text-white/80">Expecting a shipment? Enter your container number.</p>
                                <div className="flex gap-2">
                                    <input type="text" placeholder="Enter Container or BL Number" className="w-full bg-[#0f0f0f]/60 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff4d1c] transition-colors placeholder:text-neutral-600" />
                                    <button className="bg-white text-black rounded-lg px-4 flex items-center justify-center hover:bg-[#ff4d1c] hover:text-white transition-colors">
                                        <Icon icon="lucide:search" width="18" />
                                    </button>
                                </div>
                            </div>

                            {/* Mock Data */}
                            <div className="pt-2">
                                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                                    <div className="w-8 h-8 rounded bg-green-500/20 flex items-center justify-center text-green-500">
                                        <Icon icon="lucide:check" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-neutral-500 uppercase tracking-wide">Last Update</div>
                                        <div className="text-xs font-medium text-white">Vessel Arrived at Port of Chittagong</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4 animate-pulse">
            <Icon icon="lucide:mouse" className="text-neutral-500" />
            <span className="text-[10px] uppercase tracking-widest text-neutral-500">Scroll to Explore</span>
        </div>
    </section>
  );
}