function ChatHistory() {
  const history = [
    {
      id: "fdnjf-jna-na-kafn",

      chatId: "hdbhba-dfj-bjbj",

      senderId: "me",

      content: "test message",

      type: "text",

      status: "sent",

      createdAt: new Date() - 1,
    },
    {
      id: "fdnjf-jna-na-kaf4",

      chatId: "hdbhba-dfj-bjbj",

      senderId: "me",

      content: "test1 message",

      type: "text",

      status: "sent",

      createdAt: new Date(),
    },
    {
      id: "fdnsddf-jna-na-kaf4",

      chatId: "hdbhba-dfj-bjbj",

      senderId: "other",

      content: "test1 hello message",

      type: "text",

      status: "sent",

      createdAt: new Date(),
    },
  ];
  return (
    <div className="w-full px-10 py-2">
      {history.map((item) => {
        if (item.senderId === "me")
          return (
            <div
              key={item.id}
              className="flex justify-end items-center gap-4 py-1"
            >
              <div className="bg-emerald-200 px-6 py-1 rounded-full grid items-center justify-center">
                {item.type === "text" ? (
                  <p className="text-emerald-900">{item.content}</p>
                ) : item.type === "image" ? (
                  <img src={item.content} alt="Image" className="w-12 h-12" />
                ) : (
                  <a href={item.content}>{item.content}</a>
                )}
              </div>
              <div
                className="flex items-center w-10 h-10 rounded-full item-center justify-center
              bg-blue-300"
              >
                {item.senderId}
              </div>
            </div>
          );
        else
          return (
            <div
              key={item.id}
              className="flex justify-start items-center gap-4 py-1"
            >
              <div className="flex items-center w-10 h-10 rounded-full bg-gray-300">
                {item.senderId}
              </div>
              <div className="bg-indigo-200 px-6 py-1 rounded-full grid items-center justify-center">
                {item.type === "text" ? (
                  <p className="text-indigo-900">{item.content}</p>
                ) : item.type === "image" ? (
                  <img src={item.content} alt="Image" className="w-12 h-12" />
                ) : (
                  <a href={item.content}>{item.content}</a>
                )}
              </div>
            </div>
          );
      })}
    </div>
  );
}

export default ChatHistory;
