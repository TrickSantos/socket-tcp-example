import { createServer } from "net";

var server = createServer((socket) => {
  socket.write("Echo server\r\n");
  socket.pipe(socket);
});

server.listen(1337, () => console.log("server listening on port 1337"));

server.on("connection", (socket) => {
  let a = socket.localAddress;
  console.log(`Conexão realizada com: ${a || "localhost"}`);
  socket.on("close", () => console.log("server disconnected"));

  setInterval(() => {
    socket.write("open");
    console.log("emitindo evento");
  }, 5000);
});
