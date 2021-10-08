import Villager from '../models/Villager.js';
import { fetchApi } from '../utils/villagers.js';

export default class VillagerServ {
  static async saveSomeVillagers({ id, resource }) {
    const villagersList = await fetchApi(id, resource);
    console.log('village', villagersList);
    const village = await Villager.insert(villagersList);
    return village;
  }

  static async getSomeVillagers() {
    const village = await Villager.select();
    return village;
  }

  static async getAVillager() {
    const village = await Villager.selectId();
    return village;
  }

  static async updateAVillager(villager, personality, saying, hobby) {
    const village = await Villager.patchId(villager, personality, saying, hobby);
    return village;
  }

  static async deleteAVillager(id) {
    const village = await Villager.deleteId(id);
    return village;
  }
}
