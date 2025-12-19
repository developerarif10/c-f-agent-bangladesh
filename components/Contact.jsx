'use client'
import { Icon } from '@iconify/react';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#141414] py-24 md:py-32 px-6 md:px-12 relative overflow-hidden border-t border-white/5">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Info */}
            <div className="flex flex-col justify-between">
                <div>
                    <h2 className="text-4xl md:text-6xl font-semibold uppercase leading-[0.9] tracking-tighter text-white mb-8">
                        Ready to move <br /> your cargo?<span className="text-[#ff4d1c]">.</span>
                    </h2>
                    <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed max-w-md">
                        Contact us today for a consultation. Our team of logistics experts is standing by to optimize your supply chain.
                    </p>
                </div>
                
                <div className="space-y-6 mt-12 lg:mt-0">
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#ff4d1c] group-hover:bg-[#ff4d1c] group-hover:text-white transition-all">
                            <Icon icon="lucide:phone" width="20" />
                        </div>
                        <div>
                            <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Call Us 24/7</p>
                            <span className="text-white">+880 1712 345678</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#ff4d1c] group-hover:bg-[#ff4d1c] group-hover:text-white transition-all">
                            <Icon icon="lucide:mail" width="20" />
                        </div>
                        <div>
                            <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Email Us</p>
                            <span className="text-white">info@banglacargo.com</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#ff4d1c] group-hover:bg-[#ff4d1c] group-hover:text-white transition-all">
                            <Icon icon="lucide:map-pin" width="20" />
                        </div>
                        <div>
                            <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Head Office</p>
                            <span className="text-white">Agrabad C/A, Chattogram, Bangladesh</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: Form */}
            <div className="bg-[#1a1a1a] p-8 md:p-10 border border-white/5 rounded-3xl shadow-2xl">
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold">Name</label>
                            <input type="text" className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff4d1c] focus:ring-1 focus:ring-[#ff4d1c] transition-all placeholder:text-neutral-700" placeholder="Your Name" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold">Email</label>
                            <input type="email" className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff4d1c] focus:ring-1 focus:ring-[#ff4d1c] transition-all placeholder:text-neutral-700" placeholder="email@company.com" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold">Phone Number</label>
                        <input type="tel" className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff4d1c] focus:ring-1 focus:ring-[#ff4d1c] transition-all placeholder:text-neutral-700" placeholder="+880 1XXX XXXXXX" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold">Message</label>
                        <textarea rows="4" className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff4d1c] focus:ring-1 focus:ring-[#ff4d1c] transition-all resize-none placeholder:text-neutral-700" placeholder="Details about your shipment..."></textarea>
                    </div>

                    <button type="submit" className="w-full bg-[#ff4d1c] hover:bg-[#ff3300] text-white font-semibold py-4 rounded-xl uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-2 group shadow-[0_4px_20px_rgba(255,77,28,0.2)]">
                        <span>Send Message</span>
                        <Icon icon="lucide:send" width="16" className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>
            </div>
        </div>
    </section>
  );
}