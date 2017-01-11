import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postActionSchema = new Schema({
  profileImage :{type:String,}
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('User', postActionSchema);

