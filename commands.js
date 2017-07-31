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
    }
};