//queries
const chatList = document.querySelector(".chat-list");

//class instances
const chatroom = new Chatroom("general", "snufkin");
const updateUI = new UpdateUI(chatList);

//get chats and render
chatroom.getChats((data) => updateUI.render(data));
