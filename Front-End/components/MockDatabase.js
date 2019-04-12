import { Base64 } from "js-base64";

export var MockDatabase = [
  {
    username: "Admin", 
    email: "sproutadmin@gmail.com",
    password: Base64.encode("Admin"),
    firstName: "Sprout",
    lastName: "Inc."
  }
];

export default {
  MockDatabase
};
