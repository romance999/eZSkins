const Discord = require('discord.js');
const color = 0x39ff14;

module.exports = {
    name: 'av',
    aliases: ['idk'],
    description: '',
    execute(message, args, client) {

        function getUserFromMention(mention) {
            const matches = mention.match(/^<@!?(\d+)>$/);

            if (!matches) return;
            const id = matches[1];
            return client.users.cache.get(id);
        }
        if (args[0]) {
            const user = getUserFromMention(args[0]);
            if (!user) {

                return message.reply('Use a proper mention if you want to see someone else\'s avatar.');
            }
            var avembed = new Discord.MessageEmbed()
                .setColor('BLACK')
                .setDescription('<@' + user + '>\'s avatar')
                .setImage(user.displayAvatarURL({
                    dynamic: true
                }));
            return message.channel.send(avembed);
        }
        const useravembed = new Discord.MessageEmbed()
            .setColor(color)
            .setDescription('<@' + message.author.id + '>\'s avatar')
            .setImage(message.author.displayAvatarURL({
                dynamic: true
            }));
        return message.channel.send(useravembed);
    }
};
