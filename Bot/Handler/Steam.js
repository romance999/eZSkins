const fs = require("fs");

const SteamUser = require('steam-user');

const SteamTotp = require('steam-totp');

const client = new SteamUser();

const login = require("../json/account.json");

const Webhook = require("./Webhook.js");

const loginhook = require("../json/loginwebhook.json");

const colors = require('colors');

// variables //
var isLogged;

const Options =
{
    accountName: login.accountName,
    password: login.password,
    //twoFactorCode: SteamTotp.generateAuthCode(login.secret)
}

function Login()
{
    client.logOn(Options);
}

function LoggedIn()
{
    client.on('loggedOn', () => 
    {
        //this is for when the client first connects
        console.log('');
        console.log('Successfully logged in as '.green + login.accountName.green);
        //Webhook.SendWebhook(loginhook.url, "Successfully logged in as" + login.accountName);
        client.setPersona(SteamUser.EPersonaState.Busy); //set the state
        console.log("");
        console.log("           Hotkeys: ");
        console.log("           q: Logout | w: Relog | e: exit");
        isLogged = true;
    });
}

function Relog()
{
    if (isLogged)
    {
        client.relog(Options);
        console.log("");
        console.log('Successfully relogged as '.green + login.accountName.green);
    }
    else if (!isLogged)
    {
        isLogged = false;
        console.log('Cannot relog, bot is not signed in '.red);
    }
}

function Logout()
{
    if (isLogged)
    {
        isLogged = false;
        client.logOff();
        console.log("");
        console.log('Successfully logged off as '.green + login.accountName.green);
    }
    else if (!isLogged)
    {
        console.log("");
        console.log('Cannot log off, bot is not signed in '.red);
    }
}

function sendMessage(id, message)
{
    if (isLogged)
    {
        client.chat.sendFriendMessage(id, message);
        console.log("");
        console.log('Successfully sent message '.gray);
    }
    else if (!isLogged)
    {
        console.log("");
        console.log('UnSuccessfully sent message '.red);
    }
}

module.exports =
{
    Login,
    LoggedIn,
    Relog,
    Logout,
    sendMessage
}
