import Sequelize, { Model } from "sequelize";

export default class ErrorLog extends Model {
  isJSON = /{.*:({.*:.*})?(".*")?}/;
  static init(sequelize) {
    super.init(
      {
        log: {
          type: Sequelize.STRING(256),
          defaultValue: "",
          validate: {
            is: { args: isJSON, msg: "log_error_log" },
          },
        }, // *
        who: {
          type: Sequelize.STRING(32),
          defaultValue: "",
          validate: {
            is: { args: nameRegex, msg: "user_error_last_name" },
          },
        }, // *
      },
      { sequelize }
    );
    return this;
  }
}
