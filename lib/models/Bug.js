import pool from '../utils/pool.js';

export default class Bug {
  id;
  bug;
  price;
  museum;
  constructor(row) {
    this.id = row.id;
    this.bug = row.bug;
    this.price = row.price;
    this.museum = row.museum;
  }

  static async insert({ bug, price, museum }) {
    const { rows } = await pool.query(
      'INSERT INTO bugs (bug, price, museum) VALUES ($1, $2, $3) RETURNING *',
      [bug, price, museum]
    );
    return new Bug(rows[0]);
  }

  static async select() {
    const { rows } = await pool.query('SELECT * FROM bugs');
    return rows.map((row) => new Bug(row));
  }

  static async selectId() {
    const { rows } = await pool.query('SELECT * FROM bugs');
    return new Bug(rows[0]);
  }

  static async patchId({ bug, price, museum }) {
    const { rows } = await pool.query(
      `UPDATE bugs
          SET
          bug=$1,
          price=$2,
          museum=$3
           RETURNING *`,
      [bug, price, museum]
    );
    return new Bug(rows[0]);
  }

  static async deleteId(id) {
    const { rows } = await pool.query(
      `DELETE FROM bugs
            WHERE id = $1`,
      [id]
    );
    return rows[0];
  }
}
