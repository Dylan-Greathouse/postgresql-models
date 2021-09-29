import Villager from '../models/Villager.js';
import { fetchVillagers } from '../utils/villagers.js';

export class VillagerServ {
  static async saveSomeVillagers({ resource, id }) {
    const villagersList = await fetchVillagers(resource, id);
    const village = await Villager.insert(villagersList);
    console.log('village', village);
    return village;
  }

  static async getSomeVillagers() {
    const village = await Villager.select();
    return village;
  }
}
