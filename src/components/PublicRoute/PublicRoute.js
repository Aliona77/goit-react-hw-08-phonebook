import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { authSelectors } from "../../redux/auth";

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = "/",
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLogin);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
