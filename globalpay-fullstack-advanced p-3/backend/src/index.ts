import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import customerRoutes from './routes/customerRoutes';
import paymentRoutes from './routes/paymentRoutes';
import authMiddleware from './middleware/auth';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Swagger Docs
const swaggerDocument = YAML.load('./openapi.yaml');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/api/customers', authMiddleware, customerRoutes);
app.use('/api/payments', authMiddleware, paymentRoutes);

app.get('/', (req, res) => {
  res.send('GlobalPay API is running 🚀');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
