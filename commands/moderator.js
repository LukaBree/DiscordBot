module.exports = {
    name: 'moderator',
    description: "Govori Komande",
    execute(message, args, Discord){
        const komande = new Discord.MessageEmbed()
        .setColor('0x950765')
        .setTitle('Komande')
        .setDescription('Prefix *')
        .addFields(
            {name: '/komande', value: 'Govori komande'},
            {name: '/info', value: 'Info bota'},
            {name: '/moderator', value: 'Govori komande moderatora'},
            {name: '/ping', value: 'Govori ping bota'},

        )
        .setTimestamp()
        .setFooter('Bota napravio Lukaa#1317');
        if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send(client.embeds.config.noAdmin()),message.react(':x:');
        message.author.sendMessage(komande) 
        message.channel.send(komande)
    }
}