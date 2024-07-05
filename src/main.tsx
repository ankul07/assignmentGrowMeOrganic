import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <React.StrictMode>
      <CssBaseline />
      <App />
    </React.StrictMode>
  </Router>
);
