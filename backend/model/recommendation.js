const mongoose = require("mongoose");

const recommendationSchema = new mongoose.Schema({
  userId: String,
  productId: String,
  rating: Number,
});

const Recommendation = mongoose.model("Recommendation", recommendationSchema);

module.exports = Recommendation;