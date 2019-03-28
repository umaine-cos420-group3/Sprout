import { Base64 } from "js-base64";

export var UserCredentials = [
  {
    username: "Admin",
    email: "sproutadmin@gmail.com",
    password: Base64.encode("Admin")
  }
];

export default {
  UserCredentials
};
