module.export = async (bot) =>{
    const guild = bot.guilds.cache.get('816420776437088296');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('816972303359016990');
        channel.setName(`Ukupno Ljudi: ${memberCount.toLocaleString()}`);
        console.log('Gledam koliko ima ljudi');
    }, 10000);
}