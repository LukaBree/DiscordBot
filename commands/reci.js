module.exports = {
    name: 'reci',
    description: "Govori Komande",
    execute(message, args, Discord){
        const nemapermisiju3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Nemas Permisiju!')
        .addField('Potrebna je permisija', 'potreban ti je discord moderator da bi bio mogao da korustis ovu komandu')
        .setTimestamp()
            if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(nemapermisiju3),message.react('😡');       
            message.delete();
            var text = message.content.split(' ').slice(1).join(' ');
            if(!text) return message.reply('Moras da kazes nesto');
            message.channel.send(text);
    }
}