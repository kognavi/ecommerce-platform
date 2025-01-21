import { DynamoDB } from 'aws-sdk';
import { Product, CreateProductInput, UpdateProductInput } from '../models/product.model';
import { v4 as uuidv4 } from 'uuid';

export class ProductRepository {
  private readonly tableName = 'Products';
  private readonly dynamoDB: DynamoDB.DocumentClient;

  constructor() {
    this.dynamoDB = new DynamoDB.DocumentClient({
      region: process.env.AWS_REGION || 'ap-northeast-1'
    });
  }

  async createProduct(input: CreateProductInput): Promise<Product> {
    const now = new Date().toISOString();
    const product: Product = {
      id: uuidv4(),
      ...input,
      createdAt: now,
      updatedAt: now
    };

    await this.dynamoDB.put({
      TableName: this.tableName,
      Item: product
    }).promise();

    return product;
  }

  async getProduct(id: string): Promise<Product | null> {
    const result = await this.dynamoDB.get({
      TableName: this.tableName,
      Key: { id }
    }).promise();

    return result.Item as Product || null;
  }

  async updateProduct(id: string, input: UpdateProductInput): Promise<Product | null> {
    const updateExpressions: string[] = [];
    const expressionAttributeNames: { [key: string]: string } = {};
    const expressionAttributeValues: { [key: string]: any } = {};

    Object.entries(input).forEach(([key, value]) => {
      if (value !== undefined) {
        updateExpressions.push(`#${key} = :${key}`);
        expressionAttributeNames[`#${key}`] = key;
        expressionAttributeValues[`:${key}`] = value;
      }
    });

    // Add updatedAt
    updateExpressions.push('#updatedAt = :updatedAt');
    expressionAttributeNames['#updatedAt'] = 'updatedAt';
    expressionAttributeValues[':updatedAt'] = new Date().toISOString();

    const result = await this.dynamoDB.update({
      TableName: this.tableName,
      Key: { id },
      UpdateExpression: `SET ${updateExpressions.join(', ')}`,
      ExpressionAttributeNames: expressionAttributeNames,
      ExpressionAttributeValues: expressionAttributeValues,
      ReturnValues: 'ALL_NEW'
    }).promise();

    return result.Attributes as Product || null;
  }

  async deleteProduct(id: string): Promise<void> {
    await this.dynamoDB.delete({
      TableName: this.tableName,
      Key: { id }
    }).promise();
  }

  async listProducts(): Promise<Product[]> {
    const result = await this.dynamoDB.scan({
      TableName: this.tableName
    }).promise();

    return (result.Items || []) as Product[];
  }
}
