module.exports = class Creator extends EventEmitter {

    constructor (name, targetDir, promptModules = []) {
        super()
        this.name = name
        this.targetDir = process.env.CYDON_CLI_TARGETDIR = targetDir
    }

    create (cliOptions = {}, preset = null) {

    }
}