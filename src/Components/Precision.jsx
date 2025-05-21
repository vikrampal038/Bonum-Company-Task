import React from 'react';

const Precision = () => {
  return (
    <section className="bg-white text-gray-800 px-4 sm:px-6 md:px-12 py-10">
      {/* Heading */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-800">
          Precision in Every Thread
        </h2>
        <div className="bg-[#1565a4] w-12 h-[3px] mt-2 mb-6 rounded-xl"></div>

        {/* Description */}
        <p className="text-base sm:text-lg mb-6">
          Every fastener we create is a blend of cutting-edge technology and meticulous craftsmanship.
          We use only the finest raw materials to ensure durability and performance.
        </p>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-sm sm:text-base">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="p-3 font-semibold text-left">Stainless Steel</th>
                <th className="p-3 font-semibold text-left">Carbon Steel</th>
                <th className="p-3 font-semibold text-left">Special Steel</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['AISI 410', 'ASTM 105', 'AISI 630'],
                ['AISI 420', 'AISI 1020', 'AISI 660'],
                ['AISI 416', '', 'MONEL 400 & 500'],
                ['AISI 304', '', ''],
                ['AISI 316', '', ''],
                ['AISI 316 L', '', ''],
              ].map((row, rowIndex) => (
                <tr key={rowIndex} className="border-t border-gray-200">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="p-3 whitespace-nowrap">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note */}
        <div className="mt-8 border-l-4 border-blue-800 bg-gray-100 p-4">
          <p className="text-sm sm:text-base">
            <strong>Note:</strong> We also accommodate any other grade as per client requirements,
            ensuring tailored solutions for every application.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Precision;
