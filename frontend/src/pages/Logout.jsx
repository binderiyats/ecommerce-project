import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../components/utils/Spinner";
import { UserContext } from "../contexts/UserContext";

export const Logout = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  }, []);

  return <Spinner />;
};
