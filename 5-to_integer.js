const { argv } = require('node:process');

if (argv[2]) {
  let nr = parseInt(argv[2])
  if (nr) {
    console.log("My number: " + nr)
  } else {
    console.log("Not a number")
  }
}