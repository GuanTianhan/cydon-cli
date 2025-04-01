const fs = require('fs')
const path = require('path')
const EventEmitter = require('events')
const writeFileTree = require('./utils/writeFileTree')
const ProjectPackageManager = require('./ProjectPackageManager')


module.exports = class Creator extends EventEmitter {

    constructor (name, targetDir, promptModules = []) {
        super()
        this.name = name
        this.targetDir = process.env.CYDON_CLI_TARGETDIR = targetDir
        console.log('Creator is working on'+targetDir)
    }

    create (cliOptions = [], preset = null) {
        const dirpath = path.join(this.targetDir, this.name)
        //暂时设为 npm
        const PackageManager = 'npm'
        const pkg = {
            name:this.name,
            version: '0.1.0',
            private: true,
            dependencies: {},
            devDependencies: {},
        }
        const indexHtml = fs.readFileSync(path.join(__dirname, '../templates/index.html'), 'utf8');
        //暂时设为只有cydon
        const dependencies = {
                "cydon": "^0.1.9"
        }
        pkg.dependencies = dependencies

        console.log('project init')
        writeFileTree(dirpath, [{
            name:'package.json',
            content:JSON.stringify(pkg,null,2)
        }])

        console.log('path.join(dirpath,"src"', path.join(dirpath,'src'))
        console.log('typeof(path.join(dirpath,"src"))', typeof(path.join(dirpath,'src')))
        writeFileTree(path.join(dirpath,'src'),[{
            name:'index.html',
            content:indexHtml
        }])

        //install  dependencies
        console.log('installing dependencies...')
        const pkm = new ProjectPackageManager({dirpath,forcePackageManager:PackageManager})
        pkm.install()

        console.log('Project created successfully!')
    }

}