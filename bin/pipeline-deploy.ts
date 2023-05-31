import { App } from "aws-cdk-lib";
import { CodePipelineStack } from "../lib/deploy/code-pipeline-stack";

const app = new App();

new CodePipelineStack(app, 'CodePipelineStack', {
    stackName: 'cdk-sc-build-and-deploy',
    description: 'CodePipeline Stack For Build And Deploy Of Service Catalog Products',
    env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION }
})

app.synth();