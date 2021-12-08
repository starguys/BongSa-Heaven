const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crewchildcommentSchema = require('./Crewchildcomment');

const crewcommentSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    crewboard_id: {
      type: Schema.Types.ObjectId,
      ref: 'Crewboard',
      required: true,
    },
    comment: {
      type: String,
      maxLength: 1000,
    },
    isdeleted: {
      type: Boolean,
      default: false,
    },
    crewchildcomments: [
      {
        type: crewchildcommentSchema,
        default: [],
      },
    ],
  },
  {timestamps: true},
);

module.exports = crewcommentSchema;
