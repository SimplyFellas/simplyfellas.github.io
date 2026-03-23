import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";
import Downloads from "./pages/downloads";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route index path="/" element={<App />}></Route>
        <Route path="/downloads" element={<Downloads />}></Route>
      </Routes>
    </HashRouter>
  </StrictMode>
)
