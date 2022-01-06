const fs = require("fs");

const SteamUser = require('steam-user');

const SteamTotp = require('steam-totp');

const client = new SteamUser();

const login = require("../json/account.json");

const webLink = require("../json/webhook.json");

const Webhook = require("./Webhook.js");

const loginhook = require("../json/loginwebhook.json");

const colors = require('colors');
const { options } = require("snekfetch");

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
        client.setPersona(SteamUser.EPersonaState.Busy); //set the state
        Webhook.SendWebhook(webLink.logins, login.accountName + " has logged in");
        console.log("");
        console.log("Hotkeys: ");
        console.log("q: Logout | w: Relog | e: Exit | r: Clear console");
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

function sendFriendMessage(id, message)
{
    if (isLogged)
    {
        client.chat.sendFriendMessage(id, message);
        console.log("");
        console.log(login.accountName.gray + ' Successfully sent a message to '.gray + id.gray + ' saying '.gray + message.gray);
        Webhook.SendWebhook(webLink.messages, login.accountName + " has sent a message to " + id + " saying " + message);
    }
    else if (!isLogged)
    {
        console.log("");
        console.log('UnSuccessfully sent message '.red);
    }
}

function acceptFriendRequest(id)
{
    client.acceptFriendRequest(id);
    console.log("");
    console.log("Accepted ".green + id.green + " friends request");
}

function addFriend(id)
{
    client.addFriend(id);
    console.log("");
    console.log("Sent friend request to ".green + id.green);
}

function removeFriend(id)
{
    client.removeFriend(id);
    console.log("");
    console.log("Removed ".green + id.green + " as a friend");
}

function blockUser(id)
{
    client.blockUser(id);
    console.log("");
    console.log("Blocked ".green + id.green);
}

module.exports =
{
    Login,
    LoggedIn,
    Relog,
    Logout,
    sendFriendMessage,
    acceptFriendRequest,
    addFriend,
    removeFriend,
    blockUser
}
