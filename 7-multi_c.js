const { argv } = require('node:process');

let n_times = parseInt(argv[2])

if (n_times){
  for (let i = n_times; i > 0; i--) {
    console.log("C is fun")
  }
}
else {
  console.log("Missing number of occurrences")
}