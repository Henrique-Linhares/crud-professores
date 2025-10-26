import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Menu/Sidebar.js';
import Home from "./pages/Home/Home.js";
import Formulario from './pages/Formulario/Formulario.js';
import Lista from './pages/Lista/Lista';
import './components/Menu/Sidebar.css'; 
function App(){
  return (
    <BrowserRouter>
      <div className="layout-container">
        <Sidebar /> 
        
        <main className="content-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lista" element={<Lista />} />
            <Route path="/formulario" element={<Formulario />} />
            <Route path="*" element={<div className="page-content"><h1>404: Página não encontrada</h1></div>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;