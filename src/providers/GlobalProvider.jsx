import { useRoutes } from "react-router-dom";
import { routes } from "../routers/routes";

function GlobalProvider() {
  const RouterComponent = () => useRoutes(routes);
  return (
    <>
      <RouterComponent />
    </>
  );
}

export default GlobalProvider;
