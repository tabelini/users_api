import 'reflect-metadata';
import {Container} from 'inversify';
import {interfaces, InversifyRestifyServer, TYPE} from 'inversify-restify-utils';
import {UserController} from './UserController';
import Controller = interfaces.Controller;
import {Server} from 'restify';
import * as request from 'supertest';


describe('UserController', () => {

    let app: Server;

    beforeAll(() => {
        let container = new Container();
        container.bind<Controller>(TYPE.Controller).to(UserController).whenTargetNamed('UserController');
        const server = new InversifyRestifyServer(container);
        app = server.build();
    });

    describe('getAllUsers', () => {
        test('should return HelloWorld!', () => {
            return request(app).get('/users/').then((response) => {
                expect(response.status).toBe(200);
                expect(response.body).toEqual({result: 'Hello World!'});
            });
        });
    });
});