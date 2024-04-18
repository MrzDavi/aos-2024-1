import session from "./session";
import user from "./user";
import message from "./message";


const sequelize = new Sequelize(process.env.DATABASE_URL);

const models = {
  User: getUserModel(sequelize, Sequelize),
  Message: getMessageModel(sequelize, Sequelize),
};

Object.keys(models).forEach((key) => {
  if ("associate" in models[key]) {
    models[key].associate(models);
    // add
  }
});

export const routes = {
  session,
  user,
  message,
};
