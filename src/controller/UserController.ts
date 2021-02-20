import { Request, Response } from 'express';
import { User } from '../models/User';
import { UserRepository } from '../repositories/UserRepositoty';

export class UserController {
    private static _instance: UserController;

    private users: User[] = [];
    private counterId: number = 1;

    private constructor() {};

    public static get instance(): UserController {
        if (!this._instance) {
            this._instance = new UserController();
        }
        return this._instance;
    }

    public listaAll(req: Request, res: Response): Response {
        return res.send(UserRepository.instance.listaAll());
    }

    public listOne(userId: number): User | undefined {
        const user = this.users.find(userAux => userAux.getId() === userId);
        return user;
    }

    public createOne(user: User): User {
        user.setId(this.counterId);
        this.counterId++;
        this.users.push(user);
        return user;
    }
}