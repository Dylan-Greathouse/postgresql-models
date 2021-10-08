import Sea from '../models/Sea.js';
import { fetchSeaApi } from '../utils/seas.js';


export default class SeaServ {
  static async saveSomeSeas({ resource, name }) {
    const seasList = await fetchSeaApi(resource, name);
    const sea = await Sea.insert(seasList);
    return sea;
  }

  static async getSomeSeas() {
    const sea = await Sea.select();
    return sea;
  }

  static async getASea() {
    const sea = await Sea.selectId();
    return sea;
  }

  static async updateASea(sea, price, museum) {
    const seas = await Sea.patchId(sea, price, museum);
    return seas;
  }

  static async deleteASea(id) {
    const sea = await Sea.deleteId(id);
    return sea;
  }

}
