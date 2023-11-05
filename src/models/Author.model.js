import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const authorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { collection: "authors", timestamps: true },
);
authorSchema.plugin(uniqueValidator, {
  message: "This {PATH} is exist",
});
export default mongoose.model("Author", authorSchema);
