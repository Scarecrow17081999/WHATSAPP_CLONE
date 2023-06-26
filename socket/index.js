import { Server } from "socket.io";

const io = new Server(3000, {
  cors: {
    origin: ["http://localhost:5173"],
  },
});
let users = [];

function getUser(userId) {
  return users.find((user) => user.sub == userId);
}
function addUser(userData, socketId) {
  !users.some((user) => user.sub == userData.sub) &&
    users.push({
      ...userData,
      socketId,
    });
}

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("addUser", (userData) => {
    addUser(userData, socket.id);
    io.emit("getUsers", users);
  });
  socket.on("sendMessage", (data) => {
    const user = getUser(data.receiverId);
    io.to(user?.socketId).emit("getMessage", data);
  });
});
