const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Archivos estáticos
app.use(express.static(__dirname));

// Conexión de usuarios
io.on("connection", (socket) => {
    console.log("Usuario conectado");

    socket.on("boton_pulsado", () => {
        io.emit("boton_iluminado");
    });
});

// Iniciar servidor
server.listen(3000, () => {
    console.log("Servidor iniciado en http://localhost:3000");
});