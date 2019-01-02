import axios, { AxiosPromise } from "axios";

export default class API {
  static shared = new API();

  registerUser(uuid: string) {
    console.log(uuid);
    var manager = axios.create({
      baseURL: "http://0ef925b1.ngrok.io/api/"
    });

    manager.defaults.headers.common["token"] = uuid;
    return manager.post("/register").then(response => {
      return response.data;
    });
  }
}
