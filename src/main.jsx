import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./home.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import bg from "./assets/bg.png";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <img src={bg} alt="bg" className="bg" />
  </StrictMode>
);

AOS.init({ passive: true });
