/* Codded by @Amalser
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'list', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://www.linkpicture.com/q/IMG-20210629-WA0181.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `β¦πΈππππ€ππ£β€οΈββ€βΜ±Μ±Μ±Μ±ΜΜΜΜπ€πππ£π₯ ππ π₯β¦


ππ π²         π _ππππ©π¨ππ₯π₯ πͺπ¨ππ§ ππ€π© 
ππ’ππ»π²πΏ  π  πΌπ’ππ‘π¨ππ§
ππ©π²πΏππΆπΌπ»π _1.32 ππ‘π€ππ‘π
πποΏ½οΏ½οΏ½πππ²π± π πππ§π€π πͺ 

ββββββββββββββββββββ
          πΌ_πππππππ πΌπ πππ½πππΎ_πΌ ββββββββββββββββββ
ππππ ".πππ‘π₯"  πππ πππ πΎππππΌππΏπ 

πππ© ππ§ππ£π©π¨ ππ€π’π’ππ£π¨ π‘ππ¨π©π¨
        β_.xmedia
        β_.deepai
        β_.effects
        β_.vava
        β_.amalser
ββββββββββββββββββ

β£:ππππΏ ππ ππΌππ π½ππ ππππ πΌπ πππ₯Ί

β­β£https://github.com/cyberchekuthan/Amalser_v1

β£:πππ½ππΎπππ½π πππ πΎππΌππππ

β­β£https://youtu.be/eezGqQj9gQ4

β£:ππΌππ ππππππ

β­β£https://chat.whatsapp.com/DHYuPadEvEw4wvs93NtL6n

β­β£https://chat.whatsapp.com/Lvtl7GqERfP19Na6M2wndX


β£:πππ ππΏππΎπΌπππππΌπ πππππ

β­β£https://chat.whatsapp.com/DHYuPadEvEw4wvs93NtL6n

β£:πππππ

β­β£ππΌπ»'π π°πΌπΊπ² πΆπ»π―πΌπ ππΌπ π?πΏπ² π―πΉπΌπ°πΈπ²π± π?πππΌπΊπ?ππΆπ°π?πΉπΉπ.
β­β£πΏπ€π£'π© π©π§π? ππ€π’π’ππ£ππ¨ ππ£ ππ£ππ€π­.

β£:πππππ

β­β£https://wa.me/message/919895828468

β£:πΎππΏππΏ π½π

β­β£πΌπ’ππ‘π¨ππ§

β£:ππππππ½

β­β£https://github.com/cyberchekuthan/Amalser_v1

ββββββββββββββββββ
β£πΎππππΌππΏ πππππ

β­β£.π‘ππ₯π©
β­β£.ππ₯π’π―π
β­β£.ππ’ππ‘π¨ππ§
β­β£.ππππ©ππ’
β­β£.π±π¦πππ’π
β­β£.πππ«π
β­β£.ππππππ©π¨

β£ππππΎππΌπ πΎππππΌππΏ

β­β£.ππ’ππ‘

ββββββββββββββββββββ
β£πππΏππΌ πΎππππΌππΏπ

β­β£.π¬π¨π§π 
β­β£.π―π’πππ¨
β­β£.π¬π­π’ππ€ππ«
β­β£.π©π‘π¨π­π¨
β­β£.π²π­
β­β£.ππ€π©
β­β£.π’π¦π 
β­β£.π¬π¬
β­β£.π­π­π¬
β­β£.π­π­π©
β­β£.ππ­π­π©
β­β£.π¦π©3
β­β£.π¦π©4ππͺπππ€
β­β£.ππ’ππ­
β­β£.πππ¦π©ππ 
β­β£.π£π¨π€π
β­β£.π¦ππ¦π
β­β£.π¦π¨π―π’π
β­β£.π’π§π¬π­π
β­β£.π§ππ°π¬
β­β£.π¨ππ«
β­β£.π£π’π
β­β£.πͺπ?π¨π­π
β­β£.π«ππ¦π¨π―πππ 
β­β£.π¬πππ§
β­β£.π­π«π­
β­β£.π π’π­π‘π?π
β­β£.π₯π²π«π’π
β­β£.ππ¨π―π’π
β­β£.π¬π‘π¨π°
β­β£.π’π 
β­β£.ππ§π’π¦ππ¬ππ²
β­β£.ππ‘ππ§π ππ¬ππ²
β­β£.π­π«π?π¦π©ππ¬ππ²
β­β£.π¬π°πππ­π‘ππ«
β­β£.π¬π²π¬π
β­β£.π­ππ₯ππ§π
β­β£.π
β­β£.π?π§π―π¨π’ππ
β­β£.π―π¨π’ππ²
β­β£.π°ππ₯π₯π©ππ©ππ«
β­β£.π°πππ­π‘ππ«
β­β£.π¬π‘π¨π«π­
β­β£.πππ₯π
β­β£.π¬ππ π

`}) 

}));
