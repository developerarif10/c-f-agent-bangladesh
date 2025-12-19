

export default function About() {
  return (
    <section id="about" className="bg-[#f5f5f5] text-[#0f0f0f] py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
            <span className="text-[#ff4d1c] text-xs font-bold tracking-[0.2em] uppercase mb-8 block">About Bangla Cargo</span>
            
            <h2 className="text-3xl md:text-5xl font-medium leading-tight tracking-tight mb-12">
                “Over 30 years of navigating complex customs regulations to ensure your cargo arrives on time, every time.”
            </h2>

            <div className="flex flex-col items-center gap-6">
                <div className="grid grid-cols-3 gap-8 md:gap-16 border-t border-b border-neutral-300 py-10 w-full max-w-2xl">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-[#0f0f0f] mb-1">30+</div>
                        <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold">Years Exp.</div>
                    </div>
                    <div className="text-center border-l border-r border-neutral-300">
                        <div className="text-4xl font-bold text-[#0f0f0f] mb-1">15k+</div>
                        <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold">Containers</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-[#0f0f0f] mb-1">100%</div>
                        <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold">Compliant</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}