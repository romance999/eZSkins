const fs = require("fs");

const colors = require('colors');

const webLink = require("../json/webhook.json");

const Webhook = require("./Webhook.js");

var jackpot;



function generateJackpot(max)
{
    jackpot = Math.floor(Math.random() * max);
    console.log("");
    console.log('Jackpot number generated: '.gray + jackpot + ' out of '.gray + max);
    Webhook.SendWebhook(webLink.jackpot, 'Jackpot number generated: ' + jackpot + ' out of ' + max);
}

module.exports =
{
    generateJackpot
}