import { Stage, StageProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { ServiceCatalogPortfolioStack } from "../sc-portfolios/service-catalog-portfolio-stack";


export class DeployStacksStage extends Stage {


    constructor(scope: Construct, id: string, props?:StageProps){
        super(scope, id, props)

        // add all stacks that are part of pipeline here


        new ServiceCatalogPortfolioStack(this, 'ServiceCatalogPortfolio')


    }
}