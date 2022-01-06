const keypress = require('keypress');
const Steam = require("./Steam.js");
const Webhook = require("./Webhook.js");
const loginhook = require("../json/loginwebhook.json");
const login = require("../json/account.json");
const env = require('./Env.js');



     // listen for the "keypress" event
     process.stdin.on('keypress', function (ch, key) 
     {
         if (key.name == 'q') 
         {
             process.stdin.pause();
             Steam.Logout();
             process.stdin.resume();
         }
     });
     process.stdin.on('keypress', function (ch, key) 
     {
         if (key.name == 'w') 
         {
             process.stdin.pause();
             Steam.Relog();
             process.stdin.resume();
         }
     });
     process.stdin.on('keypress', function (ch, key) 
     {
         if (key.name == 'e') 
         {
            process.exit(1)
         }
     });
     process.stdin.on('keypress', function (ch, key) 
     {
         if (key.name == 'r') 
         {
            process.stdin.pause();
            env.cls();
            console.log("Logged in as " + login.accountName)
            console.log("");
            console.log("Hotkeys: ");
            console.log("q: Logout | w: Relog | e: exit | r: clear console");
            process.stdin.resume();
         }
     });

function Start()
{
    keypress(process.stdin);
    process.stdin.setRawMode(true); 
}

module.exports =
{
    Start
}