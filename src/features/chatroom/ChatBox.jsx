import ChatHistory from "./ChatHistory";

function ChatBox() {
  return (
    <main className="w-full h-full bg-slate-200 flex flex-col">
      <div className="flex flex-col flex-1">
        <ChatHistory />
      </div>
      <div className="flex gap-4 px-20 py-4 relative">
        <input
          type="text"
          className="w-full px-4 py-2 border-2 rounded-md  focus:ring-amber-800"
        />
        <button className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 hover:text-amber-900"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        </button>
      </div>
    </main>
  );
}

export default ChatBox;
