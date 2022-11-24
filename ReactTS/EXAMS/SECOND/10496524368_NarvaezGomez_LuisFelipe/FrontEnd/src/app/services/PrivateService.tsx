import ApiBack from "../utilities/domains/ApiBack";

class PrivateService {
  // Servicio con bearer para hacer peticiones GET
  public static async petitionGET(serviceURL: string) {
    const bearer = "Bearer " + String(localStorage.getItem("tokenUSTA"));

    const sendData = {
      method: "GET",
      headers: {"Content-Type": "application/json; charset=UTF-8", authorization: bearer,},
    };

    const url = ApiBack.URL + serviceURL;
    const myResponse = fetch(url, sendData)
      .then((myResponse) => myResponse.json())
      .then((data) => {
        return data;
      })
      .catch((myError) => {
        return myError;
      });
    return myResponse;
  }

  // Servicio con bearer para hacer peticiones POST
  public static async petitionPOST(serviceURL: string, miJSON: any) {
    const bearer = "Bearer " + String(localStorage.getItem("tokenUSTA"));

    const sendData = {
      method: "POST",
      body: JSON.stringify(miJSON),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        authorization: bearer,
      },
    };

    const url = ApiBack.URL + serviceURL;
    const myResponse = fetch(url, sendData)
      .then((myResponse) => myResponse.json())
      .then((data) => {
        return data;
      })
      .catch((myError) => {
        return myError;
      });
    return myResponse;
  }

  // Servicio con bearer para hacer peticiones DELETE
  public static async petitionDELETE(serviceURL: string) {
    const bearer = "Bearer " + String(localStorage.getItem("tokenUSTA"));

    const sendData = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        authorization: bearer,
      },
    };

    const url = ApiBack.URL + serviceURL;
    const myResponse = fetch(url, sendData)
      .then((myResponse) => myResponse.json())
      .then((data) => {
        return data;
      })
      .catch((myError) => {
        return myError;
      });
    return myResponse;
  }

  // Servicio con bearer para hacer peticiones PUT
  public static async petitionPUT(serviceURL: string, miJSON: any) {
    const bearer = "Bearer " + String(localStorage.getItem("tokenUSTA"));

    const sendData = {
      method: "PUT",
      body: JSON.stringify(miJSON),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        authorization: bearer,
      },
    };

    const url = ApiBack.URL + serviceURL;
    const myResponse = fetch(url, sendData)
      .then((myResponse) => myResponse.json())
      .then((data) => {
        return data;
      })
      .catch((myError) => {
        return myError;
      });
    return myResponse;
  }
}

export default PrivateService;
