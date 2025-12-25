import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="scroll-smooth">
      {/* Navbar stays on top */}
      <Navbar />

      {/* Main content: all sections in Home.jsx */}
      <Home />

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
