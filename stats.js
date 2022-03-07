const { Client, Discord, Intents } = require('discord.js');
const config = require('./config.json');
const client = new Client({
    allowedMentions: {
        parse: ["roles", "users", "everyone"],
        repliedUser: false
    },
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS, 
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_PRESENCES
    ],
    presence: {
        activities: [{
            name: "Stats Bot created by Raaz#2233",
            type: "WATCHING"
        }],
        status: "dnd"
    }
});

//Ready Event
client.once('ready', async () => {
    console.log(`${client.user.username} is Ready!`);
});

let options = {
    total: "948347718957404170",
    users: "948347741636010034",
    bots: "948347768676687934"
};

client.on("guildMemberAdd", (member) => {
    //All choices are optional here. Bot wont work if the channel ID's are wrong. How to properly get ID's read in README.md 
    try {
        member.guild.channels.cache.get(options.total).setName(`Total Members: ${member.guild.memberCount}`); // You can change this text, but still keep ${guild.memberCount}, as it defines total members.
        member.guild.channels.cache.get(options.users).setName(`Users: ${member.guild.members.filter((m) => !m.user.bot).size}`); // This text is also changeable, still keep the code in ${}
        member.guild.channels.cache.get(options.bots).setName(`Bots: ${member.guild.members.filter((m) => m.user.bot).size}`); // This text is also changeable, still keep the code in ${}
    
    }
    catch (e) {
    console.log(e);
    }
});
client.on("guildMemberRemove", (member) => {
    //All choices are optional here. Bot wont work if the channel ID's are wrong. How to properly get ID's read in README.md 
    try {
        member.guild.channels.cache.get(options.total).setName(`Total Members: ${member.guild.memberCount}`); // You can change this text, but still keep ${guild.memberCount}, as it defines total members.
        member.guild.channels.cache.get(options.users).setName(`Users: ${member.guild.members.filter((m) => !m.user.bot).size}`); // This text is also changeable, still keep the code in ${}'s
        member.guild.channels.cache.get(options.bots).setName(`Bots: ${member.members.filter((m) => m.user.bot).size}`); // This text is also changeable, still keep the code in ${}'s
    
    }
    catch (e) {
    console.log(e);
    }
});
  
client.login(config.token)