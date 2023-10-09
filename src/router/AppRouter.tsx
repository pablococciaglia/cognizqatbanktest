import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AppScreen } from "../screens/AppScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <AppScreen />
            </PrivateRoute>
          }
        />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
