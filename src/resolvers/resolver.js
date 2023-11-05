import AuthorModel from "../models/Author.model.js";
import ReviewModel from "../models/Review.model.js";
import GameModel from "../models/Game.model.js";
const resolvers = {
  Query: {
    async games() {
      return await GameModel.find({});
    },
    async game(_, args) {
      return await GameModel.findOne({ _id: args.id });
    },
    async authors() {
      return AuthorModel.find({});
    },
    async author(_, args) {
      return await AuthorModel.findOne({ _id: args.id });
    },
    async reviews() {
      return await ReviewModel.find({});
    },
    async review(_, args) {
      console.log(args);
      return await ReviewModel.findOne({ _id: args.id });
    },
  },
  Game: {
    async reviews(parent) {
      return await ReviewModel.find({ game_id: parent._id });
    },
  },
  Author: {
    async reviews(parent) {
      return await ReviewModel.find({ author_id: parent._id });
    },
  },
  Review: {
    async author(parent) {
      return await AuthorModel.findOne({ _id: parent.author_id });
    },
    async game(parent) {
      console.log(parent);
      return await GameModel.findOne({ _id: parent.game_id });
    },
  },
};

export default resolvers;
