const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = require("./json/config.json");

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) 
{
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

console.log("");
console.log("                                   Attempting to login")
client.on('ready', () => {
    client.user.setPresence({
        activity: {
            name: `Skin prices`,
            type: 'WATCHING'
        }
    });
    console.log("");
    console.log('                               eZSkins Discord Bot loaded');
});

client.on('message', (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(config.prefix)) {
    const args = message.content.slice(config.prefix.length).split(/ +/)
    const commandName = args.shift().toLowerCase()
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))
    if (command) {
      try {
        client.commands.get(command.name).execute(message, args, client);
      } catch (e) {
        message.channel.send('An error occured running that command.')
        console.error(`Error executing ${command.name}: \n${e}`)
      }
    }
  }
})

client.login(config.token);
