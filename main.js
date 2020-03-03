const camera = require('./camera');
const vorpal = require('vorpal')();
const chalk = vorpal.chalk;

vorpal.command('camera', 'Recupera la imagen de una camara aleatoria')
    .action(function (args, callback) {
        camera().then(() => callback())

    })

vorpal
    .command('preguntas', 'Pequeño test con preguntas')
    .action(function (args, callback) {
        return this.prompt([
            {
                type: 'list',
                message: 'Selecciona una de las opciones',
                name: 'opciones',
                choices: ['primera', 'segunda', 'tercera']
            },
            {
                type: 'confirm',
                message: '¿De verdad quieres eso?',
                name: 'confirmacion'
            },
            {
                type: 'input',
                message: 'Dime tu nombre',
                name: 'nombre',
                default: 'Mario Girón'
            }
        ], function (results) {
            console.log(results);
            callback();
        });
    });






vorpal.delimiter('$cli >').show();






//camera().then(() => console.log('Termina lo de la imagen'));

