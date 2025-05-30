"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { useState, useEffect } from "react";
import "./globals.css";
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en">
      <body
          style={{ 
            backgroundImage: `url('/background.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header
          className={`
            transition-all duration-300
            ${scrolled ? "bg-[#7a5137] fixed top-0 left-0 w-full shadow-md z-50" : "bg-transparent absolute top-0 left-0 w-full z-50"}
          `}
          style={{ minHeight: "64px" }}
        >
          <div className="container mx-auto flex flex-row justify-between items-center">
            <div className="flex items-center">
              <Link href="/" passHref legacyBehavior className="text-xl font-bold text-[#f9f8f7]">Chupa&apos;s Fajitas & Ritas</Link>
            </div>
            
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center">
              <nav className="mr-6">
                <ul className="flex space-x-6">
                  <li><Link href="/" passHref legacyBehavior className="hover:text-[#c99157]">Home</Link></li>
                  <li><Link href="/menu" passHref legacyBehavior className="hover:text-[#c99157]">Menu</Link></li>
                  <li><Link href="/hours" passHref legacyBehavior className="hover:text-[#c99157]">Hours</Link></li>
                  <li><Link href="/about" passHref legacyBehavior className="hover:text-[#c99157]">About</Link></li>
                </ul>
              </nav>
              <div>
                <a href="https://www.chupasfajitasandritas.com/online-ordering">
                  <button className="px-4 py-2 bg-[#bc2122] text-[#f9f8f7] rounded-md hover:bg-[#7a5137] transition duration-300">
                    Order Online
                  </button>
                </a>
              </div>
            </div>
            
            {/* Mobile hamburger button */}
            <div className="md:hidden">
              <button 
                className="flex items-center p-2 rounded text-[#f9f8f7] hover:text-[#c99157]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            
            {/* Mobile menu dropdown */}
            {isMenuOpen && (
              <div
                className={`
                  fixed left-0 right-0
                  ${scrolled ? "top-16" : "top-[64px]"}
                  bg-[#7a5137] shadow-md md:hidden z-50 border-t border-[#c99157]
                  transition-all duration-300
                `}
              >
                <ul className="flex flex-col p-4">
                  <li className="py-2"><Link href="/" passHref legacyBehavior className="hover:text-[#c99157]">Home</Link></li>
                  <li className="py-2"><Link href="/menu" passHref legacyBehavior className="hover:text-[#c99157]">Menu</Link></li>
                  <li className="py-2"><Link href="/hours" passHref legacyBehavior className="hover:text-[#c99157]">Hours</Link></li>
                  <li className="py-2"><Link href="/about" passHref legacyBehavior className="hover:text-[#c99157]">About</Link></li>
                  <li className="py-2"><a href="https://www.chupasfajitasandritas.com/online-ordering" className="hover:text-[#c99157]">Order Online</a></li>
                </ul>
              </div>
            )}
          </div>
        </header>
        
        {children}
        
        <footer className="bg-[#2e2122] text-[#f9f8f7] py-8">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#c99157]">Chupa&apos;s Fajitas & Ritas</h3>
                <p>Authentic Tex-Mex cuisine featuring our famous fajitas and signature margaritas.</p>
                <p className="mt-4">To Go Only</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#c99157]">Contact Us</h3>
                <p>2300 Westheimer Road</p>
                <p>Houston, TX 77098</p>
                <p className="mt-2">Phone: <a href="tel:713-722-6899" className="hover:text-[#c99157]">713-722-6899</a></p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#c99157]">Hours</h3>
                <p>Monday - Thursday: 11am - 9pm</p>
                <p>Friday - Saturday: 11am - 10pm</p>
                <p>Sunday: 12pm - 8pm</p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-[#7a5137] text-center">
              <p>&copy; {new Date().getFullYear()} Chupa&apos;s Fajitas & Ritas. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}