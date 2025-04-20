import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const { login: loginApi } = useAuthContext();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: loginApi,

    onSuccess: () => {
      toast.success("Logged in successfully");
      navigate("/", { replace: true });
    },
    onError: (err) => {
      console.error(err);
      toast.error("Invalid credentials");
    },
  });

  return { login, isLoading };
}
