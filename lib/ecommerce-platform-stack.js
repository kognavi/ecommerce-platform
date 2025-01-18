"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcommercePlatformStack = void 0;
const cdk = require("aws-cdk-lib");
const ec2 = require("aws-cdk-lib/aws-ec2");
const ecs = require("aws-cdk-lib/aws-ecs");
const ecs_patterns = require("aws-cdk-lib/aws-ecs-patterns");
class EcommercePlatformStack extends cdk.Stack {
    constructor(scope, id, props) {
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
exports.EcommercePlatformStack = EcommercePlatformStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNvbW1lcmNlLXBsYXRmb3JtLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZWNvbW1lcmNlLXBsYXRmb3JtLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFtQztBQUNuQywyQ0FBMkM7QUFDM0MsMkNBQTJDO0FBQzNDLDZEQUE2RDtBQUU3RCxNQUFhLHNCQUF1QixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQ25ELFlBQVksS0FBYyxFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUM1RCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixTQUFTO1FBQ1QsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUU7WUFDNUMsTUFBTSxFQUFFLENBQUM7U0FDVixDQUFDLENBQUM7UUFFSCxjQUFjO1FBQ2QsTUFBTSxPQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBRTtZQUN4RCxHQUFHLEVBQUUsR0FBRztTQUNULENBQUMsQ0FBQztRQUVILHdCQUF3QjtRQUN4QixNQUFNLGNBQWMsR0FBRyxJQUFJLFlBQVksQ0FBQyxxQ0FBcUMsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7WUFDcEcsT0FBTyxFQUFFLE9BQU87WUFDaEIsY0FBYyxFQUFFLEdBQUc7WUFDbkIsR0FBRyxFQUFFLEdBQUc7WUFDUixnQkFBZ0IsRUFBRTtnQkFDaEIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLDBCQUEwQixDQUFDO2dCQUMvRCxhQUFhLEVBQUUsSUFBSTthQUNwQjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQXpCRCx3REF5QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0ICogYXMgZWMyIGZyb20gJ2F3cy1jZGstbGliL2F3cy1lYzInO1xuaW1wb3J0ICogYXMgZWNzIGZyb20gJ2F3cy1jZGstbGliL2F3cy1lY3MnO1xuaW1wb3J0ICogYXMgZWNzX3BhdHRlcm5zIGZyb20gJ2F3cy1jZGstbGliL2F3cy1lY3MtcGF0dGVybnMnO1xuXG5leHBvcnQgY2xhc3MgRWNvbW1lcmNlUGxhdGZvcm1TdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBjZGsuQXBwLCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICAvLyBWUEPjga7kvZzmiJBcbiAgICBjb25zdCB2cGMgPSBuZXcgZWMyLlZwYyh0aGlzLCAnRWNvbW1lcmNlVnBjJywge1xuICAgICAgbWF4QXpzOiAyXG4gICAgfSk7XG5cbiAgICAvLyBFQ1Pjgq/jg6njgrnjgr/jg7zjga7kvZzmiJBcbiAgICBjb25zdCBjbHVzdGVyID0gbmV3IGVjcy5DbHVzdGVyKHRoaXMsICdFY29tbWVyY2VDbHVzdGVyJywge1xuICAgICAgdnBjOiB2cGNcbiAgICB9KTtcblxuICAgIC8vIFByb2R1Y3QgU2VydmljZeOBruOCv+OCueOCr+Wumue+qVxuICAgIGNvbnN0IHByb2R1Y3RTZXJ2aWNlID0gbmV3IGVjc19wYXR0ZXJucy5BcHBsaWNhdGlvbkxvYWRCYWxhbmNlZEZhcmdhdGVTZXJ2aWNlKHRoaXMsICdQcm9kdWN0U2VydmljZScsIHtcbiAgICAgIGNsdXN0ZXI6IGNsdXN0ZXIsXG4gICAgICBtZW1vcnlMaW1pdE1pQjogNTEyLFxuICAgICAgY3B1OiAyNTYsXG4gICAgICB0YXNrSW1hZ2VPcHRpb25zOiB7XG4gICAgICAgIGltYWdlOiBlY3MuQ29udGFpbmVySW1hZ2UuZnJvbUFzc2V0KCdzZXJ2aWNlcy9wcm9kdWN0LXNlcnZpY2UnKSxcbiAgICAgICAgY29udGFpbmVyUG9ydDogMzAwMFxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=