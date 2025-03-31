const fs = require('fs')
const path = require('path')
const EventEmitter = require('events')


module.exports = class Creator extends EventEmitter {

    constructor (name, targetDir, promptModules = []) {
        super()
        this.name = name
        this.targetDir = process.env.CYDON_CLI_TARGETDIR = targetDir
        console.log('Creator is working on'+targetDir)
    }

    create (cliOptions = [], preset = null) {
        const dirpath = path.join(this.targetDir, this.name)
        fs.mkdirSync(dirpath)
    }
}