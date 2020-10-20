//queries
const chatList = document.querySelector(".class-list");

//class instances
const chatroom = new Chatroom("general", "snufkin");

//get chats and render
chatroom.getChats((data) => {
  console.log(data);
});
