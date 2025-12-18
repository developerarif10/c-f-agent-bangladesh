
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: 'lucide:file-check-2',
      title: 'Customs Clearance',
      description: 'Expert handling of Bill of Entry, assessment, and duty payments. We ensure 100% compliance with local regulations.'
    },
    {
      icon: 'lucide:ship',
      title: 'Freight Forwarding',
      description: 'Seamless ocean and air freight solutions. From booking to delivery, we manage your supply chain logistics end-to-end.'
    },
    {
      icon: 'lucide:truck',
      title: 'Inland Transport',
      description: 'Reliable trucking fleet for container delivery from port to your warehouse. Real-time GPS tracking available.'
    },
    {
      icon: 'lucide:warehouse',
      title: 'Warehousing',
      description: 'Secure storage solutions near the port area for short-term and long-term cargo holding and consolidation.'
    },
    {
      icon: 'lucide:container',
      title: 'Project Cargo',
      description: 'Specialized handling for heavy machinery and oversized equipment. We plan the route and handle permits.'
    }
  ];

  return (
    <section id="services" className="bg-[#141414] py-24 md:py-32 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-screen-2xl mx-auto">
            <span className="text-[#ff4d1c] text-xs font-bold tracking-[0.2em] uppercase mb-12 block">Comprehensive Logistics</span>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
                
                {services.map((service, index) => (
                    <div key={index} className="bg-[#141414] p-10 hover:bg-[#1a1a1a] transition-colors group relative overflow-hidden">
                        <div className="w-12 h-12 bg-[#ff4d1c]/10 rounded-lg flex items-center justify-center text-[#ff4d1c] mb-8 group-hover:scale-110 transition-transform">
                            <Icon icon={service.icon} width="24" />
                        </div>
                        <h3 className="text-xl font-semibold uppercase tracking-wide text-white mb-4">{service.title}</h3>
                        <p className="text-sm text-neutral-400 leading-relaxed mb-6">{service.description}</p>
                        <Link href="#" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#ff4d1c] group-hover:gap-4 transition-all">
                            Learn More <Icon icon="lucide:arrow-right" width="14" />
                        </Link>
                    </div>
                ))}

                {/* Service 6: CTA Box */}
                <div className="p-10 bg-[#ff4d1c] flex flex-col justify-between group">
                    <div>
                         <h3 className="text-xl font-semibold uppercase tracking-wide text-white mb-4">Need a Custom Solution?</h3>
                         <p className="text-sm text-white/80 leading-relaxed">Contact our logistics engineers for a tailored supply chain strategy.</p>
                    </div>
                    <Link href="#contact" className="mt-8 w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                        <Icon icon="lucide:arrow-up-right" width="20" />
                    </Link>
                </div>

            </div>
        </div>
    </section>
  );
}