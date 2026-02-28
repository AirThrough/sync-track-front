import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "~pages/Home";
import { useAuthStore } from "~/entities/user/store/auth/auth.store";
import { AuthPage } from "~pages/Auth";
import { Layout } from "~/app/ui/Layout/Layout";

export const AppRouter = () => {
  const { isAuthenticated } = useAuthStore();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {isAuthenticated ? (
            <Route path="/" element={<HomePage />} />
          ) : (
            <>
              <Route path="*" element={<Navigate to="/auth" />} />
              <Route path="/auth" element={<AuthPage />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
