const input = require("console-read-write").ask;
const colors = require("colors");
const os = require("os");
const { exit } = require("process");

async function main(argc, argv) { 
	console.log("Node.js".green + "template");
	exit(0);
}

main(process.argv.length, process.argv);
