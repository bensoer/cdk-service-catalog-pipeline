import { ConfigurationDefaults } from "../lib/conf/configuration-defaults"
import { Settings } from "../lib/conf/settings"



export class Configuration extends ConfigurationDefaults {

    public getSettings(): Settings {
        const defaults = super.getSettings()

        defaults.codeCommitRepositoryName = ""

        return defaults
    }

}