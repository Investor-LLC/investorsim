import { BrowserRouter, Route, Routes } from "react-router";
import { InitialPage } from "../pages/InitialPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />} />
      </Routes>
    </BrowserRouter>
  );
};
