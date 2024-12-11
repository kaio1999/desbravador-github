import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <Router>
        <Routes />
      </Router>
    </HelmetProvider>
  </StrictMode>
);
