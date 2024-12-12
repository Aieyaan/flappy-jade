import React from "react";

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
  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-6">
        {/* <div className="text-center text-xl font-bold mb-4">
          Reset on 14 Dec 2024
        </div> */}
        <div className="flex justify-around text-sm mb-4">
          <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500">
            Daily
          </button>
          <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500">
            Weekly
          </button>
          <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500">
            All Time
          </button>
        </div>
        <div className="text-center text-lg font-semibold mb-4">
          League I
        </div>
        <div className="overflow-y-auto max-h-96">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-700">
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
                      ? "bg-blue-500"
                      : index % 2 === 0
                      ? "bg-gray-700"
                      : "bg-gray-800"
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
        </div>
      </div>
    </div>
  );
};
export default Leaderboard;
