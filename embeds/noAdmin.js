module.exports = {
    name: 'moderator',
    description: "Govori Komande",
    execute(message, args, Discord){
        const noAdmin = new Discord.MessageEmbed()
        .setColor('0x950765')
        .setTitle('Nemas Moderatora')
        .setTimestamp()
        .setFooter('Bota napravio Lukaa#1317');
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(noAdmin);
        message.channel.send(noAdmin)
    }
}