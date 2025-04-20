import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

function useRegistration() {
  const navigate = useNavigate();
  const { signup } = useAuthContext();

  const { mutate: registration, isPending: isLoading } = useMutation({
    mutationFn: signup,

    onSuccess: () => {
      toast.success("Registration is successfully");
      navigate("/", { replace: true });
    },
    onError: (err) => {
      console.error(err);
      toast.error(err);
    },
  });

  return { registration, isLoading };
}

export default useRegistration;
