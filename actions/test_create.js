const Creator = require('./Creator')

const path = require('path')
function create(projectName,options = []){

    const targetDir = options.cwd || process.cwd()
    const testDir = path.join(__dirname,'..','test')

    console.log('targetDir:',targetDir)
    console.log('testDir',testDir)
    function getPromptModules(){
        return []
    }

    const creator = new Creator(projectName, testDir, getPromptModules())
    creator.create(options)
}

module.exports = (...args)=>{
    return create(...args)
}