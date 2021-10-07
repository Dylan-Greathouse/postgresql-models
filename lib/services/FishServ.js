import Fish from '../models/Fish';
import { fetchFishApi } from '../utils/fishes';
export class FishServ {
  static async saveSomeFishes({ resource, name }) {
    const fishesList = await fetchFishApi(resource, name);
    const fish = await Fish.insert(fishesList);
    return fish;
  }

  static async getSomeFishes() {
    const fish = await Fish.select();
    return fish;
  }

  static async getAFish() {
    const fish = await Fish.selectId();
    return fish;
  }

  static async updateAFish(fish, price, museum) {
    const fishes = await Fish.patchId(fish, price, museum);
    return fishes;
  }

  static async deleteAFish(id) {
    const fish = await Fish.deleteId(id);
    return fish;
  }
}
