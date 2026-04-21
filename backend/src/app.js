import express from "express";
import cors from "cors";
import palylistRoutes from "./routes/playlist.routes.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use("/api/playlists", palylistRoutes);
app.use(errorHandler);

export default app;