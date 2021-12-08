const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const freechildcommentSchema = require('./Freechildcomment');

const freecommentSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    freeboard_id: {
      type: Schema.Types.ObjectId,
      ref: 'Freeboard',
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
    freechildcomments: [
      {
        type: freechildcommentSchema,
        default: [],
      },
    ],
  },
  {timestamps: true},
);

module.exports = freecommentSchema;
