import React, { useState, useEffect } from "react";
import Footer from "../component/footer";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div
      className="relative h-screen w-full flex flex-col items-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: 'url(/homepage.svg)' }}
    >
      {/* Points and Highscore */}
      <div className="flex flex-col items-center mt-4">
        <div className="flex justify-between w-screen bg-[#0E1B17] text-white rounded-lg px-[16px] py-2">
          <div className="text-left flex space-x-6">
            <img src="/dragon.svg" alt="Dragon" className="" />
            <div className="">
              <p>Points</p>
              <p className="text-lg text-[#86EFBE] font-bold">23,201</p>
            </div>
          </div>
          <div className="text-right">
            <p>Highscore</p>
            <p className="text-lg text-[#86EFBE] font-bold">4,201</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="absolute bottom-[80px] w-full flex flex-col items-center p-3 space-y-4 pb-8">
        <button className="w-full bg-[#86EFBE] text-black hover:bg-transparent hover:border hover:border-[#86EFBE] hover:text-[#86EFBE] font-bold py-3 rounded-lg shadow-lg">
          Connect Wallet
        </button>

        <button className="w-full bg-[#86EFBE] text-black hover:bg-transparent hover:border hover:border-[#86EFBE] hover:text-[#86EFBE] font-bold py-3 rounded-lg shadow-lg">
          Play Game
        </button>
      </div>
    
      <Footer/>

      {/* Modal Section */}
      {showModal && (
        <div className="relative bg-[#112233] border-2 border-[#86EFBE] p-6 rounded-lg text-white w-[300px] shadow-lg">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-white text-lg font-bold hover:text-gray-300"
          >
            ×
          </button>
          <ul className="space-y-4">
            <li className="flex items-center">
              <img src="dragon.svg" alt="Dragon" className="w-6 h-6 mr-3" />
              <span>Tap to fly your dragon</span>
            </li>
            <li className="flex items-center text-[17px]">
              <img src="gem.svg" alt="Jade" className="w-6 h-6 mr-3" />
              <span className="" >Collect jade to build gems</span>
            </li>
            <li className="flex items-center">
              <img src="rock.svg" alt="Rock" className="w-6 h-6 mr-3" />
              <span>Avoid rocks or lose a life</span>
            </li>
            <li className="flex items-center">
              <img src="heart.svg" alt="Heart" className="w-6 h-6 mr-3" />
              <span>Collect hearts to regain a life</span>
            </li>
            <li className="flex items-center">
              <img src="lives-icon.png" alt="Lives" className="w-6 h-6 mr-3" />
              <span>Game over when you lose 3 lives</span>
            </li>
            <hr className="border-t border-white/20" />
            <li>
              <span>Get on the daily leaderboard to earn gems</span>
            </li>
            <hr className="border-t border-white/20" />
            <li>
              <span>Rank on the weekly leaderboard to lock in your airdrop</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HomePage;
