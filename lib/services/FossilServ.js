import Fossil from '../models/Fossil.js';
import { fetchFossilApi } from '../utils/fossils.js';

export class FossilServ {

  static async saveSomeFossils({ resource, name }) {
    const fossilsList = await fetchFossilApi(resource, name);
    const fossil = await Fossil.insert(fossilsList);
    return fossil;
  }
}
