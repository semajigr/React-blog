import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../app/hooks/hooks";
import { getUserInfo } from "../../app/selectors/userSelector";
import { ROUTE } from "../../routes";

export const RequareAuth = () => {
  const isAuth = useAppSelector(getUserInfo);
  return isAuth ? <Outlet /> : <Navigate to={ROUTE.SIGN_IN} />;
};
