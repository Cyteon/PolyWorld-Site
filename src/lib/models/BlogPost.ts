import mongoose from 'mongoose';

export interface IBlogPost {
    createdAt: Date;
    title: string;
    content: string;
    description: string;
    slug: string;
    creator: string;
    thumbnail: string;
}

const BlogPostSchema = new mongoose.Schema<IBlogPost>({
    createdAt: { type: Date, default: Date.now },
    title: { type: String, required: true },
    content: { type: String, required: true },
    description: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    creator: { type: String, required: true },
    thumbnail: { type: String, required: true }
});

export default mongoose.models.BlogPost || mongoose.model<IBlogPost>("BlogPost", BlogPostSchema);