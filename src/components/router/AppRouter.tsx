import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import { withLoading } from "../../hocs/withLoading.hoc";
import MainLayout from "../common/layouts/main/MainLayout";
import Temp from "../../pages/Temp";
import ProductCatalog from "../../pages/ProductCatalog";

const ROLES = {
  user: "user",
  admin: "admin",
};

export const AppRouter: React.FC = () => {
  const AdminDashboard = withLoading(Dashboard);
  const TT = withLoading(Temp);
  const Catalog = withLoading(ProductCatalog);

  const protectedLayout = (requiredRoles: string[]) => (
    <MainLayout requiredRoles={requiredRoles} />
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={protectedLayout([ROLES.admin])}>
          <Route index element={<AdminDashboard />} />
          <Route path={"/temp"} element={<TT />} />
        </Route>
        <Route path="/a" element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
