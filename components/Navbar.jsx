
'use client';

import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 transition-all duration-300 border-b ${
          scrolled ? 'backdrop-blur-md bg-[#0f0f0f]/80 border-white/5 py-4' : 'bg-transparent border-transparent py-4'
        }`}
      >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-50">
              <Image src='/images/banglacargo.webp' alt='banglacargo' width={130} height={130} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
              <Link href="#calculator" className="hover:text-white transition-colors">Rate</Link>
              <Link href="#services" className="hover:text-white transition-colors">Services</Link>
              <Link href="#about" className="hover:text-white transition-colors">Company</Link>
              <Link href="#gallery" className="hover:text-white transition-colors">Projects</Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
              <Link href="#tracking" className="bg-[#ff4d1c] hover:bg-[#ff3300] text-white text-[11px] font-bold px-6 py-2.5 rounded-full uppercase tracking-wider transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(255,77,28,0.4)] flex items-center gap-2">
                  <Icon icon="lucide:navigation" width="14" />
                  <span>Tracking</span>
              </Link>
              <Link href="#contact" className="bg-white hover:bg-neutral-200 text-black text-[11px] font-bold px-6 py-2.5 rounded-full uppercase tracking-wider transition-all transform hover:scale-105">
                  Get Quote
              </Link>
          </div>
          
          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setIsOpen(true)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors relative z-50"
          >
              <Icon icon="lucide:menu" width="24" />
          </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] transition-opacity duration-500 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#0a0a0a]/95 backdrop-blur-2xl border-l border-white/10 z-[70] shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff4d1c]/10 blur-[80px] rounded-full pointer-events-none"></div>

        <div className="flex items-center justify-between p-6 border-b border-white/5 relative z-10">
     <Image src='/images/banglacargo.webp' alt='banglacargo' width={130} height={130} />
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-[#ff4d1c] transition-colors p-2 hover:bg-white/5 rounded-full"
          >
            <Icon icon="lucide:x" width="28" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-8 px-6 space-y-8 relative z-10">
          <nav className="flex flex-col gap-6">
            {['Rate', 'Services', 'About', 'Gallery'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)}
                className="text-3xl font-light text-white hover:text-[#ff4d1c] transition-colors flex items-center justify-between group py-2"
              >
                {item === 'Gallery' ? 'Projects' : item === 'About' ? 'Company' : item}
                <Icon icon="lucide:arrow-right" className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#ff4d1c] w-6 h-6" />
              </Link>
            ))}
          </nav>

          <div className="space-y-4 pt-8 border-t border-white/5">
            <Link 
              href="#tracking" 
              onClick={() => setIsOpen(false)}
              className="w-full bg-[#ff4d1c] hover:bg-[#ff3300] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 uppercase tracking-wider text-sm transition-all shadow-[0_5px_20px_rgba(255,77,28,0.3)] hover:shadow-[0_8px_30px_rgba(255,77,28,0.4)]"
            >
              <Icon icon="lucide:radar" width="20" />
              Track Shipment
            </Link>
            <Link 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="w-full bg-white hover:bg-neutral-200 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 uppercase tracking-wider text-sm transition-all"
            >
              Get a Quote
            </Link>
          </div>
          
          <div className="pt-4 text-center">
             <p className="text-xs text-neutral-600 uppercase tracking-widest">© 2025 Bangla Cargo</p>
          </div>
        </div>
      </div>
    </>
  );
}