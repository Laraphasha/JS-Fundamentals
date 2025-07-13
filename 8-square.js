const { argv } = require('node:process');

let n_times = parseInt(argv[2])

if (n_times){
  for (let i = n_times; i > 0; i--) {
    let x = ""
    for (let j = n_times; j > 0; j--) {
      x = x + "X"
    }
    console.log(x)
  }
}
else {
  console.log("Missing size")
}