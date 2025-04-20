import { useForm } from "react-hook-form";
import useRegistration from "../features/auth/useRegistration";
import { Link } from "react-router-dom";

function Registration() {
  const { register, handleSubmit, reset, formState } = useForm();
  const { isLoading, registration } = useRegistration();
  const { errors } = formState;
  function onsubmit(data) {
    registration(
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
            Registration Form
          </h2>
          <div className="flex flex-col gap-2 md:px-20 md:py-6">
            <input
              type="text"
              {...register("username", { required: "This field is required" })}
              placeholder="user name"
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
              {isLoading ? "Loading..." : "Sign up"}
            </button>
            <button
              className="px-4 py-2 bg-gray-300 text-gray-800 hover:text-gray-900 hover:bg-gray-400 rounded font-semibold text-lg cursor-pointer"
              type="reset"
            >
              Clear
            </button>
          </div>

          <p className="text-md text-amber-600 text-center">
            Already sign up?
            <Link exact to="/login" className="underline text-blue-900 px-4">
              Login
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}

export default Registration;
