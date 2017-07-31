var fs = require('fs');

module.exports = {
    pwd: function () {
        process.stdout.write(`Current directory: ${process.cwd()}` + '\n');
        process.stdout.write('\nprompt>');
    },

    date: function(){
        process.stdout.write(Date()+'\n');
        process.stdout.write('\nprompt>');
    },

    ls: function(){
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
                process.stdout.write(file.toString() + "\n");
            })
            process.stdout.write("prompt > ");
        });
    },

    echo: function(arg){
        process.stdout.write(arg + '\n');
        process.stdout.write('\nprompt>');
    },

    cat: function (filename) {
        var fullName = `${process.cwd()}/`+filename;
        fs.readFile(fullName.trim(), function (err, data) {
            if (err) throw err;
            process.stdout.write(data + '\nprompt>');
        });
    },

    head: function(filename){
        var fullName = `${process.cwd()}/`+filename;
        fs.readFile(fullName.trim(), function (err, data) {
            if (err) throw err;
            var fileOutput = data.toString().split('\n').slice(0,5).join('\n');
            process.stdout.write(fileOutput + '\nprompt>');
        });
    }
};
