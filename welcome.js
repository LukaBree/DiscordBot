module.exports = (bot) => {
    const channelId = '816420776437088303'
    const targetChannelId = '816420776437088303'

    bot.on('guildMemberAdd', (member) => {
        console.log(member)

        const message = `Pozdravite <@${member.id}> Procitaj pravila ${member.guild.channels.cache
            .get(targetChannelId)
            .toString()}`

        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message)
    })
}