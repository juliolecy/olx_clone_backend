const {checkSchema } = require('express-validator')

module.exports = {
    editAction: checkSchema({
        token: {
            notEmpty: true
        },
        name:{
            optional: true,
            trim: true,
            notEmpty: true,
            isLength:{
                options: {min:2}
            },
            errorMessage: 'O Nome precisa ter no mínimo 2 caracteres.'
        },
        email: {
            optional: true,
            isEmail: true,
            normalizeEmail: true,
            errorMessage: 'Email inválido.'
        },
        password: {
            optional: true,
            notEmpty: true,
            isLength: {
                options: {min: 2}
            },
            errorMessage: 'A senha precisa ter no mínimo 2 caracteres.'
        },
        state: {
            optional: true,
            notEmpty: true,
            errorMessage: 'Preencha o estado.'
        }
    }),
}