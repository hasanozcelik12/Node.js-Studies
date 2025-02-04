const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    permission: { type: String, required: true },
    role_id: { type: mongoose.SchemaTypes.ObjectId, required: true },
    created_by: { type: mongoose.SchemaTypes.ObjectId, required: true },
  },
  {
    versionKey: false,
    timetamps: {
      createdAt: "created_at",
      updatedAt: "uodated_at",
    },
  }
);

class RolePrivileges extends mongoose.Model {}
schema.loadClass(RolePrivileges);
module.exports = mongoose.model("role_privileges", schema);
