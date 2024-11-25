import { Outlet } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayouts";

const App: React.FC = () => {
  return (
    <>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  );
};

export default App;
