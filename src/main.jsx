import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { Route } from "react-router";
import { Routes } from "react-router";
import Downloads from "src/pages/downloads.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />}></Route>
        <Route path="/downloads" element={<Downloads/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
