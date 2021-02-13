import Book from "../models/Book";
import errorHandler from "./helper/helperError";

class BookController {
  x = 0;
  async create(req, res) {
    try {
      const book = await Book.create(req.body);
      return res.status(201).json({ resp: book });
    } catch (er) {
      const [status, errors] = errorHandler(er);
      return res.status(status).json({ errors: errors });
    }
  }

  async readAll(req, res) {
    try {
      const books = await Book.findAll();
      return res.json({ resp: books });
    } catch (er) {
      const [status, errors] = errorHandler(er);
      return res.status(status).json({ errors: errors });
    }
  }

  async read(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ["Missing ID"] });
      const book = await Book.findByPk(id);

      return res.json({ resp: book });
    } catch (er) {
      const [status, errors] = errorHandler(er);
      return res.status(status).json({ errors: errors });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ["Missing ID"] });
      const book = await Book.findByPk(req.params.id);
      if (!book) return res.status(400).json({ errors: ["Missing book"] });

      await book.update(req.body);
      return res.json({ resp: book });
    } catch (er) {
      const [status, errors] = errorHandler(er);
      return res.status(status).json({ errors: errors });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ["Missing ID"] });
      const book = await Book.findByPk(req.params.id);
      if (!book) return res.status(400).json({ errors: ["Missing book"] });

      await book.destroy();
      return res.json({ resp: "Book deleted" });
    } catch (er) {
      const [status, errors] = errorHandler(er);
      return res.status(status).json({ errors: errors });
    }
  }
}

export default new BookController();
