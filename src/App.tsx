import React from 'react';

import MainLayout from './components/layout/MainLayout';
import Topbar from './components/menu/Topbar';


const app: React.FC = () => {
  return (
    <MainLayout>
      <div className="app">
        <main className="content">
          <Topbar/>
        </main>
      </div>
    </MainLayout>
  );
};

export default app;
