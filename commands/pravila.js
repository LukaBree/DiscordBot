module.exports = {
    name: 'pravila',
    description: "Govori Pravila",
    execute(message, args, Discord){
        const pravila = new Discord.MessageEmbed()
        .setColor('0x950765')
        .setTitle('INFO')
        .setDescription('Pravila na Dangerous server')
        .addField('Zabranjeno je Vredjanje na osnovu nacionalizma ili obicno vredjanje.')
        .addField('Zabranjeno je Reklamiranje drugih discord servera.', 'Mute na 1 dan, pa sledi kick!')
        .addField('Zabranjeno je Vikanje u Voice-u.', 'Kick, pa Ban!')
        .addField('Zabranjeno slanje drugih Discord servera članovima u inbox.', 'Ban!')
        .addField('Strogo je zabranjebo lažno optuživanje drugih na serveru..', 'Ban!')
        .addField('Zabranjeno psovanje!.', 'Ban!')
        .addField('Voice changer je zabranjen, sme da se koristi samo ukoliko vlasnik servera to dopusti!.', 'Mute!')
        .addField('Tagovanje staffa, @everyone je zabranjeno.', 'Mute!')
        .setTimestamp()
        .setFooter('Bota napravio Lukaa#1317');
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(nemapermisiju3),message.react('😡');
        message.channel.send(pravila)
    }
}