import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext/authContext";
import { PlayListContextProvider } from "./context/playlistContext/playlistContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <PlayListContextProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
    </PlayListContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
