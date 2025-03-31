const Creator = require('./Creator')

function create(projectName,options = []){

    const targetDir = options.cwd || process.cwd()
    function getPromptModules(){
        return []
    }

    const creator = new Creator(projectName, targetDir, getPromptModules())
    creator.create(options)
}

module.exports = (...args)=>{
    return create(...args)
}