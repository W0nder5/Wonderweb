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

// 🔥 IMPORTANTE: puerto para Render o local
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log("Servidor iniciado en puerto " + PORT);
});