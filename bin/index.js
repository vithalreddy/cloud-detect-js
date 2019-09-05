#!/usr/bin/env node

const commander = require('commander');
const { cloudProvider } = require('../build');
const pkg = require('../package.json');

const program = new commander.Command();

async function detect() {
  const provider = await cloudProvider();
  console.log(provider);
}

program
  .version(pkg.version)
  .command('detect')
  .alias('d')
  .description("Detect's Host Machine's Cloud Provider")
  .action(detect);

program.parse(process.argv);

if (!program.args.length) {
  program.help();
}
