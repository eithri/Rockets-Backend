import pkg from 'mongoose';
const {Schema, model} = pkg;

export const proofTypes = ['agility','speed','resistance','catching','strength','jump','power','other']

const proofTypeSchema = new Schema(
  {
    name: {type: String,required: true},
  },
  {
    versionKey: false,
  }
);

export default model('ProofType', proofTypeSchema);