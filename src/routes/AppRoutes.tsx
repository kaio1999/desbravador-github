import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UserDetails from "../pages/UserDetails";
import RepoDetails from "../pages/RepoDetails";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/:username" element={<UserDetails />} />
        <Route path="/repo/:owner/:repo" element={<RepoDetails />} />
        <Route path="*" element={<h1>Página Não Encontrada</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
