import React from "react";
import { useNavigate } from "react-router-dom";

const Footer =() =>{
  const navigate = useNavigate();
    const handleProfile = () => {
        navigate("/profile");
      };
    
      const handleRank = () => {
        navigate("/leaderboard");
      };
    
      const handleEarn = () => {
        navigate("/earn");
      };
    
      const handleStore = () => {
        navigate("/store");
      };
    
    return(
        <div className="fixed bottom-0 w-full flex justify-around items-center bg-black text-white py-4">
        {/* Other Buttons */}
        <div 
        onClick={handleProfile}
        className="flex flex-col items-center">
        <img src="/home.svg" alt="profile" className="" />
        <p className="text-sm">Profile</p>
        </div>
        <div 
        onClick={handleRank}
        className="flex flex-col items-center">
        <img src="/ranking.svg" alt="ranking" className="" />
        <p className="text-sm">Ranking</p>
        </div>

        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <img src="/play.svg" alt="play" className="" />
        </div>

        {/* Remaining Buttons */}
        <div 
        onClick={handleEarn}
        className="flex flex-col items-center">
        <img src="/earn.svg" alt="earn" className="" />
        <p className="text-sm">Earn</p>
        </div>
        <div 
        onClick={handleStore}
        className="flex flex-col items-center">
        <img src="/store.svg" alt="store" className="" />
        <p className="text-sm">Store</p>
        </div>
    </div>
    )
}
export default Footer;
