import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { useDispatch } from "react-redux";
import { lazy, useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";
import { useAuth } from "./hooks";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage/SignUpPage"));
const LogInPage = lazy(() => import("./pages/LogInPage/LogInPage"));
const TrackerPage = lazy(() => import("./pages/TrackerPage/TrackerPage"));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={<SignUpPage />} redirectTo="/water" />
          }
        />

        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/water" component={<LogInPage />} />
          }
        />

        <Route
          path="/water"
          element={
            <PrivateRoute redirectTo="/login" component={<TrackerPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
