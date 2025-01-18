import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import productRoutes from './routes/product.routes';

dotenv.config(); // 環境変数を読み込む

const app = express();
const port = 3000;

// JSONミドルウェアを使用
app.use(express.json());

// ヘルスチェックエンドポイント
app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

// 製品のルートを追加
app.use('/api/products', productRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

