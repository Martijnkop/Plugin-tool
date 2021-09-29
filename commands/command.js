// const { things } = require('../config')

exports.run = (client, message, args) => {
    console.log(message)
    console.log(args.join(' '))


};

exports.help = {
    name: '[commandname]'
}