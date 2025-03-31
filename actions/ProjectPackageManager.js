const { execSync } = require('child_process');

class ProjectPackageManager {
    constructor({targetDir, forcePackageManager}={}) {
        this.targetDir = targetDir || process.cwd();
        if (forcePackageManager) {
            this.bin = forcePackageManager;
        }
    }
    install() {
        
        const command = `${this.bin} install`;
        execSync(command, { cwd: this.targetDir });
    }
}

module.exports = ProjectPackageManager;