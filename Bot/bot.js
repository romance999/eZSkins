const login = require("./json/account.json");

const loginhook = require("./json/loginwebhook.json");

const SteamUser = require('steam-user');

const SteamTotp = require('steam-totp');

const client = new SteamUser();

const colors = require('colors');

const axios = require("axios").default;


const Options =
{
    accountName: login.accountName,
    password: login.password,
    //twoFactorCode: SteamTotp.generateAuthCode(login.secret) 
}

console.log("Attempting login".red);

client.logOn(Options);
client.on('loggedOn', () => 
{
    console.log('');
    console.log('Successfully logged in as '.green + login.accountName.green);
    sendWebhook(loginhook.url, "Successfully logged in as" + login.accountName);
    client.setPersona(SteamUser.EPersonaState.Busy); //set the state
});

function sendWebhook(url, content)
{
    let msg = {
        "content": content
    };
    
    axios({
      url: url,
      data: JSON.stringify(msg),
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
}