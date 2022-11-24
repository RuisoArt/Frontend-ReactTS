import ProfileEntity from "./ProfileEntity";

class UserEntity {
    public nameUser: string;
    public emailUser: string;
    public passUser: string;
    public stateUser: number;
    public dateCreated: Date;

    public idProfile: ProfileEntity;

    constructor(name: string, email: string, pass: string , state: number, date: Date, id: ProfileEntity) {
        this.nameUser = name;
        this.emailUser = email;
        this.passUser = pass;
        this.stateUser = state;
        this.dateCreated = date;
        this.idProfile = id;
    }

};
export default UserEntity;