class AvionEntity {

    public avionType: number;
    public avionCompany: string;
    public avionAvailability: number;

    constructor(type: number, company: string, availability: number) {
        this.avionType = type;
        this.avionCompany = company;
        this.avionAvailability = availability;
    }

}
export default AvionEntity;