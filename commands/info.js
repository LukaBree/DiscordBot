module.exports = {
    name: 'info',
    description: "Govori Info",
    execute(message, args, Discord){
        const info = new Discord.MessageEmbed()
        .setColor('0x950765')
        .setTitle('INFO')
        .setDescription('Staff Team na ovom discordu')
        .addFields(
            {name: 'urke98#6886', value: 'Vlasnik'},
            {name: 'Lukaa#1317', value: 'Glavni Admin'},
            {name: 'vuk77765#1694', value: 'Moderator'},
        )
        .setTimestamp()
        .setFooter('Bota napravio Lukaa#1317');

        message.channel.send(info)
    }
}