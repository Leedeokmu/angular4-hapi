import * as Mongoose from "mongoose";
import { IDatabaseConfiguration } from "./configuration";
import { IUser, UserModel } from "./main/users/user";

export interface IDatabase {
  userModel: Mongoose.Model<IUser>;
}

export function init (config: IDatabaseConfiguration): IDatabase {
  (<any>Mongoose).Promise = Promise;
  Mongoose.connect(process.env.MONGO_URL || config.connectionString);

  let mongoDb = Mongoose.connection;

  mongoDb.on("error", () => {
    console.log(`Unabel to connct to databse: ${config.connectionString}`);
  });

  mongoDb.on("open", () => {
    console.log(`Connected to databse : ${config.connectionString}`);
  });

  return {
    userModel: UserModel
  };
}
