import express, { Request, Response } from 'express';
import { DynamoDB } from 'aws-sdk';

const router = express.Router();
const dynamoDB = new DynamoDB.DocumentClient();
const TABLE_NAME = 'Products';

// 全製品を取得
router.get('/', async (_req: Request, res: Response) => {
  try {
    const params = {
      TableName: TABLE_NAME
    };
    const result = await dynamoDB.scan(params).promise();
    res.json(result.Items);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Could not fetch products' });
  }
});

// 製品を作成
router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, price } = req.body;
    const params = {
      TableName: TABLE_NAME,
      Item: {
        id: Date.now().toString(), // 簡易的なID生成
        name,
        price
      }
    };
    await dynamoDB.put(params).promise();
    res.status(201).json(params.Item);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Could not create product' });
  }
});

// IDで製品を取得
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id: req.params.id
      }
    };
    const result = await dynamoDB.get(params).promise();
    if (result.Item) {
      res.json(result.Item);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Could not fetch product' });
  }
});

// 製品を更新
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { name, price } = req.body;
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id: req.params.id
      },
      UpdateExpression: 'set #name = :name, price = :price',
      ExpressionAttributeNames: {
        '#name': 'name'
      },
      ExpressionAttributeValues: {
        ':name': name,
        ':price': price
      },
      ReturnValues: 'ALL_NEW'
    };
    const result = await dynamoDB.update(params).promise();
    res.json(result.Attributes);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Could not update product' });
  }
});

// 製品を削除
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id: req.params.id
      }
    };
    await dynamoDB.delete(params).promise();
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Could not delete product' });
  }
});

export default router;
