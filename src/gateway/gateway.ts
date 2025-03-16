import { MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets"

@WebSocketGateway()
export class MyGateway {

    @SubscribeMessage('newMessage')
    onNewMessage(@MessageBody() body:any){
        console.log(body)
    }
    @SubscribeMessage('newChat')
    newChat(@MessageBody() body:any){
        console.log(body, 1)
    }

}