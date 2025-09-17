import mongoose, { Document, Schema } from 'mongoose';

export interface ICharacter extends Document {
  name: string;
  date: string;
  description: string;
  img: string;
}

const CharacterSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    match: /^[a-zA-Z\s]+$/
  },
  date: {
    type: String,
    required: true,
    match: /^[a-zA-Z\s]+$/
  },
  description: {
    type: String,
    required: true,
    match: /^[a-zA-Z\s]+$/
  },
  img: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model<ICharacter>('Character', CharacterSchema);