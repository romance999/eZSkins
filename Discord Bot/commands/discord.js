const Discord = require('discord.js')

module.exports = {
    name: 'discordversion',
    aliases: ['cmd1', 'cmd2'],
    description: 'gay',
    execute(message, args, client) {
        message.channel.send('Getting discord.js version').then(m => {
            const start = message.createdTimestamp;
            const end = m.createdTimestamp;
            const total = end - start;
            var embed = new Discord.MessageEmbed()
                .setTitle('eZSkins Bot Discord.js Version')
                .setDescription(`eZSkins Bot is using version ${Discord.version} of discord.js`)
                .setColor('BLACK');
            return m.edit(embed);
        });
    }
};