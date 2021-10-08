import Bug from '../models/Bug.js';
import { fetchBugApi } from '../utils/bugs.js';
export class BugServ {
  static async saveSomeBugs({ resource, name }) {
    const bugsList = await fetchBugApi(resource, name);
    const bug = await Bug.insert(bugsList);
    return bug;
  }

  static async getSomeBugs() {
    const bug = await Bug.select();
    return bug;
  }

  static async getABug() {
    const bug = await Bug.selectId();
    return bug;
  }

  static async updateABug(bug, price, museum) {
    const bugss = await Bug.patchId(bug, price, museum);
    return bugss;
  }

  static async deleteABug(id) {
    const bug = await Bug.deleteId(id);
    return bug;
  }

}
