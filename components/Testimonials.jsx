  import { Icon } from '@iconify/react';

  export default function Testimonials() {
    const reviews = [
      {
        initial: 'R',
        name: 'Rahim Uddin',
        role: 'CEO, Apex Textiles',
        text: '"Unique Agents handled our machinery import with absolute precision. The customs clearance was faster than we anticipated."'
      },
      {
        initial: 'S',
        name: 'Sarah Jenkins',
        role: 'Ops Manager, GlobalTrade',
        text: '"Their transparency in billing is refreshing. No hidden costs, and the online tracking system kept us informed throughout."',
        mt: true
      },
      {
        initial: 'A',
        name: 'Ahmed Khan',
        role: 'Director, Khan Steel',
        text: '"Reliable inland transport service. Our goods arrived at the factory in Dhaka completely undamaged and on schedule."'
      }
    ];

    return (
      <section className="bg-[#141414] py-24 md:py-32 px-6 md:px-12 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="text-[#ff4d1c] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Testimonials</span>
              <h2 className="text-3xl md:text-5xl font-medium uppercase tracking-tight text-white">Trusted Partners</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-2xl mx-auto">
              {reviews.map((review, index) => (
                  <div key={index} className={`bg-[#1a1a1a] p-8 border border-white/5 rounded-2xl relative ${review.mt ? 'md:-mt-8' : ''} hover:border-white/10 transition-colors`}>
                      <Icon icon="lucide:quote" className="text-[#ff4d1c] text-4xl opacity-20 absolute top-6 right-6" />
                      <div className="flex items-center gap-1 text-[#ff4d1c] mb-6">
                          {[...Array(5)].map((_, i) => (
                              <Icon key={i} icon="lucide:star" width="14" />
                          ))}
                      </div>
                      <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                          {review.text}
                      </p>
                      <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white font-bold border border-white/10">{review.initial}</div>
                          <div>
                              <h4 className="text-white text-sm font-semibold">{review.name}</h4>
                              <p className="text-neutral-500 text-[10px] uppercase tracking-wide">{review.role}</p>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </section>
    );
  }