module.exports = {
    name: 'info',
    description: "Govori Info",
    execute(message, args, Discord){
        const info = new Discord.MessageEmbed()
        .setColor('0x950765')
        .setTitle('INFO')
        .setDescription('Staff Team na ovom discordu')
        .addFields(
            {name: 'Vlasnik', value: 'urke98#6886'},
            {name: 'Glavni Admin', value: 'Luka#1317'},
            {name: 'Moderator', value: 'vuk77765#1694'},
        )
        .setTimestamp()
        .setFooter('Bota napravio Lukaa#1317');

        message.channel.send(info)
    }
}