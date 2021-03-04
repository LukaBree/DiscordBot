module.exports = {
    name: 'glasaj',
    description: "Govori Komande",
    execute(message, args, Discord){
        message.delete();
        const glasaj = new Discord.MessageEmbed()
        .setColor('0xFFC300')
        .setTitle('NETACNO')
        .setDescription('$glasaj (poruka za glasanje)')
        
        if(!args[1]){
          if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Nemas premisiju za to!'),message.react(':x:');
          message.channel.send(glasaj);
        }
        
        var text = message.content.split(' ').slice(1).join(' ');
        
        const glasajb = new Discord.MessageEmbed()
        .setColor('random')
        .setTitle(text)
        
        message.channel.send(glasajb).then(messageReaction => {
          messageReaction.react("👍");
          messageReaction.react("👎");
        })
    }
}