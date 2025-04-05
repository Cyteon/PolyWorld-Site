import mongoose from 'mongoose';

export interface IEmail {
    email: string;
}

const EmailSchema = new mongoose.Schema<IEmail>({
    email: { type: String, required: true, unique: true }
});

export default mongoose.models.Email || mongoose.model<IEmail>("Email", EmailSchema);