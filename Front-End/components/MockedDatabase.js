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
  },
  {
    question:
      "Would you rather be the richest person in the world, or the smartest?",
    answer1: "Richest",
    answer2: "Smartest"
  },
  {
    question: "Would you rather have a missing finger or two extra fingers?",
    answer1: "1 Missing",
    answer2: "2 Extra"
  },
  {
    question: "Would you rather have great friends or a great partner?",
    answer1: "Friends",
    answer2: "Partner"
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
    id: 0,
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
    liked: [],
    matched: [],
    bio: "Hi, I am the only admin of the Sprout app!"
  },
  {
    id: 1,
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
    liked: [],
    matched: [],
    bio:
      "Hello there! \nMy name is Susan, looking forward to know more about you!"
  },
  {
    id: 2,
    username: "FakeUser2",
    email: "fakeEmail2@fmail.com",
    password: Base64.encode("IAmFake"),
    firstName: "Helen",
    lastName: "Sparky",
    gender: "F",
    genderPreference: ["M"],
    iceBreakerIndex: Math.floor(Math.random() * MockedQuestionDataBase.length),
    get iceBreaker() {
      return MockedQuestionDataBase[this.iceBreakerIndex];
    },
    answerSelected: 1,
    liked: [],
    matched: [],
    bio: "I like my men like I like my coffee, ground up and in the freezer ;)"
  },
  {
    id: 3,
    username: "FakeUser3",
    email: "fakeEmail3@fmail.com",
    password: Base64.encode("IAmFake"),
    firstName: "Lauren",
    lastName: "Fako",
    gender: "F",
    genderPreference: ["M", "F"],
    iceBreakerIndex: Math.floor(Math.random() * MockedQuestionDataBase.length),
    get iceBreaker() {
      return MockedQuestionDataBase[this.iceBreakerIndex];
    },
    answerSelected: 2,
    liked: [],
    matched: [],
    bio: "All men are pigs and I’m in the mood for bacon."
  },
  {
    id: 4,
    username: "FakeUser4",
    email: "fakeEmail4@fmail.com",
    password: Base64.encode("IAmFake"),
    firstName: "Rob",
    lastName: "Bott",
    gender: "M",
    genderPreference: ["M", "F"],
    iceBreakerIndex: Math.floor(Math.random() * MockedQuestionDataBase.length),
    get iceBreaker() {
      return MockedQuestionDataBase[this.iceBreakerIndex];
    },
    answerSelected: 2,
    liked: [],
    matched: [],
    bio: "I take hot showers because I like practicing burning in hell."
  },
  {
    id: 5,
    username: "FakeUser5",
    email: "fakeEmail5@fmail.com",
    password: Base64.encode("IAmFake"),
    firstName: "Andy",
    lastName: "Roid",
    gender: "M",
    genderPreference: ["F"],
    iceBreakerIndex: Math.floor(Math.random() * MockedQuestionDataBase.length),
    get iceBreaker() {
      return MockedQuestionDataBase[this.iceBreakerIndex];
    },
    answerSelected: 1,
    liked: [],
    matched: [],
    bio: "Roses are red, bacon is red. Poems are hard. Bacon."
  }
];

export default {
  Users
};
