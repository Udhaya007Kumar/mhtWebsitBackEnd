import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mailRoutes from './routes/mailRoutes.js';

dotenv.config();

const app = express();

app.use(cors({
  origin: '*', // or specific domain
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

app.use('/api', mailRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
