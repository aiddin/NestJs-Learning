import { OnModuleInit } from "@nestjs/common"
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets"
import { Server } from 'socket.io'
@WebSocketGateway()
export class MyGateway implements OnModuleInit {
    @WebSocketServer()

    server: Server

    onModuleInit () {
        this.server.on('connection', (socket) => {
            console.log(socket.id)
            console.log('Connected')
        })
    }

    @SubscribeMessage('newMessage')
    onNewMessage(@MessageBody() body:any){
        this.server.emit('onMessage',{
            msg:'New Message',
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            content: body
        })
        console.log(body)
    }
    @SubscribeMessage('newChat')
    newChat(@MessageBody() body:any){
        console.log(body, 1)
    }

}