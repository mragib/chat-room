import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import useOutsideClick from "../../hooks/useOutsideClick";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;
  return (
    <ModalContext.Provider value={{ open, close, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: openWindowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(openWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed top-0 left-0 w-full h-screen bg-black backdrop-blur-sm z-50 transition-all duration-500 flex items-center justify-center">
      <div
        className="absolute w-60 h-96 top-20 bg-white rounded-md shadow-md py-4 px-6 transition-all duration-500 grid items-center justify-center"
        ref={ref}
      >
        <button
          className="bg-none border-0 p-4 rounded-sm translate-x-1 absolute top-2 right-3 hover:bg-gray-200"
          onClick={close}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body
  );
}

Modal.Window = Window;
Modal.Open = Open;

export default Modal;
