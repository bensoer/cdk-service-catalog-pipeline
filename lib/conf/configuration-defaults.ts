import { AbstractConfiguration } from "./abstract-configuration"
import { Settings } from "./settings"

export class ConfigurationDefaults extends AbstractConfiguration {

    private readonly settings:Settings = {
        codeCommitRepositoryBranch: "master",
        codeCommitRepositoryName: ""
    }

    public getSettings(): Settings {
        return this.settings
    }
}