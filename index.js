const Discord = require('discord.js');
const bot = new Discord.Client();
const token = "ODE2Nzg0OTI0NTkzNzUwMDQ3.YEAAPQ.feNQ5Bq4uo9tNAyWvZoXnNuNNBg";
const prefix = "$";


const fs = require('fs');
bot.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}

bot.on('ready', () =>{
    console.log(`Bot je online, ulogovao sam se na ${bot.user.tag}!`);
    bot.user.setActivity('Uros Na Oprezu | KRAJ SKOLSKE GODINE | $komande', { type: 'PLAYING'}).catch(console.error);
 
 });
 


bot.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '👨・Member');

    guildMember.roles.add(welcomeRole);
    let dobrodosao = new Discord.MessageEmbed()
    .setDescription(`Cao <@${guildMember.user.id}> dobrodosao/la na Neptune™:slight_smile:

    Ako mozes invite svoje prijatelje/prijateljice:pray:
    
    Udji u self roles iuzmi neke rolove
    
    Obavezno procitaj pravila(rules)`)
    .setColor("RED")
    .setTimestamp()
    guildMember.guild.channels.cache.get('835819726928085023').send(dobrodosao)
});

bot.on('guildMemberRemove', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'members');

    guildMember.roles.add(welcomeRole);
    let izasao = new Discord.MessageEmbed()
    .setDescription(`<@${guildMember.user.id}> je izasao sa servera!`)
    .setColor("RANDOM")
    .setTimestamp()
    guildMember.guild.channels.cache.get('832953372021751818').send(izasao)
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
    }  else if (command === 'komande'){
        bot.commands.get('komande').execute(message, args, Discord);
    }  else if (command === 'moderator'){
        bot.commands.get('moderator').execute(message, args, Discord);
    }  else if (command === 'say'){
        bot.commands.get('say').execute(message, args, Discord);
    }  else if (command === 'glasaj'){
        bot.commands.get('glasaj').execute(message, args, Discord);
    }  else if (command === 'reci'){
        bot.commands.get('reci').execute(message, args, Discord);
    }  else if (command === 'pravila'){
        bot.commands.get('pravila').execute(message, args, Discord);
    }
          
});


bot.login(token);