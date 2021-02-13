import Sequelize, { Model } from "sequelize";
import bcryptjs from "bcryptjs";

export default class User extends Model {
  static init(sequelize) {
    const nameRegex = /^[A-z\sáéíóúàèìòùâêîôûãẽĩõũ]{2,32}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\]\)])[A-z\s@#$%&*_\-+/áéíóúàèìòùâêîôûãẽĩõũ0-9]{6,32}$/;
    const genreRegex = /^[mMfFiI]{1}$/;
    super.init(
      {
        first_name: {
          type: Sequelize.STRING(32),
          defaultValue: "",
          validate: {
            is: { args: nameRegex, msg: "user_error_first_name" },
          },
        }, // *
        last_name: {
          type: Sequelize.STRING(32),
          defaultValue: "",
          validate: {
            is: { args: nameRegex, msg: "user_error_last_name" },
          },
        }, // *
        email: {
          type: Sequelize.STRING(256),
          defaultValue: "",
          unique: {
            msg: "user_error_email_unique",
          },
          validate: {
            isEmail: {
              msg: "user_error_email",
            },
          },
        }, // *
        password_hash: {
          type: Sequelize.STRING(32),
        },
        genre: {
          type: Sequelize.ENUM("m", "M", "f", "F", "i", "I"),
          defaultValue: "I",
          validate: {
            is: { args: genreRegex, msg: "user_error_genre" },
          },
        }, // *
        birth_day: {
          type: Sequelize.DATE,
          defaultValue: null,
          validate: {
            isDate: {
              msg: "user_error_birth_day",
            },
          },
        }, // *
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: "",
          validate: {
            is: { args: passwordRegex, msg: "user_error_password" },
          },
        }, // *
      },
      { sequelize }
    );
    this.addHook("beforeSave", async (user) => {
      if (user.password)
        user.password_hash = await bcryptjs.hash(user.password, 8);
    });
    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}
