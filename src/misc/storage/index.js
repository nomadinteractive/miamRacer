import SInfo from "react-native-sensitive-info";

export default class Storage {
  static Keys = {
    User: "User"
  };

  static async save(key: string, value: string): Promise {
    return SInfo.setItem(key, JSON.stringify({ value }), {});
  }

  static async get(key: string): Promise {
    return SInfo.getItem(key, {}).then(result => {
      return JSON.parse(result).value;
    });
  }
}
