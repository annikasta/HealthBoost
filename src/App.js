import React from "react";
import "./styles.css";

import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import LoginPage from "./routes/LoginPage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/startseite" element={<Home />} />
        <Route path="/ueberuns" element={<About />} />
        <Route path="/produkte" element={<Service />} />
        <Route path="/kontaktundfaq" element={<Contact />} />
        <Route path="/konto" element={<LoginPage />} />
      </Routes>
    </div>
  );
}
