import pkg from 'mongoose';
const {Schema, model} = pkg;

const playSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required:true,
    },
    imgUrl: {
      type: String,
      unique: true,
      required:true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model('Play', playSchema);