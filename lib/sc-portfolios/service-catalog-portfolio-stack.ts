import { Stack, StackProps } from "aws-cdk-lib";
import * as sc from "aws-cdk-lib/aws-servicecatalog";
import { Construct } from "constructs";
import { S3BucketProduct } from "../sc-products/s3-bucket-product";


export class ServiceCatalogPortfolioStack extends Stack {


    constructor(scope: Construct, id:string, props?: StackProps){
        super(scope, id, props)

        const portfolio = new sc.Portfolio(this, 'Portfolio', {
            displayName: 'Project Terris Products',
            providerName: 'Project Terris',
            description: 'Project Terris Portfolio Products'
        })

        const s3BucketProductHistory = new sc.ProductStackHistory(this, 'S3BucketCloudFormationProductStackHistory', {
            productStack: new S3BucketProduct(this, 'S3BucketProduct'),
            currentVersionName: 'v1',
            currentVersionLocked: true
        })

        const s3BucketProduct = new sc.CloudFormationProduct(this, 'S3BucketCloudFormationProduct', {
            productName: 'S3 Bucket',
            owner: 'Project Terris',
            distributor: 'Project Terris',
            productVersions: [
                s3BucketProductHistory.currentVersion()
            ]
        })

        portfolio.addProduct(s3BucketProduct)

    }
}