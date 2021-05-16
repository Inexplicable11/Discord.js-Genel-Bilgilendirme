const Discord = require('discord.js'); 
exports.run = function(client, message) {

message.channel.send(`Pong! \`(${client.ws.ping})\``)

};

exports.conf = {
  enabled: true,//Komut Özelden Kullanılabilirmi?
  guildOnly: false, //Komut Sunucya Özelmi?
  aliases: ['Ping'], //Komutun Kullanım Anahtarları (help,Help,HELP,yardım,Yardım,Yardim,yardim...)
  permLevel: 0 //Komutun Kullanımı İçin Gerekli Yetki 
};

exports.help = {
  name: "ping",//Komutun Ana İsmi 
  description: 'çoğu yazılım dilinde bulunan "etki-tepki" sistemi',//Komutun Açıklaması
  usage: '!ping'//Komutun Kullanım Şekli
};
