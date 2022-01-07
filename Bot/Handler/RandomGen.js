const fs = require("fs");

const colors = require('colors');

var jackpot;



function generateJackpot(max)
{
    jackpot = Math.floor(Math.random() * max);
    console.log("");
    console.log('Jackpot number generated: '.gray + jackpot + ' out of '.gray + max);
}

module.exports =
{
    generateJackpot
}