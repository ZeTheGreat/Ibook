require("dotenv").config();

if (process.env.ENVIRONMENT === "test")
  var config = {
    storage: "./database.sqlite3",
    dialect: "sqlite",
    define: {
      underscored: true,
      underscoredAll: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  };
if (process.env.ENVIRONMENT === "prod")
  var config = {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSOWRD,
    database: process.env.DATABASE,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: process.env.DIALECT,
    define: {
      underscored: true,
      underscoredAll: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  };
if (process.env.ENVIRONMENT === "dev")
  var config = {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSOWRD,
    database: process.env.DATABASE,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: process.env.DIALECT,
    define: {
      underscored: true,
      underscoredAll: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  };

module.exports = config;
