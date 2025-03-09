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
    last_online?: Date;
}

const ServerSchema = new mongoose.Schema<IServer>({
    unique_id: { type: String, unique: true },
    port: Number,
    host: String,
    max_players: Number,
    players: Number,
    name: String,
    version: String,
    compatability_ver: Number,
    last_online: Date
});

const Server = mongoose.models.Server || mongoose.model<IServer>("Server", ServerSchema);
export default Server;