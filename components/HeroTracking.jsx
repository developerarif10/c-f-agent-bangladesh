'use client';

import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function HeroTracking() {
  const [trackingId, setTrackingId] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleTrack = async (e) => {
    e.preventDefault();
    if (!trackingId.trim()) return;

    setLoading(true);
    // Force uppercase as per requirements
    const id = trackingId.toUpperCase();
    
    // Simulate a brief check or just route directly with visual feedback
    // We'll route directly for now but keeping state for UI feedback
    try {
      await router.push(`/tracking/${id}`);
      // Don't set loading false here as we're navigating away
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <section id="tracking" className="w-full px-6 py-12 relative z-20">
      <div className="max-w-3xl mx-auto">
        {/* Glass Card */}
        <div className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden group border border-white/10 ">
          {/* Glow Effect */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#ff4d1c]/10 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#ff4d1c]/5 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center text-center space-y-8">
            
            {/* Header */}
            <div className="space-y-4 max-w-lg mx-auto">
             
              <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Track Your Shipment</h2>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Enter your Container Number or Bill of Lading (BL) number below to get real-time status updates on your cargo seamlessly.
              </p>
            </div>

            {/* Input Section */}
            <div className="w-full max-w-xl mx-auto relative group/input">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff4d1c]/50 to-[#ff8c69]/50 rounded-xl blur opacity-20 group-hover/input:opacity-40 transition duration-500"></div>
              <div className="relative flex gap-2 p-2 bg-[#0f0f0f] border border-white/10 rounded-xl shadow-xl">
                <input
                  type="text"
                  placeholder="ENTER CONTAINER OR BL NUMBER"
                  className="flex-1 bg-transparent border-none px-4 py-3 text-white focus:outline-none placeholder:text-neutral-600 font-medium uppercase tracking-wider text-sm md:text-base w-full min-w-0"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value.toUpperCase())}
                  onKeyDown={(e) => e.key === 'Enter' && handleTrack(e)}
                />
                <button
                  onClick={handleTrack}
                  disabled={loading}
                  className="bg-white text-black hover:bg-[#ff4d1c] hover:text-white rounded-lg px-6 py-3 font-bold text-xs md:text-sm uppercase tracking-wider transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2 shrink-0"
                >
                  {loading ? (
                    <Icon icon="lucide:loader-2" width="18" className="animate-spin" />
                  ) : (
                    <>
                      <span>Track</span>
                      <Icon icon="lucide:search" width="16" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
