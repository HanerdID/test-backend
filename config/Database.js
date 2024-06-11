import { Sequelize } from "sequelize";

const db = new Sequelize("crud_db", "root", "", {
  host: "localhost",
  port: 3300,
  dialect: "mysql",
});

export default db;
