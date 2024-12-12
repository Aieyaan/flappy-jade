import React from "react";
import Footer from "../component/footer";
import { useNavigate } from "react-router-dom";

const Refer = () => {
const navigate = useNavigate();

const handleQuest = () => {
    navigate("/earn");
  };
  const handleRefer = () => {
    navigate("/refer");
  };

return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center pt-8">
      {/* Gem Icon */}
      <div className="mb-6">
        <img
          src="/jade.svg"
          alt="Gem"
          className="w-[111px] h-[123px]"
        />
      </div>

      {/* Title */}
      <h1 className="text-[20px] font-bold mb-6">Earn</h1>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button 
        onClick={handleQuest}
        className="px-4 py-2 w-[163px] h-[44px] bg-[#1A1A1A] text-white rounded-lg border border-[#00FFBF]">
          Quest
        </button>
        <button 
        onClick={handleRefer}
        className="px-4 py-2 w-[163px] h-[44px] bg-[#1A1A1A] text-white rounded-lg border border-[#00FFBF]">
          Refer Friend
        </button>
      </div>

      {/* Earning Options */}
      <div className="w-[353px] space-y-4">
        {[
        { label: "Refer Your friends to get points", button: "Get 10 gems" },
        
        ].map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center px-4 py-3 bg-[#1A1A1A] rounded-lg border border-[#00FFBF]"
          >
            <span>{item.label}</span>
            <button className="px-4 py-2 bg-[#00FFBF] text-black font-bold rounded-lg">
              {item.button}
            </button>
          </div>
        ))}
      </div>
      <div className="flex w-[353px] justify-between items-center px-4 py-3 bg-[#1A1A1A] rounded-lg border border-[#00FFBF] mt-6 w-4/5">
        <span className="text-gray-400">CODE</span>
        <span className="text-white font-mono">BXKL0E13</span>
        <button className="px-4 py-2 bg-[#00FFBF] text-black font-bold rounded-lg">Copy</button>
      </div>
      <Footer/>
    </div>
  );
};

export default Refer;
