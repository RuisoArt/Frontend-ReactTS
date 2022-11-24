class Avion{
    public avionType: number;
    public avionCompany: string;
    public avionAvailability: number;
    public cantidadAviones?: number;

    constructor(type: number, company: string, availability: number) {
        this.avionType = type;
        this.avionCompany = company;
        this.avionAvailability = availability;
    }
}

export default Avion;