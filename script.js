const socket = io();

const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
    socket.emit("boton_pulsado");
});

socket.on("boton_iluminado", () => {
    boton.classList.add("encendido");

    setTimeout(() => {
        boton.classList.remove("encendido");
    }, 100);
});