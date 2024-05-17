import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/user/userOperations";
import { selectIsRefreshing } from "./redux/user/userSelectors";
import { Loader } from "./components/Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage/SignUpPage"));
const LoginPage = lazy(() => import("./pages/SignInPage/SignInPage"));
const TrackerPage = lazy(() => import("./pages/TrackerPage/TrackerPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

export const App = () => {
  // юзер рефреш
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/signup"
            element={
              <RestrictedRoute
                redirectTo="/tracker"
                component={<SignUpPage />}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <RestrictedRoute
                redirectTo="/tracker"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/tracker"
            element={
              <PrivateRoute redirectTo="/signin" component={<TrackerPage />} />
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
