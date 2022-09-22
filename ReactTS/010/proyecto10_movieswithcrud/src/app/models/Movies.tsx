export class Movies {
    
    public codPeicula: number;
    public nombrePelicula: string;
    public protagonistaPelicula: string;
    public generoPelicula: string;
    public imagenPelicula: string;
    

    constructor(codPeicula:number, nombrePelicula:string, protagonistaPelicula:string, generoPelicula:string, imagenPelicula: string) {
        this.codPeicula = codPeicula;
        this.nombrePelicula = nombrePelicula;
        this.protagonistaPelicula = protagonistaPelicula;
        this.generoPelicula = generoPelicula;
        this.imagenPelicula = imagenPelicula;
    }
};