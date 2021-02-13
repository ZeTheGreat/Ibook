(async function () {
  import Sequelize from "sequelize";
  import mysql from "mysql2/promise";
  import databaseConfig from "../config/database";
  import Book from "../models/Book";
  import User from "../models/User";
  import ErroLog from "../models/ErroLog";
  const models = [Book, User, ErroLog];

  const connection = new Sequelize(databaseConfig);

  await connection.query(
    `CREATE DATABASE IF NOT EXISTS \`${process.env.DATABASE}\`;`
  );

  models.forEach((model) => model.init(connection));
})();
