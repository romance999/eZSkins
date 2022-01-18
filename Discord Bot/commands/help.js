const Discord = require('discord.js')

module.exports = {
    name: 'help',
    aliases: ['cmd1', 'cmd2'],
    description: 'help',
    execute(message, args, client) {
        message.channel.send('Checking ping').then(m => {
            const start = message.createdTimestamp;
            const end = m.createdTimestamp;
            const total = end - start;
            var embed = new Discord.MessageEmbed()
                .setTitle('eZSkins Bot help')
                .setDescription(`av: Get a users avatar | ping: Get the bot\'s ping`)
                .setColor('BLACK');
            return m.edit(embed);
        });
    }
};