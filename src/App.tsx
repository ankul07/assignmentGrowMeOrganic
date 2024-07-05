import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import SecondPage from "./page/SecondPage";
import PrivateRoute from "./components/PrivateRoute";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/second"
        element={<PrivateRoute element={<SecondPage />} />}
      />
    </Routes>
  );
};

export default App;
