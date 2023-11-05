"use strict";
import mongoose from "mongoose";
export const dbConnection = function () {
  mongoose.connect(process.env.MONGODB).then(() => {
    console.log("* DB Connected * ");
  });
};
