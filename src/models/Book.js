import Sequelize, { Model } from "sequelize";

export default class Book extends Model {
  static init(sequelize) {
    const nameAuthorRegex = /^[A-z\sáéíóúàèìòùâêîôûãẽĩõũ]{0,64}$/;
    const genreRegex = /^[A-z@#$%&*_\-+\sáéíóúàèìòùâêîôûãẽĩõũ0-9]{0,32}$/;
    const nameRegex = /^[A-z@#$%&*_\-+\sáéíóúàèìòùâêîôûãẽĩõũ0-9]{1,64}$/;
    const descriptionRegex = /^[A-z@#$%&*_\-+\sáéíóúàèìòùâêîôûãẽĩõũ0-9]{0,}$/;
    const now = new Date().toISOString();
    super.init(
      {
        rating: {
          type: Sequelize.FLOAT,
          defaultValue: 0.0,
          validate: {
            isFloat: {
              msg: "book_error_rating",
            },
          },
        },
        qt_pages: {
          type: Sequelize.INTEGER,
          defaultValue: "",
          validate: {
            isInt: {
              msg: "book_error_qt_pages",
            },
          },
        }, // *
        qt_pages_r: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
          validate: {
            isInt: {
              msg: "book_error_qt_pages_r",
            },
          },
        },
        name: {
          type: Sequelize.STRING(64),
          defaultValue: "",
          validate: {
            is: {
              args: nameRegex,
              msg: "book_error_name",
            },
          },
        }, // *
        description: {
          type: Sequelize.STRING(8192),
          defaultValue: "",
          validate: {
            is: {
              args: descriptionRegex,
              msg: "book_error_description",
            },
          },
        },
        genre: {
          type: Sequelize.STRING(32),
          defaultValue: "",
          validate: {
            is: {
              args: genreRegex,
              msg: "book_error_genre",
            },
          },
        },
        name_author: {
          type: Sequelize.STRING(64),
          defaultValue: "",
          validate: {
            is: {
              args: nameAuthorRegex,
              msg: "book_error_name_author",
            },
          },
        },
        release_date: {
          type: Sequelize.DATE,
          defaultValue: null,
          validate: {
            isDate: {
              msg: "book_error_release_date",
            },
          },
        },
        start_date: {
          type: Sequelize.DATE,
          defaultValue: now,
          validate: {
            isDate: { msg: "book_error_start_date" },
          },
        },
        end_date: {
          type: Sequelize.DATE,
          defaultValue: null,
          validate: {
            isDate: {
              msg: "book_error_end_date",
            },
          },
        },
      },
      { sequelize }
    );

    return this;
  }
}
