import Header from "../components/UI/Header";
import ChatBox from "../features/chatroom/ChatBox";
import SideBar from "../features/chatroom/SideBar";

function Chat() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Header />
      <div className="grid grid-cols-12 flex-1 h-full">
        <div className="col-span-3">
          <SideBar />
        </div>
        <div className="col-span-9">
          <ChatBox />
        </div>
      </div>
    </div>
  );
}

export default Chat;
