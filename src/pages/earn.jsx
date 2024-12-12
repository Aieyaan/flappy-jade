import React, { useState, useEffect } from "react";
import Footer from "../component/footer";
import { useNavigate } from "react-router-dom";

const Earn = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  const rewards = [10, 20, 30, 40, 50, 60, 70]; // Example rewards for 7 days

  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const navigate = useNavigate();

  const handleQuest = () => {
    navigate("/earn");
  };
  const handleRefer = () => {
    navigate("/refer");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center pt-8">
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#0d1b2a] text-white w-80 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Daily Reward</h2>
              <button className="text-white text-xl" onClick={closeModal}>
                &times;
              </button>
            </div>
            <p className="mt-2 text-sm text-gray-400">Play Daily to get Rewards</p>

            {/* Countdown Timer */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-300">Next reward in:</p>
              <p className="text-lg font-bold text-[#34d399]">
                {formatTime(timeLeft)}
              </p>
            </div>

            <div className="grid grid-cols-4 gap-2 mt-4">
              {rewards.map((reward, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center justify-center border-2 border-[#4e5c68] rounded-lg p-3 ${
                    index === 0 ? "bg-[#223b56]" : "bg-[#162534]"
                  }`}
                >
                  <span className="text-sm font-medium">Day {index + 1}</span>
                  <img
                    src="https://via.placeholder.com/40"
                    alt="Emerald"
                    className="w-8 h-8 my-2"
                  />
                  <span className="text-sm font-bold">{reward}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="mb-6">
        <img src="/jade.svg" alt="Gem" className="w-[111px] h-[123px]" />
      </div>

      <h1 className="text-[20px] font-bold mb-6">Earn</h1>

      <div className="flex space-x-4 mb-6">
        <button
          onClick={handleQuest}
          className="px-4 py-2 w-[163px] h-[44px] bg-[#1A1A1A] text-white rounded-lg border border-[#00FFBF]"
        >
          Quest
        </button>
        <button
          onClick={handleRefer}
          className="px-4 py-2 w-[163px] h-[44px] bg-[#1A1A1A] text-white rounded-lg border border-[#00FFBF]"
        >
          Refer Friend
        </button>
      </div>

      <div className="w-[353px] space-y-1">
        {[
          { label: "Watch Video", button: "Get 10 gems" },
          { label: "Join community", button: "Get 10 gems" },
          { label: "Spin the Wheel", button: "Spin" },
          { label: "Free Daily Rewards", button: "Get 10 gems" },
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

      <Footer />
    </div>
  );
};

export default Earn;
