export class Equipo {
    public codEquipo: number;
    public nombreEquipo: string;
    public ciudadEquipo: string;
    public estadoEquipo: boolean;
    public fotoEquipo: string;

    constructor(codEquipo: number, nombreEquipo:string, ciudadEquipo:string, estadoEquipo:boolean, fotoEquipo:string){
        this.codEquipo = codEquipo;
        this.nombreEquipo = nombreEquipo;
        this.ciudadEquipo = ciudadEquipo;
        this.estadoEquipo = estadoEquipo;
        this.fotoEquipo  = fotoEquipo;
    }
};