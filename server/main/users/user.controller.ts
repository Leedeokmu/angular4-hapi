import * as Hapi from "hapi";
import * as Boom from "boom";
import * as Jwt from "jsonwebtoken";
import { IUser } from "./user";
import { IDatabase } from "../../database";
import { IServerConfiguration } from "../../configuration";


export default class UserController{

  private databse: IDatabase;

}
