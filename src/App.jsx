import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Components
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import SkillCard from "./Components/SkillCards";
import WorkExperience from "./Components/WorkExpreince";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="min-h-screen bg-base-100">

        <Routes>

          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <SkillCard />

                {/* Optional */}

                <Projects />
                <Contact />
              </>
            }
          />

          {/* Resume Page */}
          <Route
            path="/resume"
            element={<Resume />}
          />

          {/* Extra Routes */}
          <Route
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/skills"
            element={<SkillCard />}
          />

          <Route
            path="/experience"
            element={<WorkExperience />}
          />

        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notifications */}
      <Toaster position="top-right" />

    </BrowserRouter>
  );
}

export default App;