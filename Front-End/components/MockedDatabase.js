import { Base64 } from "js-base64";

const MockedQuestionDataBase = [
  {
    question: "Would you rather eat pizza or burger for the rest of your life?",
    answer1: "Pizza",
    answer2: "Burger"
  },
  {
    question:
      "Would you rather know when you are going to die or how you are going to die?",
    answer1: "When",
    answer2: "How"
  },
  {
    question:
      "If you were reborn in a new life, would you rather be alive in the past or future?",
    answer1: "Past",
    answer2: "Future"
  }
];

//this function is used when creating a user object, it assigns a random number to user object's
//iceBreakerIndex attribute, and set their iceBreaker attribute accordingly
export const getRandomQuestion = user => {
  user.iceBreakerIndex = Math.floor(
    Math.random() * MockedQuestionDataBase.length
  );
  user.iceBreaker = MockedQuestionDataBase[user.iceBreakerIndex];
};

export var Users = [
  {
    username: "Admin",
    email: "sproutadmin@gmail.com",
    password: Base64.encode("Admin"),
    firstName: "Sprout",
    lastName: "Inc.",
    gender: "",
    genderPreference: ["M", "F"],
    iceBreakerIndex: Math.floor(Math.random() * MockedQuestionDataBase.length),
    //this is how you can initialize an attribute using another attribute inside of the object
    get iceBreaker() {
      return MockedQuestionDataBase[this.iceBreakerIndex];
    },
    answerSelected: 0,
    bio: "Hi, I am the only admin of the Sprout app!"
  },
  {
    username: "FakeUser1",
    email: "fakeEmail1@fmail.com",
    password: Base64.encode("IAmFake"),
    firstName: "Susan",
    lastName: "Roboto",
    gender: "F",
    genderPreference: ["M"],
    iceBreakerIndex: Math.floor(Math.random() * MockedQuestionDataBase.length),
    get iceBreaker() {
      return MockedQuestionDataBase[this.iceBreakerIndex];
    },
    answerSelected: 1,
    bio:
      "Hello there! \nMy name is Susan, looking forward to know more about you!"
  }
];

export default {
  Users
};
