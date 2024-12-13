import React, { useState } from "react";
import Footer from "../component/footer";

const Store = () => {


return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-4">
      <div >
      {/* Gem Button */}
    <div className="flex flex-row bg-[#00FFBF] space-x-10 items-center mb-4">
    <img src="/pokemon.svg" alt="Gem" className="w-12 h-12" />
    <button className="flex bg-[#003320] items-center  px-4 rounded-full">
    +  
    </button>
</div>

      {/* Star Button */}
      <div className="flex flex-row bg-[#00FFBF] space-x-10 items-center mb-4">
      <img src="/star.svg" alt="Star" className="w-6 h-6" />
      <button className="flex bg-[#003320] items-center  px-4 rounded-full">
      +  
        </button>
      </div>
      </div>
      {/* Image */}
      <div className="mt-6">
        <img src="/dragon2.svg" alt="Dragon" className="w-[136px] h-[136px]" />
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mt-4">
        <button className="px-6 py-2 bg-[#00FFBF] text-black font-bold rounded-lg">Buy</button>
        <button className="px-6 py-2 bg-[#00FFBF] text-black font-bold rounded-lg">Upgrade</button>
      </div>

      {/* Upgrade Options */}
      <div className="mt-6 w-[353px] space-y-4">
        {/* Flapper Level */}
        <div className="flex justify-between items-center px-4 py-3 bg-[#1A1A1A] rounded-lg border border-[#00FFBF]">
          <div>
            <p className="font-bold">Flapper Level</p>
            <p className="text-sm text-gray-400">Games: 15 Per day</p>
            <p className="text-sm text-gray-400">Validity: Unlimited</p>
          </div>
          <button className="px-4 py-2 bg-[#00FFBF] text-black font-bold rounded-lg">Upgrade</button>
        </div>

        {/* Dragon Level */}
        <div className="flex justify-between items-center px-4 py-3 bg-[#1A1A1A] rounded-lg border border-[#00FFBF]">
          <div>
            <p className="font-bold">Dragon</p>
            <p className="text-sm text-gray-400">Games: --</p>
            <p className="text-sm text-gray-400">Validity: --</p>
          </div>
          <button className="px-4 py-2 bg-gray-500 text-gray-200 font-bold rounded-lg cursor-not-allowed">
            Coming soon...
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Store;
