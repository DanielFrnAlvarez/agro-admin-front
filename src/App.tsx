import React from 'react';

import MainLayout from './components/layout/MainLayout';


const App: React.FC = () => {
  return (
    <MainLayout>
      <div className="app">
        <main className="content"></main>
      </div>
    </MainLayout>
  );
};

export default App;
