'use client';
import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function Calculator() {
  const [weight, setWeight] = useState(2500);

  return (
    <section id="calculator" className="bg-[#0f0f0f] py-24 md:py-32 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col xl:flex-row gap-16 items-start">
                {/* Text Info */}
                <div className="w-full xl:w-1/3 pt-6 sticky top-24">
                    <span className="text-[#ff4d1c] text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">Estimate Costs</span>
                    <h2 className="text-4xl md:text-5xl font-medium uppercase leading-tight tracking-tight mb-6">
                        Precision <br /> Pricing
                    </h2>
                    <p className="text-neutral-500 text-sm leading-relaxed mb-8">
                        Our algorithm calculates the most efficient route and cost for your specific cargo type. Fill in the details to get an instant preliminary quote.
                    </p>
                    
                    <div className="space-y-4">
                         <div className="flex items-center gap-4 p-4 border border-white/5 rounded-xl bg-white/[0.02]">
                            <Icon icon="lucide:shield-check" className="text-[#ff4d1c] text-xl" />
                            <div>
                                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Fixed Price Guarantee</h4>
                                <p className="text-[11px] text-neutral-500 mt-1">What you see is what you pay upon confirmation.</p>
                            </div>
                         </div>
                    </div>
                </div>

                {/* Calculator Form */}
                <div className="w-full xl:w-2/3 bg-[#141414] p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl relative">
                    <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                        
                        {/* Row 1: Route */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[11px] uppercase tracking-widest text-neutral-500 font-semibold flex items-center gap-2">
                                    Origin
                                </label>
                                <div className="relative group">
                                    <Icon icon="lucide:map-pin" className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-[#ff4d1c] transition-colors" />
                                    <select className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl pl-11 pr-4 py-4 text-sm text-white focus:outline-none focus:border-[#ff4d1c] appearance-none cursor-pointer hover:border-white/20 transition-all">
                                        <option>Shanghai, China</option>
                                        <option>Singapore, SG</option>
                                        <option>Dubai, UAE</option>
                                        <option>Rotterdam, Netherlands</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                                        <Icon icon="lucide:chevron-down" />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[11px] uppercase tracking-widest text-neutral-500 font-semibold flex items-center gap-2">
                                    Destination
                                </label>
                                <div className="relative group">
                                    <Icon icon="lucide:flag" className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-[#ff4d1c] transition-colors" />
                                    <select className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl pl-11 pr-4 py-4 text-sm text-white focus:outline-none focus:border-[#ff4d1c] appearance-none cursor-pointer hover:border-white/20 transition-all">
                                        <option>Chattogram Port</option>
                                        <option>Dhaka ICD</option>
                                        <option>Mongla Port</option>
                                        <option>Benapole Land Port</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                                        <Icon icon="lucide:chevron-down" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row 2: Product Name & Weight */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[11px] uppercase tracking-widest text-neutral-500 font-semibold">Product Name</label>
                                <input type="text" className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-4 text-sm text-white focus:outline-none focus:border-[#ff4d1c] transition-all placeholder:text-neutral-700" placeholder="e.g. Textile Machinery" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <label className="text-[11px] uppercase tracking-widest text-neutral-500 font-semibold">Total Weight (KG)</label>
                                    <span className="text-xs font-mono text-[#ff4d1c]">{weight.toLocaleString()} KG</span>
                                </div>
                                <div className="h-[52px] flex items-center bg-[#0f0f0f] border border-white/10 rounded-xl px-4">
                                    <input 
                                        type="range" 
                                        min="100" 
                                        max="10000" 
                                        value={weight}
                                        onChange={(e) => setWeight(parseInt(e.target.value))}
                                        className="w-full" 
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Row 3: Transport Mode (By) */}
                        <div className="space-y-3">
                            <span className="text-[11px] uppercase tracking-widest text-neutral-500 font-semibold">Transport Mode</span>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {/* Air */}
                                <label className="cursor-pointer group">
                                    <input type="radio" name="transport_mode" className="custom-radio hidden" />
                                    <div className="flex items-center gap-4 p-4 border border-white/10 rounded-xl bg-[#0f0f0f] hover:border-white/30 transition-all group-hover:bg-white/[0.02]">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 transition-colors">
                                            <span className="icon-wrapper"><Icon icon="lucide:plane" width="18" /></span>
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold text-white uppercase">Air Freight</h4>
                                            <p className="text-[10px] text-neutral-500">1-3 Days</p>
                                        </div>
                                    </div>
                                </label>
                                {/* Sea */}
                                <label className="cursor-pointer group">
                                    <input type="radio" name="transport_mode" className="custom-radio hidden" defaultChecked />
                                    <div className="flex items-center gap-4 p-4 border border-white/10 rounded-xl bg-[#0f0f0f] hover:border-white/30 transition-all group-hover:bg-white/[0.02]">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 transition-colors">
                                            <span className="icon-wrapper"><Icon icon="lucide:ship" width="18" /></span>
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold text-white uppercase">Sea Freight</h4>
                                            <p className="text-[10px] text-neutral-500">15-45 Days</p>
                                        </div>
                                    </div>
                                </label>
                                {/* Hand Carry */}
                                <label className="cursor-pointer group">
                                    <input type="radio" name="transport_mode" className="custom-radio hidden" />
                                    <div className="flex items-center gap-4 p-4 border border-white/10 rounded-xl bg-[#0f0f0f] hover:border-white/30 transition-all group-hover:bg-white/[0.02]">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 transition-colors">
                                            <span className="icon-wrapper"><Icon icon="lucide:briefcase" width="18" /></span>
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold text-white uppercase">Hand Carry</h4>
                                            <p className="text-[10px] text-neutral-500">Personal Courier</p>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>

                        {/* Row 4: Category */}
                        <div className="space-y-3">
                            <span className="text-[11px] uppercase tracking-widest text-neutral-500 font-semibold">Cargo Category</span>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                                {['Regular', 'Battery', 'Chemical', 'Liquid', 'Brand', 'Other'].map((cat, index) => (
                                    <label key={cat} className="cursor-pointer">
                                        <input type="radio" name="category" className="custom-radio hidden" defaultChecked={index === 0} />
                                        <div className="text-center py-3 px-2 border border-white/10 rounded-lg bg-[#0f0f0f] text-[11px] font-medium text-neutral-400 hover:border-white/30 transition-all">
                                            {cat}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <button type="button" className="w-full bg-[#ff4d1c] hover:bg-[#ff3300] text-white font-bold py-5 rounded-xl uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-3 group shadow-[0_0_20px_rgba(255,77,28,0.15)] mt-4">
                            <span>Calculate Shipping Cost</span>
                            <Icon icon="lucide:calculator" width="16" className="group-hover:rotate-12 transition-transform" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
}