const botconfig = require(`./botconfig.json`);
const colors = require(`./colors.json`);
const discord = require('discord.js');
const client = new discord.Client();

client.once('ready', () => {
    console.log(`${client.user.tag} is ready`);
});
client.on('guildMemberAdd', member => {
    let welcomeChannel = client.channels.cache.get("1250357344748048452")
    let targetchannel = '1250357344748048453'
    if(welcomeChannel){

        let welcomeEmbed = new discord.MessageEmbed()
        if(member.user.bot){

        if(member.user.client){

            welcomeEmbed.setColor(colors.purple)
            welcomeEmbed.setAuthor(`${member.guild.name}`)
            welcomeEmbed.setDescription(`سلام <@${member.user.id}> به سرور ما خوش اومدی یه سر به چنل ${member.guild.channels.cache.get(targetchannel).toString()} بزن تا قوانین رو ببینی `)
            welcomeEmbed.setThumbnail(member.user.displayAvatarURL())
            welcomeEmbed.setFooter(`${client.user.username} (=`)
            welcomeChannel.send(welcomeEmbed)
        }}else{
            welcomeEmbed.setColor(colors.aqua)
            welcomeEmbed.setAuthor(`${member.guild.name}`)
            welcomeEmbed.setDescription(`بات <@${member.user.id}> به سرور اضافه شد!`)
            welcomeEmbed.setFooter(`${client.user.username}  (=  `)
            welcomeChannel.send(welcomeEmbed)
        }
    }else{
        console.log("Welcome Channel Yaft Nashod")
    }
})
client.on("ready", () => {
    function YousamPower() {
      let hungry = ["Welcomer bot" , "welcome message", "made by digitronix" ]
      let Power = Math.floor(Math.random() * hungry.length);
      client.user.setActivity(hungry[Power], {type: "STREAMING", url: "https://www.aparat.com/digitronix"});
    }; setInterval(YousamPower, 2000)
  });
client.login(botconfig.token);

