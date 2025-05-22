import React from "react";

const Footer = () => {
    return (
      <div className="w-full bg-[#1565a4] text-white">
        {/* Main Row */}
        <div className="flex flex-col md:flex-row justify-between px-8 lg:px-20 py-10 border-b border-white gap-10">
          
          {/* About Section */}
          <div className="flex-1">
            <h1 className="text-xl font-bold mb-4">About Capitol Industries</h1>
            <p className="text-base font-medium leading-relaxed">
              Leading provider of industrial fastening solutions with over 25 years
              of excellence in manufacturing and distribution.
            </p>
          </div>
  
          {/* Quick Links */}
          <div className="flex-1">
            <h1 className="text-xl font-bold mb-4">Quick Links</h1>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">About Us</li>
              <li className="hover:underline cursor-pointer">Products</li>
              <li className="hover:underline cursor-pointer">Industries</li>
              <li className="hover:underline cursor-pointer">Contact Us</li>
            </ul>
          </div>
  
          {/* Connect and Newsletter */}
          <div className="">
            <h1 className="text-xl font-bold mb-4">Connect With Us</h1>
            <div className="flex gap-4 text-2xl mb-6">
              <i className="fa-brands fa-linkedin hover:text-gray-200 cursor-pointer"></i>
              <i className="fa-brands fa-twitter hover:text-gray-200 cursor-pointer"></i>
              <i className="fa-brands fa-facebook hover:text-gray-200 cursor-pointer"></i>
              <i className="fa-brands fa-square-instagram hover:text-gray-200 cursor-pointer"></i>
            </div>
  
            <h2 className="text-lg font-semibold mb-2">Newsletter Subscription</h2>
            <div className="flex flex-col sm:flex-row gap-2">
              <textarea
                className="text-black bg-white p-2 rounded-md resize-none w-full sm:w-72"
                placeholder="Enter your Email"
                rows={1}
              />
              <button className=" font-semibold px-4 py-2 rounded-md hover:bg-[#115089] transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
  
        {/* Bottom Copyright */}
        <div className="text-center pt-3 pb-10  text-white text-md font-semibold">
          © 2024 Capitol Industries. All rights reserved.
        </div>
      </div>
    );
  };
  
  export default Footer;
  