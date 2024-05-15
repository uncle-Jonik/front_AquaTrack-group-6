import { lazy } from "react";

import { Route, Routes } from "react-router-dom";

import { Layout } from "./components/Layout/Layout";

const HomePage = lazy(() => import("./pages/test/HomePage"));
const SignUpPage = lazy(() => import("./pages/Register"));
const SignInPage = lazy(() => import("./pages/Login"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/signin" element={<SignInPage />}></Route>
      </Route>
    </Routes>
  );
};
