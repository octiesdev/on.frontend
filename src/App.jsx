import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import Profile from "./pages/Profile";

const App = () => (
  <TonConnectUIProvider manifestUrl="https://your-app.netlify.app/tonconnect-manifest.json">
    <Router>
      <Routes>
        <Route path="/" element={<Profile />} />
      </Routes>
    </Router>
  </TonConnectUIProvider>
);

export default App;