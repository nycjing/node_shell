// console.log(Object.keys(process));
var commands = require('./commands');
//var userCommand = 'pwd';
process.stdout.write('prompt > ');

process.stdin.on('data', function(data){
    var cmd = data.toString().trim();
    commands[cmd]();

});

