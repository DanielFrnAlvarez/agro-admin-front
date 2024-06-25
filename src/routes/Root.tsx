import { Outlet } from "react-router-dom";

import MainLayout from "../components/layout/Main.layout";
import Topbar from "../components/menu/Topbar";
import Sidebar from "../components/menu/Sidebar";

const Root: React.FC = () => {
  return (
    <MainLayout>
      <div className="App">
        <Sidebar />
        <main className="content">
          <Topbar />
          {/* Your other components here */}
          <Outlet />
        </main>
      </div>
    </MainLayout>
  );
};

export default Root;