import mongoose from "mongoose";
import { MONGODB_URI } from "$env/static/private"

mongoose.connect(MONGODB_URI).then(() => { console.log("Connected to MongoDB") }).catch(console.error);