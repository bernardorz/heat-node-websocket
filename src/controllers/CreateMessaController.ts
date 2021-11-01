import  { Request, Response } from 'express';
import { CreateMessageService } from '../services/CreateMessageService';



class CreateMessaController{
    async handle(request : Request, response : Response){

    const { message } = request.body;
    const  { user_id } = request;
    
    const createMessageService = new CreateMessageService();

    const result = await createMessageService.execute(message, user_id)

    return response.json(result)

    }
}


export  {  CreateMessaController }