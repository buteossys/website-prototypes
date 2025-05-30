import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-96 md:h-[600px] bg-cover bg-center mt-20" 
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center z-10">
          <Image 
            src="/chupa-logo.png" 
            alt="Chupa&apos;s Fajitas & Ritas" 
            width={300} 
            height={100} 
            className="mb-6"
            priority
          />
          <h1 className="text-4xl md:text-6xl font-bold text-[#f9f8f7] text-center">Authentic Tex-Mex</h1>
          <p className="text-xl text-[#f9f8f7] mt-4">Famous Fajitas & Signature Margaritas</p>
          <div className="mt-8 relative z-20">
            <Link href="/menu" legacyBehavior>
              <a className="px-6 py-3 bg-[#bc2122] text-[#f9f8f7] rounded-md hover:bg-[#7a5137] transition duration-300 mr-4">
                View Menu
              </a>
            </Link>
            <a 
              href="tel:713-722-6899" 
              className="px-6 py-3 bg-[#7a5137] text-[#f9f8f7] rounded-md hover:bg-[#c99157] transition duration-300"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#7a5137]">Welcome to Chupa&apos;s</h2>
            <p className="text-lg mb-4">
              Chupa&apos;s Fajitas & Ritas brings you the authentic flavors of Tex-Mex cuisine with our famous fajitas and signature margaritas.
            </p>
            <p className="text-lg mb-4">
              We&apos;re proud to serve the Houston community with quality ingredients and traditional recipes that have been perfected over generations.
            </p>
            <p className="text-lg mb-6">
              Our restaurant offers To Go service only, making it convenient for you to enjoy our delicious food wherever you prefer.
            </p>
            <a 
              href="/about" 
              className="px-6 py-3 bg-[#bc2122] text-[#f9f8f7] rounded-md hover:bg-[#7a5137] transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Featured Menu Items */}
      <div className="bg-[#2e2122] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#f9f8f7]">Featured Menu Items</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#f9f8f7] rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 overflow-hidden">
                <Image 
                  src="/Beef-Fajitas_4.jpg" 
                  alt="Beef Fajitas" 
                  width={400} 
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#7a5137]">Beef Fajitas</h3>
                <p className="text-gray-600 mb-4">1lb Mama Jose&apos;s Chopped Marinated Upper Skirt Steak</p>
                <p className="text-[#bc2122] font-bold">$46.00</p>
              </div>
            </div>
            
            <div className="bg-[#f9f8f7] rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 overflow-hidden">
                <Image 
                  src="/rita.jpeg" 
                  alt="Margarita" 
                  width={400} 
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#7a5137]">1/2 Gallon Rita</h3>
                <p className="text-gray-600 mb-4">Fresh Squeezed Lime Rita - Regular, Spicy or Strawberry</p>
                <p className="text-[#bc2122] font-bold">$59.00</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a 
              href="/menu" 
              className="px-6 py-3 bg-[#bc2122] text-[#f9f8f7] rounded-md hover:bg-[#7a5137] transition duration-300"
            >
              View Full Menu
            </a>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#7a5137]">Find Us</h2>
            <p className="text-lg mb-4">
              2300 Westheimer Road<br />
              Houston, TX 77098
            </p>
            <p className="text-lg mb-6">
              Phone: <a href="tel:713-722-6899" className="text-[#bc2122] hover:text-[#7a5137]">713-722-6899</a>
            </p>
            <h3 className="text-xl font-bold mb-4 text-[#7a5137]">Hours</h3>
            <p className="mb-2">Monday - Thursday: 11am - 9pm</p>
            <p className="mb-2">Friday - Saturday: 11am - 10pm</p>
            <p className="mb-2">Sunday: 12pm - 8pm</p>
          </div>
          <div className="bg-[#f9f8f7] p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-[#7a5137]">Order Now</h3>
            <p className="mb-4">Call us to place your order for pickup.</p>
            <a 
              href="tel:713-722-6899" 
              className="block w-full py-3 bg-[#bc2122] text-[#f9f8f7] rounded-md hover:bg-[#7a5137] transition duration-300 text-center"
            >
              Call 713-722-6899
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}