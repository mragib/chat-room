import { format } from "date-fns";
import useChatList from "./useChatList";

function ChatList() {
  const { chatList, isLoading, error } = useChatList();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!chatList.length) return <p>No chat found</p>;

  // const data = [
  //   {
  //     id: "fdabvhk-dbahbajkh-dajnjkh",

  //     name: "Jon snow",

  //     type: "individual",

  //     createdBy: "nxjn-kmvk",

  //     createdAt: new Date(),
  //   },
  //   {
  //     id: "fdabvhk-darf-dajnjdshkh",

  //     name: "Arya Stark",

  //     type: "individual",

  //     createdBy: "nxjn-kmvk",

  //     createdAt: new Date(),
  //   },
  //   {
  //     id: "fdabvhk-darf-dajnjkh",

  //     name: "Arya Stark",

  //     type: "individual",

  //     createdBy: "nxjn-kmvk",

  //     createdAt: new Date(),
  //   },
  // ];
  return (
    <div>
      {chatList.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center px-6 py-2 hover:bg-amber-400 transition-all duration-300"
        >
          <div className="grid ">
            <div className="flex items-center gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>

              <p className="text-xl font-semibold text-gray-800">{item.name}</p>
            </div>
            <p className="text-gray-600">
              {`${format(item.createdAt, "MMM dd yyyy")} at ${format(
                item.createdAt,
                "hh:mm aaa"
              )}`}
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}

export default ChatList;
