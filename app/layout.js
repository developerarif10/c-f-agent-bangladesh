import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Bangla Cargo | Global Logistics Partner',
  description: 'Next-generation customs clearing and freight forwarding.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.className} bg-[#0f0f0f] text-white antialiased selection:bg-[#ff4d1c] selection:text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}