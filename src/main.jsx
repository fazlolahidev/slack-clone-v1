import { createRoot } from "react-dom/client";

//* App *//
import App from "./App";

//* Global CSS *//
import "./index.css";

//* Router *//
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
