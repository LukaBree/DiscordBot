module.exports = (bot) => {
    const channelId = '797615227611906109'
    const targetChannelId = '797615227611906109'

    bot.on('guildMemberAdd', (member) => {
        console.log(member)

        const message = `Pozdravite <@${member.id}> Procitaj pravila ${member.guild.channels.cache
            .get(targetChannelId)
            .toString()}`

        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message)
    })
}