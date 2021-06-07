module.exports = {
    name: 'info',
    description: "Govori Info",
    execute(message, args, Discord){
        const info = new Discord.MessageEmbed()
        .setColor('0x950765')
        .setTitle('INFO')
        .setDescription('Staff Team na ovom discordu')
        .addFields(
            {name: 'Vlasnik', value: 'urke98#6886, Luka#1317'},
            {name: 'Administrator', value: 'Matke帝#6013'},
            {name: 'Staff Team', value: '[MG]ᴳᵒᵈЕфтимов#9459, ! Peka#1618'},
        )
        .setTimestamp()
        .setFooter('Bota napravio Lukaa#1317');

        message.channel.send(info)
    }
}