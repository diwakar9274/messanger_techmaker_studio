import consumer from "./consumer"

const element = document.getElementById('room-id');
const room_id = element.getAttribute('data-room-id');

console.log(room_id)

consumer.subscriptions.create({channel: "RoomChannel", room_id: room_id}, {
  connected() {
    console.log('connected to', room_id);
  },

  disconnected() {
    
  },

  received(data) {
    console.log(data);
    const messageContainer = document.getElementById('messages');
    messageContainer.innerHTML += data.html
  }
});


