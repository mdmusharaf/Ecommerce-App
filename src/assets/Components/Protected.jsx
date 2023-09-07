import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const userLogin = localStorage.getItem("loggedIN");
  return <>{userLogin ? <Outlet /> : <Navigate to={"/login"} />}</>;
};

export default Protected;
