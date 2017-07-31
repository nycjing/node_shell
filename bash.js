// console.log(Object.keys(process));
process.stdout.write('prompt > ');
process.stdin.on('data', function(data){
    var cmd = data.toString().trim();
        process.stdout.write('you typed: ' +cmd + '\n')
    if (cmd === 'pwd') {
        process.stdout.write(`Current directory: ${process.cwd()}`+'\n');
    }
    if (cmd === 'date') {
        process.stdout.write(Date()+'\n');
    }

    process.stdout.write('\nprompt>');

});

