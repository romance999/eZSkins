const SteamUser = require('steam-user');
const colors = require('colors');
const client = new SteamUser();
const login = require("./json/account.json");
const Options = {
    accountName: login.accountName,
    password: login.password
}

console.log("Attempting login".red);

client.logOn(Options);
client.on('loggedOn', () => 
{
    console.log('');
    console.log('Successfully logged in as '.green + login.accountName.green);
    client.setPersona(SteamUser.EPersonaState.Snooze); //set the state
});
