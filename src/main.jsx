import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./components/AuthContext.jsx";
import { BasketProvider } from "./components/BasketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BasketProvider>
        <App />
      </BasketProvider>
    </AuthProvider>
  </React.StrictMode>
);
