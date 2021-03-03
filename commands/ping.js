module.exports = {
    name: 'ping',
    discription: 'discription',
    execute(message, args) {
        message.channel.send(`🏓 | Ping je: **${Date.now() - message.createdTimestamp}ms.**`);
    },
};