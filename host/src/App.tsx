import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { routes } from "./routes";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./ErrorFallback";

const App = () => {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "16px" }}>
        <NavLink to="/">Host</NavLink>
        <NavLink to="/home">Home</NavLink>
      </nav>
      <ApplicationRoutes />
    </BrowserRouter>
  );
};

const ApplicationRoutes = () => {
  const location = useLocation();

  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              /** для сброса стейта ошибки при переходе на другие страницы через навигацию */
              key={location.pathname}
            >
              <Suspense fallback={<>loading...</>}>{route.element}</Suspense>
            </ErrorBoundary>
          }
        />
      ))}
    </Routes>
  );
};

export default App;
