import React from "react";
import { Ship, Truck, Train, Box, Globe, MapPin } from "lucide-react";

const logistic = () => {
  return (
    <div className="bg-[#f8f9fa] rounded-xl p-6 md:p-10 max-w-7xl mx-auto my-10">
      <h2 className="text-3xl font-bold text-[#1565a4] mb-2">
        Logistic Advantage
      </h2>
      <div className="bg-[#1565a4] w-12 h-[3px] mb-6 rounded-xl"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ul className="space-y-4">
          <li className="flex items-start">
            <Ship className="text-blue-800 mt-1" />
            <span className="ml-3">4 hours from Mumbai's JNPT port</span>
          </li>
          <li className="flex items-start">
            <Truck className="text-blue-800 mt-1" />
            <span className="ml-3">Easy access to National Highway 48</span>
          </li>
          <li className="flex items-start">
            <Train className="text-blue-800 mt-1" />
            <span className="ml-3">Close proximity to CSTM station</span>
          </li>
        </ul>

        <ul className="space-y-4">
          <li className="flex items-start">
            <Box className="text-blue-800 mt-1" />
            <span className="ml-3">Flexible shipment options (LCL, FCL, DDU)</span>
          </li>
          <li className="flex items-start">
            <Globe className="text-blue-800 mt-1" />
            <span className="ml-3">Weekly connections to major ports worldwide</span>
          </li>
          <li className="flex items-start">
            <MapPin className="text-blue-800 mt-1" />
            <span className="ml-3">Smooth domestic deliveries across India</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default logistic;
