const { io } = require('./../server');

io.on('connection', (client) => {
  console.log('Usuario conectado.');

  client.on('disconnect', (client) => {
    console.log('Usuario desconectado.');
  });

  client.emit('emitServerMensaje', { mensaje: 'Bienvenido al sistema' });

  client.on('enviarMensaje', (data, callback) => {
    console.log(data);

    client.broadcast.emit('emitServerMensaje', data);
    // if (mensaje.usuario) {
    //   callback({
    //     resp: 'TODO SALIÓ BIEN.'
    //   });
    // } else {
    //   callback({
    //     resp: 'TODO SALIÓ MAL!!!!!!!!!!.'
    //   });
    // }
  });

});