import { Outlet } from "react-router-dom";
import AppSidbar from "../../components/sidbar/AppSidbar";


const CategoryLeyout = () => {
  return (
    <main className="category-layout">
      <AppSidbar />
      <div className="content">
        <Outlet />
      </div>
    </main>
  );
};

export default CategoryLeyout;
