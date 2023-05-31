import { Stack, StackProps } from "aws-cdk-lib";
import { Repository } from "aws-cdk-lib/aws-codecommit";
import { CodePipeline, CodePipelineSource, ShellStep } from "aws-cdk-lib/pipelines";
import { Construct } from "constructs";
import { ConfigurationSingletonFactory } from "../conf/configuration-singleton-factory";
import { DeployStacksStage } from "./deploy-stacks-stage";


export class CodePipelineStack extends Stack{

    constructor(scope: Construct, id: string, props?: StackProps){
        super(scope, id, props)

        const configurationSettings = ConfigurationSingletonFactory.getInstance().getSettings()

        const pipeline = new CodePipeline(this, 'CodePipeline', {
            pipelineName: 'cdk-sc-portfolio-build-and-deploy',
            synth: new ShellStep('Synth', {
                input: CodePipelineSource.codeCommit(
                    Repository.fromRepositoryName(this, 'RepositoryName',
                    configurationSettings.codeCommitRepositoryName),
                    configurationSettings.codeCommitRepositoryBranch
                ),
                installCommands: [
                    'npm install -g aws-cdk'
                ],
                commands: [
                    'npm ci',
                    'npm run build',
                    'npx cdk synth'
                ],
                env: {
                    CDK_DEBUG: "true"
                }
            }),
            
        })

        pipeline.addStage(new DeployStacksStage(this, 'DeployStacksStage', {
            // deploys the stage in the same account and region as the pipeline is located in
            env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION }
        }))
    }
}