module.exports = {
    name: 'info',
    description: "Govori Info",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('0x950765')
        .setTitle('INFO')
        .setDescription('resi <@394169972806647812>')
        .addFields(
            {name: 'Info', value: 'test'},

        )

        message.channel.send(newEmbed)
    }
}