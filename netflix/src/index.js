import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext/authContext";
import { PlaylistContextProvider } from "./context/playlistContext/playlistContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <PlaylistContextProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </PlaylistContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
