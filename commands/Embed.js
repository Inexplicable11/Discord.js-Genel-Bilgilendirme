const Discord = require('discord.js'); 
exports.run = function(client, message) {

let prefix = "!" //Tanımlama Kısmı.

const embed = new Discord.MessageEmbed()
console.log("Yardım Komutu " + message.author.username + '#' + message.author.discriminator + " Tarafından Kullanıldı.") 
.setTittle('ANA BAŞLIK') 
.setAuthor('Altbaşlık',`buraya alt başlık görseli`)
.setThumbnail('görsel')
.setDescription(`${prefix}ban @kullanıcı [ Sebep ] *(UZUN VE DETAYLI AÇIKLAMA)*`)
.addField('Kod Başlığı',`Kod Açıklaması`)
.setImage(`büyük görsel`)
.setFooter('buraya alt tarafta (footer) gözükücek kısım')
.setColor('Embed Rengi (Renk Kodu & İstenilen Rengin Büyük Harflerle İngilizce Yazılışı: YELLOW,BLACK,PURPLE...)')
.setTimestamp()
message.channel.send(embed)
message.react(`Emoji ID`)
  

};

exports.conf = {
  enabled: true,//Komut Özelden Kullanılabilirmi?
  guildOnly: false, //Komut Sunucya Özelmi?
  aliases: ['help'], //Komutun Kullanım Anahtarları (help,Help,HELP,yardım,Yardım,Yardim,yardim...)
  permLevel: 0 //Komutun Kullanımı İçin Gerekli Yetki 
};

exports.help = {
  name: "yardım",//Komutun Ana İsmi 
  description: 'yardım kodu.',//Komutun Açıklaması
  usage: '!ban @kullanıcı sebep'//Komutun Kullanım Şekli
};
