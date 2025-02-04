const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    is_active: { type: Boolean, default: true },
    created_by: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
    },
  },
  {
    versionKey: false,
    timetamps: {
      createdAt: "created_at",
      updatedAt: "uodated_at",
    },
  }
);

class Categories extends mongoose.Model {}
schema.loadClass(Roles);
module.exports = mongoose.model("categories", schema);
