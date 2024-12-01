import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import GlobalProvider from "./providers/GlobalProvider";
import { BrowserRouter } from "react-router-dom";
import NotifyProvider from "./context/notification";
import DarkModeProvider from "./context/DarkMode";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <DarkModeProvider>
      <NotifyProvider>
        <GlobalProvider />
      </NotifyProvider>
    </DarkModeProvider>
  </BrowserRouter>
);
