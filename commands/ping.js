module.exports = {
    name: 'ping',
    discription: 'discription',
    execute(message, args, Discord) {
        message.channel.send(`🏓 | Ping je: **${Date.now() - message.createdTimestamp}ms.**`);
    },
};