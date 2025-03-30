
const { Command } = require('commander');

const program = new Command();

program
  .command('create <app-name>')
  .description('Create a new application')
  .action((name) => {
    console.log(`Creating app named: ${name}`);
  });

program.parse(process.argv);