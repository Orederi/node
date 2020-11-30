const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

const { Client, RichEmbed } = require("discord.js");

client.on('ready', () => {
    setInterval(() => {
        console.log(`Logged in as ${client.user.tag}!`);
        client.user.setActivity(`${client.guilds.cache.size}`, {type: "PLAYING"});
    }, 1000 * 60 * 5);

});


client.on('message', message => {

    let msg = message;
    let args = msg.content.slice(prefix.length).split(/ +/);
    let command = args.shift().toLowerCase();
    let cmd = command;

	if (message.content === `${prefix}pelaaja-info`) {
        message.channel.send(`Sun nimes: osaatha sää ny saatana itekki lukee`);
    }else if (message.content === `${prefix}jäsenet`) {
        message.channel.send(`Jäsen määrä: ${message.guild.memberCount}`);
    }else if (message.content === `${prefix}Serveri`) {
        message.channel.send(`@17.12.2020`);
    }else if (message.content === `${prefix}tekija`) {
        message.channel.send(`Tehnyt by HattaraSetä#0884`)
    }else if (message.content === `${prefix}apua`) {
        message.channel.send(`Apua komento tulee myöhemmin`);
    }else if(cmd === 'kick'){
        if(!msg.member.hasPermission('KICK_MEMBERS')) return msg.channel.send("Sinulla ei ole oikeuksia tähän komentoon");
        let toKick = msg.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if(!args[0]) return msg.channel.send('Tägää se kenet haluat kickkaa');
        if(!toKick) return msg.channel.send(`${args[0]} ei ole ihminen.`);
        if(!reason) return msg.channel.send('Laita syysi.');
 
        if(!toKick.kickable){
            return msg.channel.send(':x: En voi kickkaa jos se on admin :x:');
        }
 
        if(toKick.kickable){
            let homoooo = new Discord.MessageEmbed()
            .setTitle('Kickki')
            .addField('Jäsen kickattu', toKick)
            .addField('Kickattu', msg.author, 'toimesta')
            .addField('Syy', reason)
 
            msg.channel.send(homoooo);
            toKick.kick();
            message.delete()
        }
    }
});

client.login('NzgzMDMxNDAwMDE3ODIxNzQw.X8U00Q.d5NZMaHv-ub2v7qanwqb9SQ_U-Q');
