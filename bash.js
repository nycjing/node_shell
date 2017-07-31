// console.log(Object.keys(process));
var commands = require('./commands');
//var userCommand = 'pwd';
process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {

    var cmdArray = data.toString().split(' ');
    var cmd = cmdArray[0].toString().trim();
    if (cmdArray.length > 1) {
        var parameter = cmdArray.slice(1).join(' ');
        commands[cmd](parameter);
    } else {
        commands[cmd]();
    }

});

