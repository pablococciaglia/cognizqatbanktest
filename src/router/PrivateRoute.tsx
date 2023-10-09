import { FC } from "react";

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectIsLogged } from "../selectors/seletors";
import { LinkTo } from "../constants/constants";

interface PrivateRouteProps {
  children: JSX.Element;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const isLogged = useSelector(selectIsLogged);
  return isLogged ? children : <Navigate to={`/${LinkTo.LOGIN}`} />;
};
