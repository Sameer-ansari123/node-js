import chalk from 'chalk';

console.log(chalk.bgYellow('Hello world!'));
console.log(chalk.yellow('Hello world!'));
console.log(chalk.red('Hello world!'));

const { spawn } = require('node:child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
