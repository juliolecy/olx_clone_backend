const {checkSchema } = require('express-validator')

module.exports = {
    signup: checkSchema({
        name:{
            trim: true,
            notEmpty: true,
            isLength:{
                options: {min:2}
            },
            errorMessage: 'O Nome precisa ter no mínimo 2 caracteres.'
        },
        email: {
            isEmail: true,
            normalizeEmail: true,
            errorMessage: 'Email inválido.'
        },
        password: {
            notEmpty: true,
            isLength: {
                options: {min: 2}
            },
            errorMessage: 'A senha precisa ter no mínimo 2 caracteres.'
        },
        state: {
            notEmpty: true,
            errorMessage: 'Preencha o estado.'
        }
    }),
    signin: checkSchema({
        email: {
            isEmail: true,
            normalizeEmail: true,
            errorMessage: 'Email inválido.'
        },
        password: {
            notEmpty: true,
            isLength: {
                options: {min: 2}
            },
        }
    })
}