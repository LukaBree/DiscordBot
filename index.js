const Discord = require('discord.js');
const bot = new Discord.Client();
const token = "ODE2Nzg0OTI0NTkzNzUwMDQ3.YEAAPQ.H8vkdBZ5CrlOFqhJEqQ_uNPgSbk";
const prefix = "*";


const memberCounter = require('./counters/member-counter');
const fs = require('fs');
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}

bot.on('ready', () => {
    console.log("ucitano");
    bot.user.setActivity('Gledam Urosa');
    memberCounter(client);
});


bot.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'members');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('816420776437088303').send(`Pozdravite <@${guildMember.user,id}> pre svega budi covek`)
});


bot.on('message', message => {


    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if(command === 'info'){
        bot.commands.get('info').execute(message, args, Discord);
    }  else if(command === 'ping'){
        bot.commands.get('ping').execute(message, args, Discord);
    }  else if (command === 'kick'){
        bot.commands.get('kick').execute(message, args, Discord);
    }  else if (command === 'ban'){
        bot.commands.get('kick').execute(message, args, Discord);
    }  else if (command === 'clear'){
        bot.commands.get('clear').execute(message, args, Discord);
    }
          
});


bot.login(token);