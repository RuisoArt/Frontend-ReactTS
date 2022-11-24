class CreateUser{
    public nameUser: string;
    public emailUser: string;
    public passUser: string;

    constructor(name: string, email: string, pass: string){
        this.nameUser = name;
        this.emailUser = email;
        this.passUser = pass;
    }
}

export default CreateUser;