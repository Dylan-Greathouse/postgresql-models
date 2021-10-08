import Fossil from '../models/Fossil.js';
import { fetchFossilApi } from '../utils/fossils.js';

export default class FossilServ {

  static async saveSomeFossils({ resource, name }) {
    const fossilsList = await fetchFossilApi(resource, name);
    const fossil = await Fossil.insert(fossilsList);
    return fossil;
  }


  static async getSomeFossils() {
    const fossil = await Fossil.select();
    return fossil;
  }

  static async getAFossil() {
    const fossil = await Fossil.selectId();
    return fossil;
  }

  static async updateAFossil(fossil, price, museum) {
    const foss = await Fossil.patchId(fossil, price, museum);
    return foss;
  }

  static async deleteAFossil(id) {
    const fossil = await Fossil.deleteId(id);
    return fossil;
  }



}
