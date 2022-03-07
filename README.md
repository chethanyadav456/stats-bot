
![Logo](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmma.prnewswire.com%2Fmedia%2F471951%2FSTATS_Logo.jpg%3Fp%3Dpublish&f=1&nofb=1)


# Discord Stats-Bot

A simple Discord Server Stat Bot made in Javascript.

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


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherinempeterson.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)
[![discord](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.podfeet.com%2Fblog%2Fwp-content%2Fuploads%2F2018%2F02%2Fdiscord-logo.png&f=1&nofb=1)](https://discord.gg/9ZG8yrjQpn)


## Support

For support, join our Discord server - https://discord.gg/9ZG8yrjQpn


## Authors

- [@chethanyadav456](https://www.github.com/chethanyadav456)

