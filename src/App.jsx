import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { selectUserError } from "./redux/user/userSelectors";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage/SignUpPage"));
const LoginPage = lazy(() => import("./pages/SignInPage/SignInPage"));
const TrackerPage = lazy(() => import("./pages/TrackerPage/TrackerPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

export const App = () => {
  const error = useSelector(selectUserError);

  useEffect(() => {
    if (error.length > 0) {
      console.log(error);
      toast.error(error);
    }
  }, [error]);

  return (
    <div>
      <Toaster position="top-right"></Toaster>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/tracker" element={<TrackerPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
