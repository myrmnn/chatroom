//queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newName = document.querySelector('.new-name');
const updateMessg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');
const roomType = document.querySelector('.room-type');

//add a new chat
newChatForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const message = newChatForm.message.value.trim();
	chatroom
		.addChat(message)
		.then(() => newChatForm.reset())
		.catch((err) => console.log(err));
});

//update Name
newName.addEventListener('submit', (e) => {
	e.preventDefault();
	const newUser = newName.name.value.trim();
	chatroom.updateUser(newUser);
	updateMessg.textContent = `Username: ${newUser}`;
	//reset the form
	newName.reset();
});

//update the chatrooms

rooms.addEventListener('click', (e) => {
	if (e.target.tagName === 'BUTTON') {
		updateUI.clear();
		chatroom.updateRoom(e.target.getAttribute('id'));
		chatroom.getChats((chat) => updateUI.render(chat));
	}
	roomType.textContent = `#${e.target.getAttribute('id')}`;
});

//check local storage for a username

const username = localStorage.Username ? localStorage.Username : 'Anonymous';

if (localStorage.Username) {
	updateMessg.textContent = `Welcome back, ${username}!`;
}

//class instances
const chatroom = new Chatroom('General', username);
const updateUI = new UpdateUI(chatList);

//get chats and render
chatroom.getChats((data) => updateUI.render(data));
