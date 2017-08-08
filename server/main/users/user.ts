import * as Mongoose from "mongoose";
import * as Bcrypt from "bcryptjs";

export interface IUser extends Mongoose.Document{
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  validatePassword(requestPassword): boolean;
}

export const UserScheme = new Mongoose.Schema(
  {
    email: {type: String, unique: true, required: true},
    name: {type: String, required: true},
    password: {type: String, required: true}
  },
  {
    timestamps: true
  }
);

function hashPassword(password: string): string {
  if (!password) {
    return null;
  }
  return  Bcrypt.hashSync(password, Bcrypt.genSaltSync(8));
}

UserScheme.methods.validatePassword = (requestPassword) => {
  Bcrypt.compareSync(requestPassword, this.password);
};
/*
* middleware - interceptor
* */
UserScheme.pre("save", (next) => {
  const user = this;

  if (!user.isModified("password")) {
    return next();
  }
  user.password = hashPassword(user.password);
  return next();
});

UserScheme.pre("findOneAndUpdate", () => {
  const password = hashPassword(this.getUpdate().$set.password);

  if ( !password ) {
    return;
  }
  this.findOneAndUpdate({}, {password: password});
});
export const UserModel = Mongoose.model<IUser>("User", UserScheme);
