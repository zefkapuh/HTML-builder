const fs = require("fs");
const path = require("path");
// const EventEmitter = require("events");
const readline = require('readline');
const fileName = path.join(__dirname, 'destination.txt');
const output = fs.createWriteStream(fileName, "utf-8");
const { stdin, stdout } = process;
const rl = readline.createInterface({input: process.stdin});

fs.writeFile(path.join(__dirname, "destination.txt"), "", (err) => {
  if (err) {
    throw err;
  }
});

stdin.pipe(output);
stdout.write("Hello! Write whatever you want, please:\n");

rl.on('line', (exit) => {
    if (exit === 'exit') {
        rl.close();
    }
    });

rl.on('close', () => {
    console.log('Thanks for your message');
});

process.once('SIGINT', () => {
    rl.close();
});


