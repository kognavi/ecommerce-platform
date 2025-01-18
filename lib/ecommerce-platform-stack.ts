import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as ecs_patterns from 'aws-cdk-lib/aws-ecs-patterns';

export class EcommercePlatformStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // VPCの作成
    const vpc = new ec2.Vpc(this, 'EcommerceVpc', {
      maxAzs: 2
    });

    // ECSクラスターの作成
    const cluster = new ecs.Cluster(this, 'EcommerceCluster', {
      vpc: vpc
    });

    // Product Serviceのタスク定義
    const productService = new ecs_patterns.ApplicationLoadBalancedFargateService(this, 'ProductService', {
      cluster: cluster,
      memoryLimitMiB: 512,
      cpu: 256,
      taskImageOptions: {
        image: ecs.ContainerImage.fromAsset('services/product-service'),
        containerPort: 3000
      }
    });
  }
}
