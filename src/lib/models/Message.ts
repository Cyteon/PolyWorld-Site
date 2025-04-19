import mongoose from 'mongoose';

export interface IMessage {
    id: string;
    server_id: string;
    author: string;
    content: string;
    createdAt: Date;
}

const MessageSchema = new mongoose.Schema<IMessage>({
    id: { type: String, required: true, unique: true },
    server_id: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: "30d" } // 30 days to poof
});

export default mongoose.models.Message || mongoose.model<IMessage>("Message", MessageSchema);