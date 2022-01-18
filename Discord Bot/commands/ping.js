const Discord = require('discord.js')

module.exports = {
    name: 'ping',
    aliases: ['cmd1', 'cmd2'],
    description: 'client ping',
    execute(message, args, client) {
        message.channel.send('Checking ping').then(m => {
            const start = message.createdTimestamp;
            const end = m.createdTimestamp;
            const total = end - start;
            var embed = new Discord.MessageEmbed()
                .setTitle('eZSkins Bot Ping')
                .setDescription(`${total} ms`)
                .setColor('BLACK');
                message.channel.edit(`Ping calcuated`)
            return m.edit(embed);
        });
    }
};
