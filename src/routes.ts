import  { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateMessaController } from './controllers/CreateMessaController';
import { GetLast3MessagesController } from './controllers/GetLast3MessagesService';
import { ProfileUserController } from './controllers/ProfileUserController';
import { ensureAuthenticated } from './middleware/EnsureAuthenticated';


const routes = Router();


routes.post('/authenticate', new AuthenticateUserController().handle)

routes.post('/messages', ensureAuthenticated, new CreateMessaController().handle)

routes.get("/messages/last3", new GetLast3MessagesController().handle)

routes.get("/profile", new ProfileUserController().handle)

export { routes }