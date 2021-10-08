import pool from '../utils/pool.js';

export default class Fish {
    id;
    fish;
    price;
    museum;
    constructor(row) {
      this.id = row.id;
      this.fish = row.fish;
      this.price = row.price;
      this.museum = row.museum;
    }
  
    static async insert({ fish, price, museum }) {
      const { rows } = await pool.query(
        'INSERT INTO fishes (fish, price, museum) VALUES ($1, $2, $3) RETURNING *',
        [fish, price, museum]
      );
      return new Fish(rows[0]);
    }
  
    static async select() {
      const { rows } = await pool.query('SELECT * FROM fishes');
      return rows.map((row) => new Fish(row));
    }
  
    static async selectId() {
      const { rows } = await pool.query('SELECT * FROM fishes');
      return new Fish(rows[0]);
    }
  
    static async patchId({ fish, price, museum }) {
      const { rows } = await pool.query(
        `UPDATE fishes
            SET
            fish=$1,
            price=$2,
            museum=$3
             RETURNING *`,
        [fish, price, museum]
      );
      return new Fish(rows[0]);
    }
  
    static async deleteId(id) {
      const { rows } = await pool.query(
        `DELETE FROM fishes
              WHERE id = $1`,
        [id]
      );
      return rows[0];
    }
  }
  