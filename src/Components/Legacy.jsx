import React from 'react'
import { Globe, Settings, Users } from "lucide-react";

const legacy = () => {
  return (
    <>
      <section className="p-4 md:p-8 lg:p-12 bg-white text-gray-800 mx-20">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-800  inline-block">
        Legacy of Excellence
      </h2>
      <div className="bg-[#1565a4] w-12 h-[3px] mt-1 rounded-xl mb-5"></div>
      <p className="mb-10 text-base md:text-lg max-w-4xl">
        With over four decades of expertise since our establishment in 1976, we've been engineering excellence. From humble beginnings as a family-owned business to a global powerhouse, our story is rooted in innovation and trust.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div className="bg-white p-6 shadow-md rounded-lg text-center hover:scale-105 transition duration-100 ease-in">
          <Globe size={40} className="mx-auto text-blue-800 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Globally Trusted</h3>
          <p className="text-sm">
            Exporting since 1987, we've built strong partnerships across continents. Wherever your business operates, Capitol is there to deliver.
          </p>
        </div>

        <div className="bg-white p-6 shadow-md rounded-lg text-center hover:scale-105 transition duration-100 ease-in">
          <Settings size={40} className="mx-auto text-blue-800 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Customized Solutions</h3>
          <p className="text-sm">
            We specialize in tailoring our products to your specific requirements, ensuring the perfect fit for your unique operational needs.
          </p>
        </div>

        <div className="bg-white p-6 shadow-md rounded-lg text-center hover:scale-105 transition duration-100 ease-in">
          <Users size={40} className="mx-auto text-blue-800 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Industry Expertise</h3>
          <p className="text-sm">
            Our team consists of experienced professionals with expertise in developing complex valve and equipment component designs.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default legacy
