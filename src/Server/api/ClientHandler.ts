
interface ClientHandler {

    handle(global, socket, message);

    connected(global, socket);

    updateClients(gameObject: any[], players : any[]);
}