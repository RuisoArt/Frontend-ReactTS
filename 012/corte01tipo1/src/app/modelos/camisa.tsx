export class Camisa {
  public codCamisa: number;
  public marcaCamisa: number;
  public tallaCamisa: number;
  public colorCamisa: string;
  public nombreImagencamisa: string;
  public base64ImagenCamisa: string;

  constructor(
    codCamisa: number,
    marcaCamisa: number,
    tallaCamisa: number,
    colorCamisa: string,
    nombreImagencamisa: string,
    base64ImagenCamisa: string
  ) {
    this.codCamisa = codCamisa;
    this.marcaCamisa = marcaCamisa;
    this.tallaCamisa = tallaCamisa;
    this.colorCamisa = colorCamisa;
    this.nombreImagencamisa = nombreImagencamisa;
    this.base64ImagenCamisa = base64ImagenCamisa;
  }
}
