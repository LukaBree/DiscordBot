module.exports = {
    name: 'moderator',
    description: "Govori Komande",
    execute(message, args, Discord){
        message.delete();
        var text = message.content.split(' ').slice(1).join(' ');
        const sayEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`${text}`)

        try{
            if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(noAdmin);
            message.channel.send(sayEmbed);
            return
        }catch(e){
            // console.log(e.stack);
            console.log('\x1b[33m%s\x1b[0m', "Say Embed Error Occurred. Crash Prevented.");
            return
        }
    }
}