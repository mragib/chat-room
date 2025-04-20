import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useEffect } from "react";

function ProtactedRoutes({ children }) {
  const { user } = useAuthContext();
  const navigator = useNavigate();

  useEffect(
    function () {
      if (!user) navigator("/login");
    },
    [user, navigator]
  );

  return user ? children : null;
}

export default ProtactedRoutes;
