class UpdateUI {
  constructor(list) {
    this.list = list;
  }

  render(data) {
    const html = `
      <li class="list-group-item">
      <span class="username">${data.username}</span>
      <span class="message">${data.message}</span>
      <div class="timestamp">${data.created_at.toDate().toLocaleString()}</div>
      </li>
      `;

    this.list.innerHTML += html;
  }
}
