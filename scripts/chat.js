class Chatroom {
	constructor(room, username) {
		this.room = room;
		this.username = username;
		this.chats = db.collection('chats');
		this.unsub;
	}
	//format a chat object
	async addChat(message) {
		const now = new Date();
		const chat = {
			message,
			username: this.username,
			room: this.room,
			created_at: firebase.firestore.Timestamp.fromDate(now),
		};
		const response = await this.chats.add(chat);
		return response;
	}

	getChats(getEm) {
		this.unsub = this.chats
			.where('room', '==', this.room)
			.orderBy('created_at')
			.onSnapshot((snapshot) => {
				snapshot.docChanges().forEach((change) => {
					if (change.type === 'added') {
						//update the UI
						getEm(change.doc.data());
					}
				});
			});
	}

	updateUser(user) {
		this.username = user;
		localStorage.setItem('Username', user);
	}

	updateRoom(room) {
		this.room = room;
		console.log(`room updated to ${room}`);
		if (this.unsub) {
			this.unsub();
		}
	}
}
