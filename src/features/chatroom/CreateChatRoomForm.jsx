function CreateChatRoomForm() {
  return (
    <form className="grid gap-4">
      <input type="text" placeholder="Enter chat room name" />
      <input type="text" placeholder="Enter chat room name" />
      <input type="text" placeholder="Enter chat room name" />
      <button type="submit">Create Room</button>
    </form>
  );
}

export default CreateChatRoomForm;
