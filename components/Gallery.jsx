
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#f5f5f5] text-[#0f0f0f] py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <span className="text-[#ff4d1c] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Our Gallery</span>
                    <h2 className="text-4xl font-medium uppercase tracking-tight">Port Operations</h2>
                </div>
                <Link href="#" className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-[#ff4d1c] transition-colors">
                    View All Projects <Icon icon="lucide:arrow-right" width="14" />
                </Link>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                {/* Item 1 (Wide) */}
                <div className="md:col-span-2 relative group overflow-hidden rounded-xl">
                    <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Container Terminal" />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute bottom-6 left-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform">
                        <p className="text-xs font-mono mb-1 text-[#ff4d1c]">01</p>
                        <h3 className="text-xl font-medium uppercase">Container Terminal</h3>
                    </div>
                </div>
                {/* Item 2 */}
                <div className="relative group overflow-hidden rounded-xl">
                    <img src="https://images.unsplash.com/photo-1587813369290-091c9d432daf?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt="Fleet Management" />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute bottom-6 left-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform">
                        <p className="text-xs font-mono mb-1 text-[#ff4d1c]">02</p>
                        <h3 className="text-xl font-medium uppercase">Fleet Management</h3>
                    </div>
                </div>
                {/* Item 3 */}
                <div className="relative group overflow-hidden rounded-xl">
                    <img src="https://images.unsplash.com/photo-1587813369290-091c9d432daf?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt="Warehousing" />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute bottom-6 left-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform">
                        <p className="text-xs font-mono mb-1 text-[#ff4d1c]">03</p>
                        <h3 className="text-xl font-medium uppercase">Warehousing</h3>
                    </div>
                </div>
                {/* Item 4 (Wide) */}
                <div className="md:col-span-2 relative group overflow-hidden rounded-xl">
                    <img src="https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=2071&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Air Freight" />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute bottom-6 left-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform">
                        <p className="text-xs font-mono mb-1 text-[#ff4d1c]">04</p>
                        <h3 className="text-xl font-medium uppercase">Air Freight</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}