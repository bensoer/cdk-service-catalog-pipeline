import { Bucket } from "aws-cdk-lib/aws-s3";
import { ProductStack } from "aws-cdk-lib/aws-servicecatalog";
import { Construct } from "constructs";


export class S3BucketProduct extends ProductStack {

    constructor(scope: Construct, id: string){
        super(scope, id)

        new Bucket(this, 'Bucket', {
            bucketName: 'cdk-sc-pipeline-test-bucket'
        })
    }
}