export class Cars {
    
    public codVehiculo: number;
    public marcaVehiculo: number;
    public placaVehiculo: string;
    public modeloVehiculo: number;
    public imagenVehiculo: string;
    public nombreImagenVehiculo: string;

    constructor(codVehiculo:number,marcaVehiculo: number, placaVehiculo: string, modeloVehiculo: number, imagenVehiculo: string, nombreImagenVehiculo: string) {
        this.codVehiculo = codVehiculo;
        this.marcaVehiculo = marcaVehiculo;
        this.placaVehiculo = placaVehiculo;
        this.modeloVehiculo = modeloVehiculo;
        this.imagenVehiculo = imagenVehiculo;
        this.nombreImagenVehiculo = nombreImagenVehiculo;
    }
};