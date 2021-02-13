import User from "../models/User";
import errorHandler from "./helper/helperError";
import jwt from "jsonwebtoken";

class AuthController {
  async login(req, res) {
    try {
      const { email = "", password = "" } = req.body;

      if (!email || !password)
        return res.status(401).json({ errors: ["invalid credentials"] });

      const user = await User.findOne({ where: { email } });

      if (!user) return res.status(401).json({ errors: ["User not found"] });

      if (!(await user.passwordIsValid(password)))
        return res.status(401).json({ erros: ["Invalid User"] });

      const { id } = user;
      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.json({ token });
    } catch (er) {
      const [status, errors] = errorHandler(er);
      return res.status(status).json({ errors: errors });
    }
  }
}

export default new AuthController();
