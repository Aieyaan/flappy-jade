import React from "react";
import Footer from "../component/footer";

const Profile = () => {
  return (
    <div className="bg-[#0E1B17] min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-grow text-white flex flex-col items-center p-4 space-y-6 overflow-y-auto">
        {/* Profile Section */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-16 h-16 rounded-full flex items-center justify-center">
            {/* Placeholder Image */}
            <img
              src="/greendragon.svg"
              alt="profile"
              className="rounded-full"
            />
          </div>
          <h2 className="text-lg font-semibold">player</h2>
        </div>

        {/* Total Gems */}
        <div className="flex justify-center space-x-36 w-full max-w-md border-2 border-[#86EFBE] rounded-lg p-4 text-center">
          <h3 className="text-sm font-medium mt-2 text-gray-400">Total Gems</h3>
          <p className="text-2xl font-bold">5000</p>
        </div>

        {/* Levels Section */}
        <div className="w-full max-w-md bg-[#0E1B17] rounded-lg p-4 space-y-4">
          {/* Flapper Level */}
          <div className="w-full max-w-md bg-[#0A3131] rounded-lg p-4 space-y-4">
            <div className="flex justify-between">
              <h4 className="text-sm font-medium">Flapper Level</h4>
              <p className="text-sm font-bold">1</p>
            </div>
            <div className="flex justify-between">
              
              <p className="text-xs text-gray-400">Flights per day</p>
              <p className="text-xs text-gray-400">15</p>
            </div>
          <button className="text-xs text-[#86EFBE] underline">Upgrade</button>

          </div>

          {/* Dragon and Miner */}
          <div className="w-full max-w-md bg-[#0A3131] rounded-lg p-4 space-y-4">
            <div>
              <div className="flex justify-between">
              <h4 className="text-sm font-medium">Dragon</h4>
              <p className="">Miner</p>
              </div>
              <div className="flex justify-between">
              <p className="text-xs text-gray-400">Referral Multiplier</p>
              <p className="text-sm font-bold">4.00% Gems</p>
              </div>
              <div className="flex justify-between">
              <p className="text-xs text-gray-400">Quest Earn Multiplayer</p>
              <p className="text-xs text-gray-400"> 100%</p>
              </div>
              <button className="text-xs text-[#86EFBE] underline">Upgrade</button>
              </div>
            
            </div>
          </div>
          

        {/* Airdrop Table */}
        <div className="w-full max-w-md bg-[#0A3131] rounded-lg p-4 space-y-4">

          <h3 className="text-lg font-semibold mb-4">Airdrop</h3>
          <div className="text-sm text-gray-400 grid grid-cols-4 gap-2">
            <div>Week</div>
            <div>Level</div>
            <div>$JCT</div>
            <div>Loot Box Jade</div>
            <div>1</div>
            <div>Knight</div>
            <div>7,000</div>
            <div>50 grams</div>
            <div>2</div>
            <div>Not Qualified</div>
            <div></div>
            <div></div>
            <div>3</div>
            <div>Emperor</div>
            <div>7,000</div>
            <div>50 grams</div>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
};

export default Profile;
