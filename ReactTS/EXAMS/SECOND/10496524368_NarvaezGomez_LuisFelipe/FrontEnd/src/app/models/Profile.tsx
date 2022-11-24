class Profile{
    public profileName: string;
    public profileState: number;
    public cantidadUsuarios?: number;

    constructor(name: string, state: number) {
        this.profileName = name;
        this.profileState = state;
    }
}

export default Profile;