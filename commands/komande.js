module.exports = {
    name: 'komande',
    description: "Govori Komande",
    execute(message, args, Discord){
        const komande = new Discord.MessageEmbed()
        .setColor('0x950765')
        .setTitle('Komande')
        .setDescription('Prefix *')
        .addFields(
            {name: '*komande', value: 'Govori komande'},
            {name: '*info', value: 'Info bota'},
            {name: '*moderator', value: 'Govori komande moderatora'},

        )

        message.channel.send(komande)
    }
}