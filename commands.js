var fs = require('fs');
var request = require('request');

module.exports = {
    done: function(output, withPromp){
        if ( withPromp === null )
        {
            process.stdout.write(output + "\nprompt>");
            process.stdout.write("prompt>");
        }
        else
            process.stdout.write(output + '\n');
    },
    pwd: function () {
        this.done(`${process.cwd()}`);

    },

    date: function(){
        this.done(Date());
    },

    ls: function(){
        var done = this.done;
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
                done(file.toString(),false);
            })
            process.stdout.write("prompt > ");
        });
    },

    echo: function(arg){
        this.done(arg);
    },

    cat: function (filename) {
        var fullName = `${process.cwd()}/`+filename;
        var done = this.done;
        fs.readFile(fullName.trim(), function (err, data) {
            if (err) throw err;
            done(data);
        });
    },

    head: function(filename){
        var fullName = `${process.cwd()}/`+filename;
        var done = this.done;
        fs.readFile(fullName.trim(), function (err, data) {
            if (err) throw err;
            var fileOutput = data.toString().split('\n').slice(0,5).join('\n');
            done(fileOutput);
        });
    },

    tail: function(filename){
        var fullName = `${process.cwd()}/`+filename;
        var done = this.done;
        fs.readFile(fullName.trim(), function (err, data) {
            if (err) throw err;
            var fileOutput = data.toString().split('\n').slice(-5).join('\n');
            done(fileOutput);
        });
    },

    curl: function(link){
        var done = this.done;
        request(link, function(err, im, body){
            if (err) throw err;
            done(body);
        });

    }


};