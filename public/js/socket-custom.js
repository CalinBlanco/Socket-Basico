var socket = io();

// ON es un método para escuchar eventos.
socket.on('connect', function () {
  console.log('Nos conectamos al servidor.');
});
socket.on('disconnect', function () {
  console.log('Nos desconectamos del servidor.');
});

socket.on('emitServerMensaje', (mensaje) => {
  console.log('Servidor:', mensaje);
});

// EMIT es un método para emitir eventos e información.
socket.emit('enviarMensaje', {
  usuario: 'Carlos',
  mensaje: 'Hola Carlos.'
}, function (resp) {
  console.log('Respuesta servidor: ', resp);
});