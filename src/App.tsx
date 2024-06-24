import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          {/* Definición de las rutas principales */}
          {/* Otras rutas */}
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
