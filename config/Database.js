import { Sequelize } from "sequelize";

const db = new Sequelize("crud_db", "postgres", "Kronos86", {
  host: "localhost",
  dialect: "postgres",
});

export default db;
