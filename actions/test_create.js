function create(projectName,options){
    function getPromptModules(){
        return []
    }

    const creator = new Creator(name, targetDir, getPromptModules())
    creator.create(options)
}

module.exports = (...args)=>{
    return create(...args)
}