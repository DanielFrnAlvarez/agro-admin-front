import { Outlet } from "react-router-dom";

import MainLayout from "../components/layout/Main.layout";
import Topbar from "../components/menu/Topbar";

const Root: React.FC = () =>{
  return(
    <MainLayout>
      <div className="App">
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