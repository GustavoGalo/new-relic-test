export class User {
    private id: number;
    private name: string;
    private email: string;
    private password: string;

    constructor (id: number, name: string, email: string, password: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getPasswork(): string {
        return this.password;
    }

    public setPasswork(password: string): void {
        this.password = password;
    }
}