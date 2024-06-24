import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';

const App: React.FC = () => {
  return (
    <MainLayout>
      <div className="app">
        <main className="content">

        </main>
      </div>
    </MainLayout>
  );
};

export default App;
