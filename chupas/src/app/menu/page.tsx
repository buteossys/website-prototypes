import React from 'react';
import Image from 'next/image';

export default function MenuPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
        <div className="container mx-auto flex justify-center">
          <div className="flex items-center">
            
          </div>
        </div>


      {/* Hero Section */}
      <div 
        className="relative h-64 md:h-96 bg-cover bg-center" 
        
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <Image 
            src="/chupa-logo.png" 
            alt="Chupa&apos;s Fajitas & Ritas" 
            width={180} 
            height={60} 
            className="mr-4"
            priority
          />
          <h1 className="text-4xl md:text-6xl font-bold text-[#f9f8f7] text-center">Our Menu</h1>
        </div>
      </div>

      {/* Menu Content */}
      <div className="container mx-auto py-12 px-4">
        <div className="mb-12 text-center">
          <p className="text-xl text-[#2e2122]">
            Authentic Tex-Mex cuisine featuring our famous fajitas and signature margaritas.
          </p>
          <a 
            href="/menu.pdf" 
            className="inline-block mt-4 px-6 py-3 bg-[#bc2122] text-[#f9f8f7] rounded-md hover:bg-[#7a5137] transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download PDF Menu
          </a>
        </div>

        

        {/* Menu PDF Display */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4 text-[#7a5137]">View Our Full Menu</h2>
          <div className="bg-[#f9f8f7] border border-[#c99157] p-4 rounded-md shadow-md">
            <Image 
              src="/menu.png" 
              alt="Chupa&apos;s Menu" 
              width={600} 
              height={800} 
              className="mx-auto"
              priority
            />
          </div>
        </div>
      </div>

      
    </div>
  );
}