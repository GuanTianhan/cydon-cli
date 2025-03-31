const fs = require('fs')
const path = require('path')
const EventEmitter = require('events')
const writeFileTree = require('./utils/writeFileTree')


module.exports = class Creator extends EventEmitter {

    constructor (name, targetDir, promptModules = []) {
        super()
        this.name = name
        this.targetDir = process.env.CYDON_CLI_TARGETDIR = targetDir
        console.log('Creator is working on'+targetDir)
    }

    create (cliOptions = [], preset = null) {
        const dirpath = path.join(this.targetDir, this.name)
        

        const pkg = {
            name:this.name,
            version: '0.1.0',
            private: true,
            devDependencies: {},
        }
        writeFileTree(dirpath, [{
            name:'package.json',
            content:JSON.stringify(pkg,null,2)
        }])
    }
}