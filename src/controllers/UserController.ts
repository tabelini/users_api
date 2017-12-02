import {Controller, Get} from 'inversify-restify-utils';
import {injectable} from 'inversify';
import {Next, Request, Response} from 'restify';

@Controller('/users')
@injectable()
export class UserController {
    @Get('/')
    public getAllUsers(req: Request, res: Response, next: Next) {
        res.json({result: 'Hello World!'});
        next();
    }
}