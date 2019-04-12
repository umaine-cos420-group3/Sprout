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
    iceBreakerIndex: 0,
    get iceBreaker() {
      return MockedQuestionDataBase[this.iceBreakerIndex];
    },
    answerSelected: 0,
    bio: ""
  }
];

export default {
  Users
};
