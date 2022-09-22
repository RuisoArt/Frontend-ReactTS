export const ConvertImage64 =async (chargeImage: File) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        
        fileReader.readAsDataURL(chargeImage);
        fileReader.onload = () => {
            resolve(fileReader.result);
        };
        fileReader.onerror = (Error) => {
            reject(Error);
        };
    });

};