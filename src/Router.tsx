import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GeomapPage from "./GeomapPage";
import HomePage from "./HomePage";
import WelcomePage from "./WelcomePage";

const Router = () => (
  <BrowserRouter basename="gis-courts">
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="home" element={<HomePage />} />
      <Route path="map" element={<GeomapPage />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
