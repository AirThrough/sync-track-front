import { Outlet } from "react-router-dom";
import { useIsAuthenticated } from "~/entities/user";

export const Layout = () => {
  const isAuthenticated = useIsAuthenticated();
  return (
    <div>
      {isAuthenticated ? (
        <Outlet />
      ) : (
        <div>
          public
          <Outlet />
        </div>
      )}
    </div>
  );
};
