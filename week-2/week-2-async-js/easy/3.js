const fs = require('fs');
fs.readFile("./a.txt","utf-8",(err,contents) =>  console.log(contents));

let count = 0 ;
while(count<1000000000000000000) count++ //expensive operation takes too long, so contents will log after this event only.
