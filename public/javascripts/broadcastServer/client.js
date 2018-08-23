const clientManager = new function () {
    const $chatContent = $('.chat-content');

    // Create WebSocket connection.
    const socket = new WebSocket('ws://localhost:8080');
    this.socket = socket;

    // Connection opened
    socket.addEventListener('open', function (event) {
        socket.send('Hello Server!');
    });

    // Listen for messages
    socket.addEventListener('message', function (event) {
        console.log('Message from server ', event.data);
        $chatContent.append(`<div class="sentence">${event.data}</div>`);
    });
};

const writingManager = new function () {
    const $writingZone = $('.writing-zone');

    $writingZone.on('keyup', function (e) {
        const code = e.which;

        if (code === 13) {
            clientManager.socket.send($writingZone.val());
            $writingZone.val('');
        }

    })
};

