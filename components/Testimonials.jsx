import { Icon } from '@iconify/react';

export default function Testimonials() {
  const reviews = [
    {
      initial: 'R',
      name: 'Rahim Uddin',
      role: 'CEO, Apex Textiles',
      text: '"Bangla Cargo handled our machinery import with absolute precision. The customs clearance was faster than we anticipated."'
    },
    {
      initial: 'S',
      name: 'Sarah Jenkins',
      role: 'Ops Manager, GlobalTrade',
      text: '"Their transparency in billing is refreshing. No hidden costs, and the online tracking system kept us informed throughout."'
    },
    {
      initial: 'A',
      name: 'Ahmed Khan',
      role: 'Director, Khan Steel',
      text: '"Reliable inland transport service. Our goods arrived at the factory in Dhaka completely undamaged and on schedule."'
    },
    {
      initial: 'M',
      name: 'Michael Chen',
      role: 'Logistics Head, TechImports',
      text: '"Excellent service! The team went above and beyond to ensure our sensitive electronics were handled with care."'
    },
    {
      initial: 'F',
      name: 'Fatima Rahman',
      role: 'Owner, Rahman Fabrics',
      text: '"We have been using their services for 5 years. Consistent, reliable, and professional. Highly recommended."'
    },
     {
      initial: 'J',
      name: 'James Wilson',
      role: 'Supply Chain Lead, AutoParts',
      text: '"Fastest shipping times we have experienced. The dashboard makes it easy to manage multiple shipments at once."'
    }
  ];

  return (
    <section className="bg-[#141414] py-24 md:py-32 border-t border-white/5 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center mb-16 px-6">
            <span className="text-[#ff4d1c] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-medium uppercase tracking-tight text-white">Trusted Partners</h2>
        </div>

        <div className="relative w-full">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#141414] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#141414] to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex gap-8 animate-scroll w-max hover:[animation-play-state:paused]">
                {[...reviews, ...reviews].map((review, index) => (
                    <div key={index} className="bg-[#1a1a1a] p-8 border border-white/5 rounded-2xl relative w-[350px] md:w-[450px] shrink-0 hover:border-white/10 transition-colors group">
                        <Icon icon="lucide:quote" className="text-[#ff4d1c] text-4xl opacity-20 absolute top-6 right-6 group-hover:opacity-40 transition-opacity" />
                        <div className="flex items-center gap-1 text-[#ff4d1c] mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Icon key={i} icon="lucide:star" width="14" />
                            ))}
                        </div>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                            {review.text}
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white font-bold border border-white/10 group-hover:border-[#ff4d1c]/30 transition-colors">{review.initial}</div>
                            <div>
                                <h4 className="text-white text-sm font-semibold">{review.name}</h4>
                                <p className="text-neutral-500 text-[10px] uppercase tracking-wide">{review.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}