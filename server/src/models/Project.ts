const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a project title"],
    },
    subtitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: [true, "Please provide a description"],
    },
    location: {
      type: String,
      required: [true, "Please provide a location"],
    },
    category: {
      type: String,
      enum: ["residential", "commercial", "hospitality", "infrastructure"],
      required: true,
    },
    features: [String],
    imagePath: String,
    imageUrl: String,
    status: {
      type: String,
      enum: ["ongoing", "completed", "planned"],
      default: "ongoing",
    },
    startDate: {
      type: Date,
      required: true,
    },
    expectedEndDate: Date,
    completionDate: Date,
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = { Project };
