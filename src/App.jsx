import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import FlappyJade from "./pages/splashscreen";
import Profile from "./pages/profile"
import Leaderboard from "./pages/ranking";
import Earn from "./pages/earn";
import Refer from "./pages/refer"
import Store from "./pages/store";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FlappyJade />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/earn" element={<Earn />} />
        <Route path="/refer" element={<Refer />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </Router>
  );
};

export default App;
