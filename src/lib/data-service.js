import axios from "axios";
import { BASE_URL } from "../context/AuthContext";

export async function getChatList({ user }) {
  const res = await axios(`${BASE_URL}/chats?userId=${user}`);

  return res.data;
}
