import mongoose from 'mongoose';

export interface IServer {
    unique_id: string;
    port: number;
    host: string;
    max_players: number;
    players: number;
    name: string;
    version: string;
    compatability_ver: number;
    secure: boolean;
    last_online?: Date;
}

const ServerSchema = new mongoose.Schema<IServer>({
    unique_id: { type: String, unique: true }, // this is either HWID or GSLT
    port: Number,
    host: String,
    max_players: Number,
    players: Number,
    name: String,
    version: String,
    compatability_ver: Number,
    secure: Boolean,
    last_online: Date
});

const Server = mongoose.models.Server || mongoose.model<IServer>("Server", ServerSchema);
export default Server;