import { useSelector } from "react-redux";
import { selectIsLogged } from "../selectors/seletors";
import { Navigate } from "react-router-dom";
import { FC } from "react";
import { LinkTo } from "../constants/constants";

interface PublicRouteProps {
  children: JSX.Element;
}

export const PublicRoute: FC<PublicRouteProps> = ({ children }) => {
  const isLogged = useSelector(selectIsLogged);
  return !isLogged ? children : <Navigate to={`/${LinkTo.BLOGS}`} />;
};
