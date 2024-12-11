import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HomePage from "../pages/HomePage";
import UserDetails from "../pages/UserDetails";
import RepoDetails from "../pages/RepoDetails";
import Header from "../components/Header";
import Footer from "../components/Footer";

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

const AppRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.3 }}
              >
                <HomePage />
              </motion.div>
            }
          />
          <Route
            path="/user/"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.3 }}
              >
                <UserDetails />
              </motion.div>
            }
          />
          <Route
            path="/repo/:owner/:repo"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.3 }}
              >
                <RepoDetails />
              </motion.div>
            }
          />
          <Route
            path="*"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.3 }}
              >
                <h1>Página Não Encontrada</h1>
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default AppRoutes;