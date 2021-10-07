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

  static async select() {
    const { rows } = await pool.query(
      'SELECT * FROM fossils'
    );
    return rows.map((row) => new Fossil(row));
  }

  static async selectId() {
    const { rows } = await pool.query(
      'SELECT * FROM fossils'
    );
    return new Fossil(rows[0]);
  }

  static async patchId({ fossil, price, museum }) {
    const { rows } = await pool.query(
      `UPDATE fossils
      SET
      fossil=$1,
      price=$2,
      museum=$3
       RETURNING *`,
      [fossil, price, museum]
    );
    return new Fossil(rows[0]);
  }

  static async deleteId(id) {
    const { rows } = await pool.query(
      `DELETE FROM fossils
        WHERE id = $1`,
      [id]
    );
    return rows[0];
  }
}
