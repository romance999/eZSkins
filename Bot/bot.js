const loginhook = require("./json/loginwebhook.json");

const colors = require('colors');

const ChanceJS = require("chance");

const login = require("./json/account.json");

const Steam = require("./Handler/Steam.js");

const Keys = require ("./Handler/KeyPress.js");


Keys.Start();
console.log("Attempting login".red);

Steam.Login();
Steam.LoggedIn();

//wait for steam bot to login
setTimeout(function()
{
  Steam.sendFriendMessage(login.OwnerID, login.accountName + " has logged in");
}, 1300);

function RandomChance()
{
  const serverSeed = "";
  const randomSeed = "";
  const mod = `${serverSeed}-${randomSeed}`;
  const chance = new ChanceJS(mod);
  const ticket = chance.floating({min: 0, max: 1, fixed: 15});
  console.log(ticket);
}
