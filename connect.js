var sq = require('shell-quote');
var exec = require('child_process').exec;
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var recursiveAsyncReadLine = function () {
    rl.question('Mot de passe: ', function (answer) {
        exec(sq.quote(['./.serveur/checkPassword.sh', answer]), function(err, stdout, stderr) {
            reponse = stdout.replace(/(\r\n|\n|\r)/gm, "")
            console.log("Mot de passe entrée : ", stdout)
            if(reponse == 'true'){
                console.log("Vous êtes connecté");
                return rl.close();
            } else{
                console.log("Mauvais mot de passe ! Veuillez réessayer")
                recursiveAsyncReadLine();
            }
        });
    });
};

recursiveAsyncReadLine();
