var fs = require ('fs');

data = fs.readFileSync(process.argv[2]);

content = data.toString();

console.log (content.split('\n').length -1);