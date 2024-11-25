import { Outlet } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayouts";
// import { useThemeStore } from "./store/use-theme-store"

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
