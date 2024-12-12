import React from "react";
import { useNavigate } from "react-router-dom";

const FlappyJade = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/homepage");
  };

  return (
    <div
      className="relative h-screen w-full bg-gradient-to-b from-blue-300 to-blue-500 flex items-center justify-center overflow-hidden"
      onClick={handleNavigation} 
    >
      <img
        src="/splashscreen.svg"
        alt="Temple"
        className="w-screen h-auto"
      />
    </div>
  );
};

export default FlappyJade;
