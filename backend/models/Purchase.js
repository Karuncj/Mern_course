import mongoose, { Schema } from 'mongoose';

export const PurchaseSchema = new Schema({
  customer: Schema.Types.ObjectId,
  courses: [{
    _id: Schema.Types.ObjectId,
    name: String,
    price: Number,
    images: [String],
  }],
});

export const PurchaseModel = mongoose.model('Purchase', PurchaseSchema);
