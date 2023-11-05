import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const reviewSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
      required: true,
    },
    game_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Game",
      required: true,
    },
  },
  { collection: "reviews", timestamps: true },
);
reviewSchema.plugin(uniqueValidator, {
  message: "This {PATH} is exist",
});

export default mongoose.model("Review", reviewSchema);
