const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 3,
    require: true,
  },

  author: {
    type: String,
    minlength: 3,
    require: true,
  },

  url: {
    type: String,
    minlength: 3,
    require: true,
  },

  likes: {
    type: Number,
    require: true,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
});

blogSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Blog", blogSchema);
