import MainLayout from "../components/layout/MainLayout";
import Topbar from "../components/menu/Topbar";

const Root: React.FC = () =>{
  return(
    <MainLayout>
      <div className="App">
        <main className="content">
          <Topbar />
          {/* Your other components here */}
        </main>
      </div>
    </MainLayout>
  );
};

export default Root;