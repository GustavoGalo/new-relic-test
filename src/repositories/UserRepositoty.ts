import { User } from '../models/User';

export class UserRepository {

    public static _instance: UserRepository;

    private users: User[] = [];
    private counterId: number = 1;

    private constructor() {};

    public static get instance(): UserRepository {
        if (!this._instance) {
            this._instance = new UserRepository();
        }
        return this._instance;
    }

    public listaAll(): User[] {
        return this.users;
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