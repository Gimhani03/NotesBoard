import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/database.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

connectDB();

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
}));

app.use('/', notesRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

