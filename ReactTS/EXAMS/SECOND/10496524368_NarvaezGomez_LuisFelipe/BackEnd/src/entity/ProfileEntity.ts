class ProfileEntity {
    public profileName: string;
    public profileState: number;

    constructor(name: string, state: number) {
        this.profileName = name;
        this.profileState = state;
    }

};
export default ProfileEntity;