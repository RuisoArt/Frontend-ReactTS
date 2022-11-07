export class Empanada {
    
    public codEmpanada: number;
    public nombreEmpanada: string;
    public tipoEmpanada: number; // interfaz y dominio
    public nombreImagen: string; // warning, elemento no inmutable
    public imagenEmpanada: string;
    
    

    constructor(codEmpanada:number, nombreEmpanada:string, tipoEmpanada:number, nombreImagen:string, imagenEmpanada:string) {
        this.codEmpanada = codEmpanada;
        this.nombreEmpanada = nombreEmpanada;
        this.tipoEmpanada = tipoEmpanada;
        this.nombreImagen = nombreImagen;
        this.imagenEmpanada = imagenEmpanada;
        
    }
};