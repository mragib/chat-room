import { useAuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLogin } from "../features/auth/useLogin";
import { useForm } from "react-hook-form";

function Login() {
  const { user } = useAuthContext();
  const { isLoading, login } = useLogin();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const navigator = useNavigate();
  useEffect(() => {
    if (user) navigator("/");
    else navigator("/login");
  }, [user, navigator]);

  function onsubmit(data) {
    login(
      { ...data },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <form
      onSubmit={handleSubmit(onsubmit, onError)}
      className="bg-amber-100 w-screen h-screen"
    >
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="bg-gray-200 border-2 shadow p-4  h-96  rounded-2xl flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-gray-800 leading-8 text-center">
            Login to chat room
          </h2>
          <div className="flex flex-col gap-2 md:px-20 md:py-6">
            <input
              type="text"
              placeholder="user name"
              {...register("username", { required: "This field is required" })}
              className={`px-4 py-2 bg-white ${
                errors.username ? "border-red-400 border-2" : ""
              }`}
            />
            <input
              type="password"
              placeholder="password"
              {...register("password", { required: "This field is required" })}
              className={`px-4 py-2 bg-white ${
                errors.password ? "border-red-400 border-2" : ""
              }`}
            />
          </div>
          <div className="flex gap-4 items-center justify-center">
            <button className="px-4 py-2 bg-amber-300 text-white rounded hover:bg-amber-400 font-semibold text-lg cursor-pointer">
              {isLoading ? "Loading..." : "Login"}
            </button>
            <button
              className="px-4 py-2 bg-gray-300 text-gray-800 hover:text-gray-900 hover:bg-gray-400 rounded font-semibold text-lg cursor-pointer"
              type="reset"
            >
              Clear
            </button>
          </div>
          <p className="text-md text-amber-600 text-center">
            Are you first time here?
            <Link exact to="/signup" className="underline text-blue-900 px-4">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}

export default Login;
