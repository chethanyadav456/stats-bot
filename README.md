
![Logo](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmma.prnewswire.com%2Fmedia%2F471951%2FSTATS_Logo.jpg%3Fp%3Dpublish&f=1&nofb=1)


# Discord Stats-Bot

A simple Discord Server Stat Bot made in Javascript.

If I get 25+ stars I will make an multiguild server-stats code.

## Installation

Install my-project with npm

```bash
  npm install discord.js
  node .
```
    
## Usage/Examples

```javascript
client.on("guildMemberAdd", (member) => {
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
    try {
        member.guild.channels.cache.get(options.total).setName(`Total Members: ${member.guild.memberCount}`); // You can change this text, but still keep ${guild.memberCount}, as it defines total members.
        member.guild.channels.cache.get(options.users).setName(`Users: ${member.guild.members.filter((m) => !m.user.bot).size}`); // This text is also changeable, still keep the code in ${}'s
        member.guild.channels.cache.get(options.bots).setName(`Bots: ${member.members.filter((m) => m.user.bot).size}`); // This text is also changeable, still keep the code in ${}'s
    
    }
    catch (e) {
    console.log(e);
    }
});
```

## Support

For support, join our Discord server - https://discord.gg/9ZG8yrjQpn


## Authors

- [@chethanyadav456](https://www.github.com/chethanyadav456)

