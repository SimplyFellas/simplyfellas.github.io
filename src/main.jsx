import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ".//App.css";
import { BrowserRouter } from "react-router";
import { Route } from "react-router";
import { Routes } from "react-router";
import Downloads from "./Pages/downloads.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />}></Route>
        <Route path="/Downloads" element={<Downloads />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
