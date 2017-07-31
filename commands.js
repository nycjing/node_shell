var fs = require('fs');
var request = require('request');

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
    },

    tail: function(filename){
        var fullName = `${process.cwd()}/`+filename;
        fs.readFile(fullName.trim(), function (err, data) {
            if (err) throw err;
            var fileOutput = data.toString().split('\n').slice(-5).join('\n');
            process.stdout.write(fileOutput + '\nprompt>');
        });
    },

    curl: function(link){

        request(link, function(err, im, body){
            if (err) throw err;
            process.stdout.write(body + '\nprompt>');
        });

    }
};