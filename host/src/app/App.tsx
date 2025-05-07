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
  console.log("render HOST");

  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <ErrorBoundary
              FallbackComponent={() => (
                <div>
                  <h2>Что-то пошло не так при загрузке микрофронтенда.</h2>
                  <p>Попробуйте обновить страницу.</p>
                </div>
              )}
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
