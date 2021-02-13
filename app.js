import dotenv from "dotenv";
import "./src/database";
import express, { urlencoded } from "express";
import userRoutes from "./src/routes/UserR";
import bookRoutes from "./src/routes/BookR";
import authRoutes from "./src/routes/AuthR";

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express(urlencoded({ extended: true })));
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/books", bookRoutes);
    this.app.use("/users", userRoutes);
    this.app.use("/auth", authRoutes);
  }
}

export default new App().app;
