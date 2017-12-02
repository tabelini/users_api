import 'reflect-metadata';
import {Container} from 'inversify';
import {interfaces, InversifyRestifyServer, TYPE} from 'inversify-restify-utils';
import Controller = interfaces.Controller;
import {UserController} from './controllers/UserController';

// Creates the injection container
const container = new Container();
container.bind<Controller>(TYPE.Controller).to(UserController).whenTargetNamed('UserController');

// App Server
const server = new InversifyRestifyServer(container, {name: 'UserApi'});
const app = server.build();

const port = process.env['PORT'] || 8080;

app.listen(port);

console.log(`Server Running on port ${port}!`);