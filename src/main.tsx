import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RefProvider } from "./BgContext.jsx";

import App from "./App.tsx";
import "./styles/index.css";
import ScrollToTop from "@components/ScrollToTop.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RefProvider>
      <BrowserRouter>
        <ScrollToTop></ScrollToTop>
        <App />
      </BrowserRouter>
    </RefProvider>
  </React.StrictMode>,
);
