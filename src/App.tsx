import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ThemeProvider from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-gray-100">
        <Sidebar />
        <Navbar />
        <main className="pl-64 min-h-screen">selam</main>
      </div>
    </ThemeProvider>
  );
}

export default App;
