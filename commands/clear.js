const { Message } = require("discord.js");

module.exports = {
    name: "clear",
    description: "Clear",
    async execute(message, args, Discord) {
        if(!args[0]) return message.reply("Napisi koliko zelis da clearas");
        if(isNaN(args[0])) return message.reply("Napisi realan broj do 100");

        if(args[0] > 100) return message.reply("Ne mozes da izbrises vise od sto poruka");
        if(args[0] < 1) return message.reply("MORAS BAREM JEDNU");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}