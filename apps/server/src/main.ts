import net from "node:net";

const server = net.createServer((socket) => {
    console.log("Клиент подключился");


});

server.listen(3000, () => {
    console.log("Сервер работает на 3000 порту"); // вынести в .env
})