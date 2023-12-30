const database = require("../db/connect");
const QuestionAnswerDataSchema = new database.Schema(
  {
    username: {
      type: String,
      lowercase: true,
      trim: true,
    },
    userid: {
      type: Number,
      trim: true,
    },
    questionid: {
      type: Number,
      trim: true,
    },
    questionname: {
      type: String,
      lowercase: true,
      trim: true,
    },
    answer: {
      type: String,
      lowercase: true,
      trim: true,
    },
    submittime: {
      type: Array,
      trim: true,
    },
  },
  { timestamps: true }
);

const QuestionAnswerDataModel = new database.model(
  "Question-Answer",
  QuestionAnswerDataSchema
);
module.exports = QuestionAnswerDataModel;
