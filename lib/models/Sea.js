import pool from '../utils/pool.js';

export default class Sea {
  id;
  sea;
  price;
  museum;
  constructor(row) {
    this.id = row.id;
    this.sea = row.sea;
    this.price = row.price;
    this.museum = row.museum;
  }

  static async insert({ sea, price, museum }) {
    const { rows } = await pool.query(
      'INSERT INTO seas (sea, price, museum) VALUES ($1, $2, $3) RETURNING *',
      [sea, price, museum]
    );
    return new Sea(rows[0]);
  }

  static async select() {
    const { rows } = await pool.query('SELECT * FROM seas');
    return rows.map((row) => new Sea(row));
  }

  static async selectId() {
    const { rows } = await pool.query('SELECT * FROM seas');
    return new Sea(rows[0]);
  }

  static async patchId({ sea, price, museum }) {
    const { rows } = await pool.query(
      `UPDATE seas
          SET
          sea=$1,
          price=$2,
          museum=$3
           RETURNING *`,
      [sea, price, museum]
    );
    return new Sea(rows[0]);
  }

  static async deleteId(id) {
    const { rows } = await pool.query(
      `DELETE FROM seas
            WHERE id = $1`,
      [id]
    );
    return rows[0];
  }
}
