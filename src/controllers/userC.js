import User from "../models/User";
import errorHandler from "./helper/helperError";

class UserController {
  async create(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (er) {
      const [status, errors] = errorHandler(er);
      return res.status(status).json({ errors: errors });
    }
  }

  async readAll(req, res) {
    try {
      const users = await User.findAll();
      return res.json({ resp: users });
    } catch (er) {
      const [status, errors] = errorHandler(er);
      return res.status(status).json({ errors: errors });
    }
  }

  async read(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      return res.json({ resp: user });
    } catch (er) {
      const [status, errors] = errorHandler(er);
      return res.status(status).json({ errors: errors });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ["Missing ID"] });
      const user = await User.findByPk(req.params.id);
      if (!user) return res.status(400).json({ errors: ["Missing user"] });

      await user.update(req.body);
      return res.json({ resp: user });
    } catch (er) {
      const [status, errors] = errorHandler(er);
      return res.status(status).json({ errors: errors });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ["Missing ID"] });
      const user = await User.findByPk(req.params.id);
      if (!user) return res.status(400).json({ errors: ["Missing user"] });

      await user.destroy();
      return res.json({ resp: "User deleted" });
    } catch (er) {
      const [status, errors] = errorHandler(er);
      return res.status(status).json({ errors: errors });
    }
  }
}

export default new UserController();
