// console.log(Object.keys(process));
process.stdout.write('prompt > ');
console.log(process.argv)
process.stdin.on('data', function(data){
    var cmd = data.toString().trim();
    console.log(process.argv)

    process.stdout.write('you typed: ' +cmd)

    process.stdout.write('\nprompt>');

    process.stdout.write(process.argv[2]);
});

