import { Stage, StageProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { ServiceCatalogPortfolio } from "../sc-portfolios/service-catalog-portfolio";


export class DeployStacksStage extends Stage {


    constructor(scope: Construct, id: string, props?:StageProps){
        super(scope, id, props)

        // add all stacks that are part of pipeline here

        
        new ServiceCatalogPortfolio(this, 'ServiceCatalogPortfolio')


    }
}