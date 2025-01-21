import { Request, Response } from 'express';
import { ProductRepository } from '../infrastructure/dynamodb';
import { CreateProductInput, UpdateProductInput } from '../models/product.model';

export class ProductController {
  private readonly productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
  }

  async createProduct(req: Request, res: Response) {
    try {
      const input: CreateProductInput = req.body;
      const product = await this.productRepository.createProduct(input);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create product' });
    }
  }

  async getProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await this.productRepository.getProduct(id);
      
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: 'Failed to get product' });
    }
  }

  async updateProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const input: UpdateProductInput = req.body;
      const product = await this.productRepository.updateProduct(id, input);
      
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update product' });
    }
  }

  async deleteProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await this.productRepository.deleteProduct(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete product' });
    }
  }

  async listProducts(req: Request, res: Response) {
    try {
      const products = await this.productRepository.listProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Failed to list products' });
    }
  }
}
