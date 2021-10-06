import pool from '../utils/pool.js';

// id 
// name_USen 
// personality 
// saying 
// hobby 

export default class Villager {
  constructor(row) {
    this.id = row.id;
    this.villager = row.villager;
    this.personality = row.personality;
    this.saying = row.saying;
    this.hobby = row.hobby;
  }

  static async insert({ villager, personality, saying, hobby }) {
    const { rows } = await pool.query(
      'INSERT INTO villagers (villager, personality, saying, hobby) VALUES ($1, $2, $3, $4) RETURNING *', [villager, personality, saying, hobby]
    );

    return new Villager(rows[0]);
  }

  static async select() {
    const { rows } = await pool.query(
      'SELECT * FROM villagers'
    );
    return rows.map((row) => new Villager(row));
  }

  static async selectId() {
    const { rows } = await pool.query(
      'SELECT * FROM villagers'
    );
    return new Villager(rows[0]);
  }

  static async patchId({ villager, personality, saying, hobby }) {
    const { rows } = await pool.query(
      `UPDATE villagers
      SET
      villager=$1,
      personality=$2,
      saying=$3,
      hobby=$4
       RETURNING *`,
      [villager, personality, saying, hobby]
    );
    return new Villager(rows[0]);
  }

  static async deleteId(id) {
    const { rows } = await pool.query(
      `DELETE FROM villagers
        WHERE id = $1`,
      [id]
    );
    return rows[0];
  }
}
