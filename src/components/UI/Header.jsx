import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

function Header() {
  const [toggle, setToggle] = useState(false);
  const { logout, userName } = useAuthContext();
  return (
    <header className="w-full h-16 bg-amber-500 grid justify-end px-10 py-2 relative">
      <div
        className=" grid items-center justify-center  cursor-pointer"
        onClick={() => setToggle(!toggle)}
      >
        <div className="flex gap-2 items-center">
          <p className="text-white font-semibold text-lg">
            Welcome <span className="capitalize">{userName} </span>
          </p>
          {toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
        </div>

        {toggle && (
          <div className="absolute right-4 top-16 w-32  bg-amber-300 grid  items-center justify-center">
            <button
              className="cursor-pointer px-2 py-4 w-full text-white font-semibold text-lg"
              onClick={() => logout()}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
