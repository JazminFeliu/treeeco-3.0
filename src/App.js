import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import ComunidadPage from "./pages/ComunidadPage";
import HomePage from "./pages/HomePage";
import NosotrosPage from "./pages/NosotrosPage";
import ProductosPage from "./pages/ProductosPage";
import ServiciosPage from "./pages/ServiciosPage";
import ContactoPage from "./pages/ContactoPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/nosotros" element={<NosotrosPage />} />
      <Route path="/productos" element={<ProductosPage />} />
      <Route path="/servicios" element={<ServiciosPage />} />
      <Route path="/comunidad" element={<ComunidadPage />} />
      <Route path="/contacto" element={<ContactoPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
