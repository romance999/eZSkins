const loginhook = require("./json/loginwebhook.json");

const colors = require('colors');

const axios = require("axios").default;

const ChanceJS = require("chance");

const login = require("./json/account.json");

const Steam = require("./Handler/Steam.js");

const Keys = require ("./Handler/KeyPress.js");


Keys.Start();
console.log("Attempting login".red);

Steam.Login();
Steam.LoggedIn();

function RandomChance()
{
  const serverSeed = "";
  const randomSeed = "";
  const mod = `${serverSeed}-${randomSeed}`;
  const chance = new ChanceJS(mod);
  const ticket = chance.floating({min: 0, max: 1, fixed: 15});
  console.log(ticket);
}
