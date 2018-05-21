import uuws = require("uuws");

export class Server {
    private WebSocketServer = uuws.Server;
    private clientHandler: ClientHandler = null;
    private wss = null;

    constructor(port, clientHandler) {
        this.wss = new this.WebSocketServer({port: port});
        this.wss.binaryType = "arraybuffer";
        this.clientHandler = clientHandler;
    }

    listen() {
        let clientHandler = this.clientHandler;
        let wss = this.wss;
        wss.on('connection', function (ws) {
            clientHandler.connected(wss, ws);
        });
    }

}

