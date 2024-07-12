import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Modules/Seguridad/Login";
import Restore from "./Modules/Seguridad/Restore";
import Home from "./Modules/Seguridad/Home";
import Users from "./Modules/Seguridad/Users";
import Caja from "./Modules/Ventas/Caja";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="login" element={<Login />} />
        <Route path="restore" element={<Restore />} />
        <Route path="home" element={<Home />} />
        <Route path="usuarios" element={<Users />} />
        <Route path="caja" element={<Caja />} />
      </Routes>
    </BrowserRouter>
  );
}
