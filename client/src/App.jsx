// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";
import StoriesPage from "./pages/StoriesPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import WelcomePage from "./pages/Welcomepage";
import { Toaster } from "react-hot-toast";
import AdminDashBoard from "./pages/AdminDashBoard";

function App() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openLightbox = (img) => {
    setCurrentImage(img);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Navbar />
      <Toaster />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home openLightbox={openLightbox} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/dashboard" element={<AdminDashBoard />} />

          <Route
            path="/room/:id"
            element={<RoomDetails openLightbox={openLightbox} />}
          />
          <Route
            path="/stories"
            element={<StoriesPage openLightbox={openLightbox} />}
          />
        </Routes>
      </main>

      <Footer />

      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl"
            onClick={closeLightbox}
          >
            &times;
          </button>
          <img
            src={currentImage}
            alt="Resort Gallery"
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default App;
