import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DiscussionPage from "./pages/DiscussionPage";
import NotFound from "./pages/NotFound";
import ProfilePage from "./pages/ProfilePage";
import './index.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discussion" element={<DiscussionPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/profilePage" element = {<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
