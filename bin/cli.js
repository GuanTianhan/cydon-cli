
const { Command } = require('commander');

const Debug = true



const program = new Command();

program
  .command('create <app-name>') /*创建新项目，
  接收命令行参数app-name作为项目名*/
  .description('Create a new application')
  .action((name,options) => {
    console.log(`Creating app named: ${name}`);
    if (Debug){
        require('../actions/test_create')(name,options)
    }
    if (!Debug){
        require('../actions/create')(name,options)
    }
  });

program.parse(process.argv);