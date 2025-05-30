import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-64 md:h-96 bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <Image 
              src="/chupa-logo.png" 
              alt="Chupa&apos;s Fajitas & Ritas" 
              width={180} 
              height={60} 
              className="mr-4"
            />
          <h1 className="text-4xl md:text-6xl font-bold text-[#f9f8f7] text-center">About Us</h1>
        </div>
      </div>

      {/* About Content */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#7a5137]">Our Story</h2>
            <p className="text-lg mb-4">
              Chupa&apos;s Fajitas & Ritas was born from a passion for authentic Tex-Mex cuisine and a desire to share our family recipes with the Houston community.
            </p>
            <p className="text-lg mb-4">
              Our founder, inspired by generations of family cooking traditions, decided to focus on what we do best: delicious fajitas and refreshing margaritas.
            </p>
            <p className="text-lg">
              We believe in using quality ingredients, traditional cooking methods, and providing exceptional service to our customers. Our &quot;To Go&quot; concept allows you to enjoy our authentic flavors wherever you prefer.
            </p>
          </div>
          
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-[#7a5137] text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#f9f8f7] p-6 rounded-lg shadow-lg border border-[#c99157] text-center">
              <div className="w-16 h-16 bg-[#7a5137] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#f9f8f7] text-2xl">🌮</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#2e2122]">Quality</h3>
              <p>
                We use only the freshest ingredients and traditional cooking methods to ensure every dish meets our high standards.
              </p>
            </div>
            <div className="bg-[#f9f8f7] p-6 rounded-lg shadow-lg border border-[#c99157] text-center">
              <div className="w-16 h-16 bg-[#7a5137] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#f9f8f7] text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#2e2122]">Family</h3>
              <p>
                Our recipes have been passed down through generations, and we treat our customers like family.
              </p>
            </div>
            <div className="bg-[#f9f8f7] p-6 rounded-lg shadow-lg border border-[#c99157] text-center">
              <div className="w-16 h-16 bg-[#7a5137] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#f9f8f7] text-2xl">🌎</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#2e2122]">Community</h3>
              <p>
                We&apos;re proud to be part of the Houston community and strive to give back whenever possible.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#2e2122] text-[#f9f8f7] p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#c99157] text-center">Our Specialties</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-[#c99157]">Fajitas</h3>
              <p className="mb-4">
                Our fajitas are marinated with a special blend of spices, grilled to perfection, and served with all the traditional accompaniments. Choose from beef, chicken, shrimp, or vegetable options.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-[#c99157]">Margaritas</h3>
              <p className="mb-4">
                Our signature margaritas are made with premium tequila, fresh lime juice, and agave nectar. We offer classic, strawberry, mango, and spicy varieties to complement your meal.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#7a5137]">Visit Us Today</h2>
          <p className="text-lg mb-6">
            We&apos;re located at 2300 Westheimer Road, Houston, TX 77098. Call us to place your order for pickup!
          </p>
          <a 
            href="tel:713-722-6899" 
            className="px-8 py-4 bg-[#bc2122] text-[#f9f8f7] rounded-md hover:bg-[#7a5137] transition duration-300 text-xl font-bold"
          >
            Call 713-722-6899
          </a>
        </div>
      </div>
    </div>
  );
}