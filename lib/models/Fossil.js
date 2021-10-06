import pool from '../utils/pool.js';

export default class Fossil {
  // id;
  // fossil;
  // price;
  // museum;
  constructor(row) {
    this.id = row.id;
    this.fossil = row.fossil;
    this.price = row.price;
    this.museum = row.museum;
  }
  static async insert({ fossil, price, museum }) {
    const { rows } = await pool.query(
      'INSERT INTO fossils (fossil, price, museum) VALUES ($1, $2, $3) RETURNING *',
      [fossil, price, museum]
    );
    return new Fossil(rows[0]);
  }
}
