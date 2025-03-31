const fs = require('fs');
const path = require('path');


module.exports = (dir,files) => {
    fs.writeFileSync(path.join(dir,files.name),files.content)

}