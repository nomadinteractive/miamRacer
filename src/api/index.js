import axios, { AxiosPromise } from "axios";

export default class API {
  static shared = new API();

  registerUser(uuid: string) {
    console.log(uuid);

    return axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => {
        return response.data;
      });
  }
}
