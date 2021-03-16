module.exports = {
    name: 'moderator',
    description: "Govori Komande",
    execute(message, args, Discord){
        const modhelp = new Discord.MessageEmbed()
        .setColor('0x950765')
        .setTitle('Komande')
        .setDescription('Prefix $')
        .addFields(
            {name: '$ban', value: 'Banujes igraca.'},
            {name: '$kick', value: 'Kikujes Igraca'},
            {name: '$say', value: 'Kazes nesto koristeci bota'},
            {name: '$glasaj', value: 'Glasas'},
            {name: '$clear', value: 'Brises poruke sa botom. Ali pazi da ne zajebes nesto posto maksimalno mozes 100 poruka da obrises!'},

        )
        .setTimestamp()
        .setFooter('Bota napravio Lukaa#1317');
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Nemas Permisije!'),message.react('😡');
        message.author.send(modhelp);
        message.channel.send('Pogledaj DM')
    }
}