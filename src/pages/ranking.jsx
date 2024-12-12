import React from "react";
import Footer from "../component/footer";
import { useNavigate } from "react-router-dom";

const leaderboardData = [
  { rank: 1, name: "Sharique", score: 25644, time: "4:40", income: 600 },
  { rank: 2, name: "Sharique", score: 25644, time: "4:40", income: 600 },
  { rank: 3, name: "Sharique", score: 25644, time: "4:40", income: 600 },
  { rank: 4, name: "Sharique", score: 25644, time: "4:40", income: 600 },
  { rank: 5, name: "Sharique", score: 25644, time: "4:40", income: 600 },
  { rank: 6, name: "Dhoni", score: 25644, time: "4:40", income: 600 },
  { rank: 7, name: "Sharique", score: 25644, time: "4:40", income: 600 },
  { rank: 8, name: "Sharique", score: 25644, time: "4:40", income: 600 },
  { rank: 9, name: "YOU", score: 25644, time: "4:40", income: 600 },
];

const Leaderboard = () => {


  const navigate = useNavigate();
    const handleDaily = () => {
      navigate("/leaderboard");
  };
  const handleWeekly = () => {
    navigate("/week");
};
const handleQuest = () => {
  navigate("/alltime");
};


  return (
    <div className="bg-[#0E1B17] text-white min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md bg-[#0E1B17] rounded-lg shadow-lg p-6">
      

        <div className="bg-[#0A3131] p-4 mb-10">
        <div className="flex justify-around text-sm mb-4">
          <button 
          onClick={handleDaily}
          className="px-4 py-2 bg-[#0A3131] border-2 border-[#86EFBE] rounded-lg">
            Daily
          </button>
          <button 
          onClick={handleWeekly}
          className="px-4 py-2 bg-[#0A3131] border-2 border-[#86EFBE] rounded-lg">
            Weekly
          </button>
          <button 
          onClick={handleQuest}
          className="px-4 py-2 bg-[#0A3131] border-2 border-[#86EFBE] rounded-lg">
            All Time
          </button>
        </div>
        
        {/* League Title */}
        <div>
          <p className="text-center text-lg font-semibold mb-6">League I</p></div>
        </div>
        {/* Leaderboard Table */}
        <div className="overflow-y-auto max-h-screen">
        <table className="w-full text-left rounded-lg overflow-hidden">
  <thead>
    <tr className="bg-[#0A3131] rounded-lg">
      <th className="p-2">Leaderboard</th>
      <th className="p-2">Score</th>
      <th className="p-2">Time</th>
      <th className="p-2">Income/hr</th>
    </tr>
  </thead>
  <tbody>
    {leaderboardData.map((player, index) => (
      <tr
        key={index}
        className={`${
          player.name === "YOU"
            ? "bg-[#0E352E]"
            : "bg-[#0A3131]"
        }`}
      >
        <td className="p-2 flex items-center gap-2">
          {player.rank === 1 ? (
            <img
              src="/first.svg" 
              alt="Gold Trophy"
              className="w-7 h-7"
            />
          ) : player.rank === 2 ? (
            <img
              src="/second.svg"
              alt="Silver Trophy"
              className="w-6 h-6"
            />
          ) : player.rank === 3 ? (
            <img
              src="/third.svg"
              alt="Bronze Trophy"
              className="w-7 h-7"
            />
          ) : (
            <span className="font-bold mr-5">{player.rank}</span>
          )}
          <span>{player.name}</span>
        </td>
        <td className="p-2">{player.score}</td>
        <td className="p-2">{player.time}</td>
        <td className="p-2">{player.income}</td>
      </tr>
    ))}
  </tbody>
</table>

<Footer />
        </div>
      </div>
    </div>
  );
};
export default Leaderboard;
