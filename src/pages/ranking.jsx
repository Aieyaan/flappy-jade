import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "../component/footer";

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
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="bg-[#0E1B17] text-white min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md bg-[#0E1B17] rounded-lg shadow-lg p-6">
        {/* Calendar Component */}
        <div className="text-center bg-[#0A3131] text-xl font-bold mb-4 rounded-lg shadow-lg p-6">
          <div className="flex flex-col items-center">
            <span className="mb-2">Reset on</span>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd MMM yyyy"
              className="text-center bg-[#0A3131] text-white py-2 px-4 rounded w-full cursor-pointer"
              popperPlacement="bottom"
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="bg-[#0A3131] p-4 mb-10">
        <div className="flex justify-around text-sm mb-4">
          <button className="px-4 py-2 bg-[#0A3131] border-2 border-[#86EFBE] rounded-lg">
            Daily
          </button>
          <button className="px-4 py-2 bg-[#0A3131] border-2 border-[#86EFBE] rounded-lg">
            Weekly
          </button>
          <button className="px-4 py-2 bg-[#0A3131] border-2 border-[#86EFBE] rounded-lg">
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
          <span className="font-bold">{player.rank}</span>
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
