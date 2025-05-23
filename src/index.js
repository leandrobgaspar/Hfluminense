import React from "react";
import { createRoot } from "react-dom/client"; // <-- importa createRoot
import { BrowserRouter } from "react-router-dom";
import App from "App";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
