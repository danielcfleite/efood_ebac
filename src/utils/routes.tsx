import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/home";
import { RestaurantPage } from "../Pages/RestaurantPage";

export const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurante/:id" element={<RestaurantPage />} />
  </Routes>
);
