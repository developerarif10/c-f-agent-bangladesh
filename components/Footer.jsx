
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] border-t border-white/10 pt-16 pb-8 px-6 md:px-12 text-white">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            
            <div className="max-w-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Image src='/images/banglacargo.webp' alt='banglacargo' width={130} height={130} />
                </div>
                <h3 className="text-xl font-medium uppercase text-neutral-400 leading-tight">
                    Reliable <br /> <span className="text-white">Port Logistics</span>
                </h3>
            </div>

            <div className="flex flex-wrap gap-8 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link href="#about" className="hover:text-white transition-colors">About Us</Link>
                <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
            </div>

            <div className="flex gap-4">
                <Link href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ff4d1c] transition-colors group">
                    <Icon icon="lucide:facebook" className="text-white/60 group-hover:text-white" width="16" />
                </Link>
                <Link href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ff4d1c] transition-colors group">
                    <Icon icon="lucide:linkedin" className="text-white/60 group-hover:text-white" width="16" />
                </Link>
                <Link href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ff4d1c] transition-colors group">
                    <Icon icon="lucide:twitter" className="text-white/60 group-hover:text-white" width="16" />
                </Link>
            </div>
        </div>

        <div className="max-w-screen-2xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-[10px] text-neutral-600 uppercase tracking-wider">© 2025 Bangla Cargo Ltd. All Rights Reserved.</p>
            <p className="text-[10px] text-neutral-600 uppercase tracking-wider mt-2 md:mt-0">Licence No: 1234/CTG-Customs</p>
        </div>
    </footer>
  );
}