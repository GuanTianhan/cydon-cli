const fs = require('fs-extra');
const path = require('path');


module.exports = (dir,files) => {
    //files:[]array,文件列表
    if (!Array.isArray(files)) {
        files = [files]
    }
    files.forEach(file => {
        let filePath = path.join(dir, file.name)
        fs.ensureDirSync(path.dirname(filePath))
        fs.writeFileSync(path.join(dir,file.name),file.content)
    });
    

}