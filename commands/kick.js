module.exports = {
    name: 'kick',
    description: "Moze da kika",
    execute(message, args, Discord){
        const user = message.mentions.users.first();
        // If we have a user mentioned
        if (user) {

          const member = message.guild.member(user);
          if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send(client.embeds.config.noAdmin());
          if (member) {
            member
              .kick('Optional reason that will display in the audit logs')
              .then(() => {
                // We let the message author know we were able to kick the person
                message.reply(`Successfully kicked ${user.tag}`);
              })
              .catch(err => {
                // An error happened
                // This is generally due to the bot not being able to kick the member,
                // either due to missing permissions or role hierarchy
                message.reply('I was unable to kick the member');
                
                console.error(err);
              });
          } else {
            
            message.reply("That user isn't in this guild!");
          }
          
        } else {
          message.reply("Nisi mi rekao koga da kikam, koristi *kick (razlog) (ovde tagujes koga treba da kikas)!");
        }
      }
    };