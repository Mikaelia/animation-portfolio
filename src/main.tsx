import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RefProvider } from "./BgContext.jsx";

import App from "./App.tsx";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RefProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RefProvider>
  </React.StrictMode>,
);
