class UserLogin {
    public static async ConsumeService(urlAPI: string, myObject: any){
        const information = {
            method: 'POST',
            body: JSON.stringify(myObject),
            headers:{'Content-Type': 'application/json; charset=utf-8'}
        };
        const resultAPI = fetch(urlAPI, information)
        // obligatorio => se usa para retornar datos, a el entra la informacion
        .then((getInfo)=>getInfo.json( ))
        // perzonalizado => estas funciones son dadas por el programador para la informacion anterior
        .then((myInfo)=>{ return myInfo; })
        // obligatoria => recoje todos los errores
        .catch((myError)=>{ return myError;});
        
        return resultAPI;
    }
}
export default UserLogin;