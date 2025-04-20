import { useQuery } from "@tanstack/react-query";
import { getChatList } from "../../lib/data-service";
import { useAuthContext } from "../../context/AuthContext";

function useChatList() {
  const { user } = useAuthContext();
  const {
    isLoading,
    data: chatList,
    error,
  } = useQuery({
    queryKey: ["chat-list", user],
    queryFn: () => getChatList({ user }),
  });
  return { isLoading, chatList, error };
}

export default useChatList;
