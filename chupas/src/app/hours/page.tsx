import React from 'react';
import Image from 'next/image';

export default function HoursPage() {
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
          <h1 className="text-4xl md:text-6xl font-bold text-[#f9f8f7] text-center">Hours & Location</h1>
        </div>
      </div>

      {/* Hours & Location Content */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#7a5137]">Hours of Operation</h2>
            <div className="bg-[#f9f8f7] p-6 rounded-lg shadow-lg border border-[#c99157]">
              <div className="flex justify-between py-3 border-b border-[#c99157]">
                <span className="font-bold text-[#2e2122]">Monday</span>
                <span>11:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between py-3 border-b border-[#c99157]">
                <span className="font-bold text-[#2e2122]">Tuesday</span>
                <span>11:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between py-3 border-b border-[#c99157]">
                <span className="font-bold text-[#2e2122]">Wednesday</span>
                <span>11:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between py-3 border-b border-[#c99157]">
                <span className="font-bold text-[#2e2122]">Thursday</span>
                <span>11:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between py-3 border-b border-[#c99157]">
                <span className="font-bold text-[#2e2122]">Friday</span>
                <span>11:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between py-3 border-b border-[#c99157]">
                <span className="font-bold text-[#2e2122]">Saturday</span>
                <span>11:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="font-bold text-[#2e2122]">Sunday</span>
                <span>12:00 PM - 8:00 PM</span>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-[#7a5137]">Holiday Hours</h2>
              <p className="mb-4">
                Please note that our hours may vary on holidays. Follow us on social media or call ahead for the most up-to-date information.
              </p>
              <p className="font-bold text-[#bc2122]">
                We are closed on Thanksgiving Day and Christmas Day.
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#7a5137]">Location</h2>
            <div className="bg-[#f9f8f7] p-6 rounded-lg shadow-lg border border-[#c99157] mb-8">
              <h3 className="text-xl font-bold mb-4 text-[#2e2122]">Chupa&apos;s Fajitas & Ritas</h3>
              <p className="mb-2">2300 Westheimer Road</p>
              <p className="mb-4">Houston, TX 77098</p>
              <p className="mb-2">
                Phone: <a href="tel:713-722-6899" className="text-[#bc2122] hover:text-[#7a5137]">713-722-6899</a>
              </p>
              <p className="mt-4 font-bold">To Go Only</p>
            </div>
            
            <div className="h-64 rounded-lg shadow-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.1902320131627!2d-95.41794492427068!3d29.742693182087377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c0eb51cf8d1b%3A0x3fbc8cab0f0b9b20!2s2300%20Westheimer%20Rd%2C%20Houston%2C%20TX%2077098!5e0!3m2!1sen!2sus!4v1715456789012!5m2!1sen!2sus"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-[#7a5137]">Parking</h3>
              <p className="mb-4">
                Free parking is available in our lot for customers picking up orders.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#7a5137]">Order Now</h2>
          <p className="text-lg mb-6">
            Ready to enjoy our delicious Tex-Mex cuisine? Call us to place your order for pickup!
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