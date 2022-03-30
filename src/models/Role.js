import pkg from 'mongoose';
const {Schema, model} = pkg;

export const ROLES = ['user','admin','moderator']

const roleSchema = new Schema(
  {
    name: {type: String,required: true, unique:true},
  },
  {
    versionKey: false,
  }
);

export default model('Role', roleSchema);