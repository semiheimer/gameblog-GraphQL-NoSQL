import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const gameSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    platform: {
      type: [String],
      enum: ["PS5", "Xbox", "PC", "Switch"],
      required: true,
    },
  },
  { collection: "games", timestamps: true },
);
gameSchema.plugin(uniqueValidator, {
  message: "This {PATH} is exist",
});

export default mongoose.model("Game", gameSchema);
