
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { animesaran } = require('./src/animesaran')
const { animesaran2 } = require('./src/animesaran2')
const { help } = require('./lib/help')
const { rules } = require('./src/rules')
const { BambangGans } = require('./BambangGans/18.js')
const { listsurah } = require('./src/listsurah')
const { donasi } = require('./lib/donasi')
const { fetchJson } = require('./lib/fetcher')
const request = require('request');
const requests = require("node-fetch")
const got = require("got");
const ytdl = require('ytdl-core');
const yts = require( 'yt-search' )
const ID3Writer = require('browser-id3-writer');  
const { recognize } = require('./lib/ocr')
const { exec } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const igdl = require('instagram-scraping')
const igdls = require('instagram-url-direct')
const imageToBase64 = require('image-to-base64');
const base64ToImage = require('base64-to-image');
const cheerio = require('cheerio')
const infotlp = require('no-telp')
const brainly = require('brainly-scraper')
const rumus = require('rumus-bdr')
const angkab = require('@develoka/angka-terbilang-js')
const ffmpeg = require('fluent-ffmpeg')
const imgbb = require('imgbb-uploader')
const xnxx = require('express').Router();
const translate = require('@vitalets/google-translate-api')
const imgtopdf = require("pdfkit")
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const toMs = require('ms')
const ms = require('parse-ms')
const { yta, ytv } = require('./lib/ytdl')
const { ind } = require('./language')
const cron = require('node-cron')
const exect = require('await-exec')
const webp = require('webp-converter')
const apivhtear = 'MRKINGLEO7788'
const ZeksApi = 'apivinz'
const BarBarKey = 'IDxO1TFYnKADlX4pxcHa'
const shizukaapi = 'itsmeiky633'
const TobzApi = 'BotWeA'
const TobzKey = 'BotWeA'
const apiKey = 'MRKINGLEO7890' 
const vcard = 'BEGIN:VCARD\n'  
            + 'VERSION:3.0\n'  
            + 'FN:LEO\n'  
            + 'ORG: Pengembang LEO ;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=6285656214208:+6285656214208\n'  // Ganti jadi nomormu, tapi jangan ubah polanya
            + 'END:VCARD' // jangan di ubah
prefix = '#'
baterai = {
	battery: "" || "Tidak terdeteksi",
	isCharge: "" || false
}
fake = '*_ada yang nyuruh kamu unsend ? di saat antidelete aktif ??. sangat Goblok,pesanmu terdeteksi_*'
fakes = 'SELFBOT AND PUBLICBOT-WA'
nomornye = '0@s.whatsapp.net'
blocked = []
banChats = true
autojoin = false
autodemote = false
waktuafk = `${time}`
reason = 'Nothing'
setgrup = "6289636006352-1606097314@g.us"
limitawal = '1000' //terserah ganti atau engga
cr = '*MR.KINGLEOBOT ALREADY VERIFIED✅'
vr = '*🍁MR.KINGLEO🍁*'
offline = false
publik = false
alasanafk = '-'
/******** OWNER NUMBER**********/
const ownerNumber = ["6285656214208@s.whatsapp.net"]  //ganti menjadi nomormu
/************************************/

/*********** LOAD FILE ***********/
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const bad = JSON.parse(fs.readFileSync('./database/group/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/group/badword.json'))
const kotor = JSON.parse(fs.readFileSync('./src/kasar.json'))
const autostick = JSON.parse(fs.readFileSync('./src/autosticker.json'))
const antifirtex = JSON.parse(fs.readFileSync('./database/group/antifirtex.json'))
const kickarea = JSON.parse(fs.readFileSync('./src/kickarea.json'))
const setiker = JSON.parse(fs.readFileSync('./src/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./src/video.json'))
const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./src/image.json'))
const sewa = require('./functions/sewa')
const afk = require('./functions/afk')
 const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
//const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
/*********** END LOAD ***********/
// FUNCTION

const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('2m') }
    afk.push(obj)
    fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
}
const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./database/afk.json', JSON.stringify(_dir))
        }
    }, 1000)
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}
       
/********** FUNCTION ***************/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
        
        const getLimit = (sender) => {
        	let position = false
              Object.keys(limit).forEach ((i) => {
              	if (limit[position].id === sender) {
              	   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
            const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }


        

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/********** FUNCTION ***************/

const bambang = new WAConnection()
   bambang.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(color('(+)','white'),color('Mr.Three Four One','red'),color('(+)','white'),color('SQAN CODENYA!!','blue'),color('YOU','white'),color('TUBE','red'),color('Mr.THREE FOUR ONE','yellow'))})

bambang.on('credentials-updated', () => {
	const authInfo = bambang.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./bambang.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./bambang.json') && bambang.loadAuthInfo('./bambang.json')
bambang.connect();


bambang.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await bambang.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await bambang.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Hallo @${num.split('@')[0]}\Selamat datang di group *${mdata.subject}* yang betah ya di sini`
				let buff = await getBuffer(ppimg)
				bambang.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await bambang.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Sayonara @${num.split('@')[0]}👋🍁`
				let buff = await getBuffer(ppimg)
				bambang.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	bambang.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	bambang.on('message-new', async (mek) => {
		try {
            const txt = mek.message.conversation
            if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			let infoMSG = JSON.parse(fs.readFileSync('./src/msg.data.json'))
            infoMSG.push(JSON.parse(JSON.stringify(mek)))
            fs.writeFileSync('./src/msg.data.json', JSON.stringify(infoMSG, null, 2))
            const urutan_pesan = infoMSG.length
            if (urutan_pesan === 5000) {
      infoMSG.splice(0, 5000)
      fs.writeFileSync('./src/msg.data.json', JSON.stringify(infoMSG, null, 2))
    }
            global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
                        const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
                        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			var tas = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = bambang.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = bambang.contacts[sender] != undefined ? bambang.contacts[sender].vname || bambang.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await bambang.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

        cekafk(afk)
    if (urutan_pesan === 5000) {
      infoMSG.splice(0, 4300)
      fs.writeFileSync('./database/off.json', JSON.stringify(infoMSG, null, 2))
    }
       if (!publik) {
  }
            bambang.on('message-update', async (hurtz) => {
	try {
		const from = hurtz.key.remoteJid
		const messageStubType = WA_MESSAGE_STUB_TYPES[hurtz.messageStubType] || 'MESSAGE'
		const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
		const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
		const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
		sender = hurtz.key.fromMe ? benny.user.jid : hurtz.key.remoteJid.endsWith('@g.us') ? hurtz.participant : hurtz.key.remoteJid
		const isRevoke = hurtz.key.remoteJid.endsWith('@s.whatsapp.net') ? true : hurtz.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
		const isCtRevoke = hurtz.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
		const isBanCtRevoke = hurtz.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
        if (sender == undefined) sender = benny.user.jid
if (messageStubType == 'REVOKE' && isRevoke) {
	sender = hurtz.key.fromMe ? bambang.user.jid : hurtz.key.remoteJid.endsWith('@g.us') ? hurtz.participant : hurtz.key.remoteJid
		if (sender == undefined) sender = benny.user.jid
	try {
					ppimg = await bambang.getProfilePicture(sender)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				    buffer = await getBaper(ppimg)
					const isGroup = hurtz.key.remoteJid.endsWith('@g.us') ? true : false
                    const from = hurtz.key.remoteJid
					const groupMetadata = isGroup ? await benny.groupMetadata(from) : ''
					const groupMembers = isGroup ? groupMetadata.participants : ''
					okok = []
					for (let o of groupMembers) {
						okok.push(o.jid)
					}
                    sender = hurtz.key.fromMe ? bambang.user.jid : hurtz.key.remoteJid.endsWith('@g.us') ? hurtz.participant : hurtz.key.remoteJid
					if (sender == undefined) sender = bambang.user.jid
                    let int
                    let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
                    const id_deleted = hurtz.key.id
                    const conts = hurtz.key.fromMe ? benny.user.jid : benny.contacts[sender] || { notify: jid.replace(/@.+/, '') }
                    const pushname = hurtz.key.fromMe ? bambang.user.name : conts.notify || conts.vname || conts.name || '-'
                   if (pushname == undefined) pushname = '-'
					for (let i = 0; i < infoMSG.length; i++) {
                         if (infoMSG[i].key.id == id_deleted) {
                              const dataInfo = infoMSG[i]
                              const type = Object.keys(infoMSG[i].message)[0]
                              const timestamp = infoMSG[i].messageTimestamp
                              int = {
                                   no: i,
                                   type: type,
                                   timestamp: timestamp,
                                   data: dataInfo

                              }
                         }
                    }
                    const index = Number(int.no)
                    const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
                    const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
                    if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
                         const strConversation = `\*◪* *ANTIDELETE*\n*│*
*│* *Nama* : ${pushname} ( @${sender.replace('@s.whatsapp.net', '')} )
*│* *Tipe* : Text
*│* *Waktu* : ${moment.unix(int.timestamp).format('HH:mm:ss DD/MM/YYYY')}
*│* *Pesan* : ${body ? body : '-'}`

                         bambang.sendMessage(from, strConversation, MessageType.text, { contextInfo: {mentionedJid: okok, isForwarded: true, forwardingScore: 300}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buffer, "mimetype": "application/octet-stream", "title": `${fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
                    } else if (int.type == 'stickerMessage') {
                         const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
                         const savedFilename = await benny.downloadAndSaveMediaMessage(int.data, `./src/${filename}`);
                         const strConversation = `*◪* *ANTIDELETE*\n*│*\n*│* Nama: ${pushname}\n*│* Tag: @${sender.replace('@s.whatsapp.net', '')}\n*│* Tipe : Sticker\n*│* Waktu: ${moment.unix(int.timestamp).format('HH:mm:ss DD/MM/YYYY')}`
				const buff = fs.readFileSync(savedFilename)
				bambang.sendMessage(from, strConversation, MessageType.text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buffer, "mimetype": "application/octet-stream", "title": `${fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
               bambang.sendMessage(from, buff, MessageType.sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buffer, "mimetype": "application/octet-stream", "title": `${fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
               // console.log(stdout)
				fs.unlinkSync(savedFilename)

			} else if (int.type == 'imageMessage') {
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await benny.downloadAndSaveMediaMessage(int.data, `./src/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation =  `*◪* *ANTIDELETE*\n*│*\n*│* Nama : ${pushname}\n*│* Tag: @${sender.replace('@s.whatsapp.net', '')}\n*│* Tipe : Image\n*│* Pesan: ${body ? body : '-'}\n*│* Waktu: ${moment.unix(int.timestamp).format('HH:mm:ss DD/MM/YYYY')}`
                         bambang.sendMessage(from, buff, MessageType.image, { contextInfo: {mentionedJid: okok}, caption: strConversation, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buffer, "mimetype": "application/octet-stream", "title": `${fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
                 fs.unlinkSync(savedFilename)
			} else if (int.type == 'audioMessageMessage') {
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await benny.downloadAndSaveMediaMessage(int.data, `./src/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation =  `*◪* *ANTIDELETE*\n*│*\n*│* Nama : ${pushname}\n*│* Tag: @${sender.replace('@s.whatsapp.net', '')}\n*│* Tipe : Audio\n*│* Pesan: ${body ? body : '-'}\n*│* Waktu: ${moment.unix(int.timestamp).format('HH:mm:ss DD/MM/YYYY')}`
                         bambanv.sendMessage(from, buff, MessageType.audio, { contextInfo: {mentionedJid: okok}, filename: `${pushname}`, mimetype: 'audio/mp4', quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buffer, "mimetype": "application/octet-stream", "title": `${fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
                   fs.unlinkSync(savedFilename)
                         
                    }
               }
	} catch (e) {
		console.log('Message : %s', color(e, 'green'))
		// console.log(e)
	}
})

           /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isAutoSticker = isGroup ? autostick.includes(from) : false
            const isKickArea = isGroup ? kickarea.includes(from) : false
            const isBadWord = isGroup ? badword.includes(from) : false
            const isVirus = isGroup ? virus.includes(from) : false
            const isAntiFirtex= isGroup ? antifirtex.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isImage = type === 'imageMessage'
			const chats = type == 'conversation' || type == 'extendedTextMessage'
            const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				bambang.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				bambang.sendMessage(hehe, teks, text)
			}
			const sendMediaURL = async(to, url, text="", mids=[]) =>{
		if(mids.length > 0){
		    text = normalizeMention(to, text, mids)
		}
		const fn = Date.now() / 10000;
		const filename = fn.toString()
		let mime = ""
		var download = function (uri, filename, callback) {
		    request.head(uri, function (err, res, body) {
			mime = res.headers['content-type']
			request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
		    });
		};
		download(url, filename, async function () {
		    console.log('done');
		    let media = fs.readFileSync(filename)
		    let type = mime.split("/")[0]+"Message"
		    if(mime === "image/gif"){
			type = MessageType.video
			mime = Mimetype.gif
		    }
		    if(mime.split("/")[0] === "audio"){
			mime = Mimetype.mp4Audio
		    }
		    bambang.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
		    
		    fs.unlinkSync(filename)
		});
	    }
			if (banChats == false) fake = 'Mr.Kingleo'
			if (banChats == true) fake = 'SELFBOT'
		const reply = (teks) => {
            bambang.sendMessage(from, teks, text, { quoted: ben })
		}
		const cheat = (teks) => {
			bambang.sendMessage(from, teks, text, { quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream", "title": `${fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		}
           const bisnis = (teks) => {
		bambang.sendMessage(from, teks, text, { quoted: {
    "key": {
      "remoteJid": setgrup,
	  "fromMe": false,
	  "participant": numbernye,
      "id": "0D5EAADD1166F55012EB42395DE58D61"
    },
    "message": {
      "productMessage": {
        "product": {
          "productImage": {
            "url": "https://mmg.whatsapp.net/d/f/AsFENZUsypKYO29kpNR2SrgcoBit6mDiApzGccFAPIAq.enc",
            "mimetype": "image/jpeg",
        "fileSha256": "iRrEuDPCvNe6NtOv/n+DARqlS1i2UbWqc25iw+qcwwo=",
        "fileLength": "19247",
        "height": 416,
        "width": 416,
        "mediaKey": "zvebSUI7DcnK9QHuUCJpNAtTsKai0MkvzrcNSYE5pHo=",
        "fileEncSha256": "t6pd+X7iNV/bwtti0KaOOjGBfOVhxPpnwnTs/QnD0Uw=",
        "directPath": "/v/t62.7118-24/29158005_1025181757972162_6878749864442314383_n.enc?oh=c97d5aea20257c3971a7248b339ee42d&oe=60504AC8",
        "mediaKeyTimestamp": "1613162019",
        "jpegThumbnail": setthumb
		},
          "productId": "3958959877488517",
          "title": fake,
          "description": "Kepoluah",
          "currencyCode": "USD",
          "priceAmount1000": "99999",
          "retailerId": "Kepolu",
          "url": "https://youtube.com/c/bennyhidayat",
          "productImageCount": 2
        },
        "businessOwnerJid": from
      }
    },
    "messageTimestamp": "1613442626",
    "status": "PENDING"
					}})
	}
		const sendMess = (hehe, teks) => {
			bambang.sendMessage(hehe, teks, text, { quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream", "title": "_*BROADCAST*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		}
		const acak = (teks) => {
			teks[Math.floor(Math.random() * teks.length)]
		}
		const sendPesan = (hehe, teks) => {
			bambang.sendMessage(hehe, teks, text, { "contextInfo": {mentionedJid: [sender], "forwardingScore": 999,"isForwarded": true}, quoted: { "key": { "participant": numbernye, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream", "title": "_Mr.Kingleo*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		}
            bambang.sendMessage(hehe, teks, text, { "contextInfo": {mentionedJid: [sender], "forwardingScore": 999,"isForwarded": true}, quoted: { "key": { "participant": numbernye, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream", "title": "_Mr.Kingleo*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		}
           const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? bambang.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : bambang.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    bambang.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			bambang.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    bambang.sendMessage(from, audio, mp3, {quoted:mek})
		  }
                    /*****************END SCURITY FEATURE ********/
	        //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 50
                const requiredXp = 50 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return bambang.sendMessage(from,`Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, text,{ quoted: mek})
                            bambang.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        bambang.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    bambang.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }
     	
        
      
            //function balance
            if (isRegistered && isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
          
//Anti virus function
		if (isGroup && !isGroup && !mek.key.fromMe && isKasar && isBotGroupAdmins) {
		    if (txt.length > 300) {
				if (isGroupAdmins) return cheat('Kamu admin grup jadi ngga di kick :)')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				cheat(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain kirim virus? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
				 console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
				 bambang.groupRemove(from, [kic])
				}
			}
			
			if (isGroup && !mek.key.fromMe && isVirus && isBotGroupAdmins) {
		    if (txt.includes('tol')) {
				if (isGroupAdmins) return cheat('Kamu admin grup jadi ngga di kick :)')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				 cheat(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain ngomong kotor? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
				 console.log(color('[KICK]', 'red'), color('Received a badword!', 'yellow'))
				 benny.groupRemove(from, [kic])
				}
			}
			
			if (isGroup && !mek.key.fromMe && isVirus && isBotGroupAdmins) {
		    if (txt.includes('anjing')) {
				if (isGroupAdmins) return cheat('Kamu admin grup jadi ngga di kick :)')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				 cheat(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain ngomong kotor? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
				 console.log(color('[KICK]', 'red'), color('Received a badword!', 'yellow'))
				 bambang.groupRemove(from, [kic])
				}
			}
			
			
			if (isGroup && !mek.key.fromMe && isVirus && isBotGroupAdmins) {
		    if (txt.includes('babi')) {
				if (isGroupAdmins) return cheat('Kamu admin grup jadi ngga di kick :)')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				 cheat(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain ngomong kotor? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
				 console.log(color('[KICK]', 'red'), color('Received a badword!', 'yellow'))
				 bambang.groupRemove(from, [kic])
				}
			}
			
			if (isGroup && !mek.key.fromMe && isVirus && isBotGroupAdmins) {
		    if (txt.includes('tot')) {
				if (isGroupAdmins) return cheat('Kamu admin grup jadi ngga di kick :)')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				 cheat(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain ngomong kotor? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
				 console.log(color('[KICK]', 'red'), color('Received a badword!', 'yellow'))
				 bambang.groupRemove(from, [kic])
				}
			}
			
			if (isGroup && !mek.key.fromMe && isVirus && isBotGroupAdmins) {
		    if (txt.includes('bokep')) {
				if (isGroupAdmins) return cheat('Kamu admin grup jadi ngga di kick :)')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				 cheat(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain ngomong kotor? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
				 console.log(color('[KICK]', 'red'), color('Received a badword!', 'yellow'))
				 bambang.groupRemove(from, [kic])
				}
			}
			
			if (isGroup && !mek.key.fromMe && isVirus && isBotGroupAdmins) {
		    if (txt.includes('jing')) {
				if (isGroupAdmins) return cheat('Kamu admin grup jadi ngga di kick :)')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				 cheat(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain ngomong kotor? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
				 console.log(color('[KICK]', 'red'), color('Received a badword text!', 'yellow'))
				 bambang.groupRemove(from, [kic])
				}
			}
			
			if (isGroup && !mek.key.fromMe && isVirus && isBotGroupAdmins) {
		    if (txt.includes('tit')) {
				if (isGroupAdmins) return cheat('Kamu admin grup jadi ngga di kick :)')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				 cheat(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain ngomong kotor? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
				 console.log(color('[KICK]', 'red'), color('Received a badword!', 'yellow'))
				 bambang.groupRemove(from, [kic])
				}
			}
			
			if (isGroup && !mek.key.fromMe && isVirus && isBotGroupAdmins) {
		    if (txt.includes('bangsat')) {
				if (isGroupAdmins) return cheat('Kamu admin grup jadi ngga di kick :)')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				 cheat(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain ngomong kotor? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
				 console.log(color('[KICK]', 'red'), color('Received a badword!', 'yellow'))
				 bambang.groupRemove(from, [kic])
				}
			}
			
			
			if (!mek.key.fromMe && txt.includes('benny')) {
				if (mek.key.fromMe) return sendMess(`6289636006352@s.whatsapp.net`, `Dari wa.me/${botNumber.replace('@s.whatsapp.net', '')}\nKatanya: ${body.slice(1)}`)
				sendMess(`6285656214208@s.whatsapp.net`, `*Nama* : ${pushname}\nwa.me/${sender.replace('@s.whatsapp.net', '')}\nKatanya: ${txt}`)
				}
			
			if (!mek.key.fromMe && txt.includes('Benny')) {
				if (mek.key.fromMe) return sendMess(`6289636006352@s.whatsapp.net`, `Dari wa.me/${botNumber.replace('@s.whatsapp.net', '')}\nKatanya: ${body.slice(1)}`)
				sendMess(`6285656214208@s.whatsapp.net`, `*Nama* : ${pushname}\nwa.me/${sender.replace('@s.whatsapp.net', '')}\nKatanya: ${txt}`)
				}
					
			
			if (isGroup && !ben.key.fromMe && isVirus && isBotGroupAdmins) {
		    if (txt.includes('goblok')) {
				if (isGroupAdmins) return cheat('Kamu admin grup jadi ngga di kick :)')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				cheat(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain ngomong kotor? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
				 console.log(color('[KICK]', 'red'), color('Received a badword!', 'yellow'))
				 bambang.groupRemove(from, [kic])
				}
			}
			
			if (isGroup && !mek.key.fromMe && isVirus && isBotGroupAdmins) {
		    if (txt.includes('gblk')) {
				if (isGroupAdmins) return cheat('Kamu admin grup jadi ngga di kick :)')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				 cheat(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain ngomong kotor? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
				 console.log(color('[KICK]', 'red'), color('Received a badword!', 'yellow'))
				 bambang.groupRemove(from, [kic])
				}
			}
			
			if (isGroup && !mek.key.fromMe && isVirus && isBotGroupAdmins) {
		    if (txt.includes('ajg')) {
				if (isGroupAdmins) return cheat('Kamu admin grup jadi ngga di kick :)')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				 cheat(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain ngomong kotor? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
				 console.log(color('[KICK]', 'red'), color('Received a badword!', 'yellow'))
				 bambang.groupRemove(from, [kic])
				}
			}
			
			if (isGroup && !mek.key.fromMe && isVirus && isBotGroupAdmins) {
		    if (txt.includes('anjg')) {
				if (isGroupAdmins) return cheat('Kamu admin grup jadi ngga di kick :)')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				 cheat(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain ngomong kotor? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
				 console.log(color('[KICK]', 'red'), color('Received a badword!', 'yellow'))
				 bambang.groupRemove(from, [kic])
				}
			}
			
			
// ANTI LINK GRUP
               	        if (mesejAnti.includes("://chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Admin Grup Mah Bebas:D')
		        bambang.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes(",izinkak")) return reply("Iya kak jangan spam ya")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf kak ${sender.split("@")[0]} Grup ini anti link, siap siap kamu di kick`)
		        setTimeout( () => {
			        bambang.groupRemove(from, [kic]).catch((e)=>{reply(`*BOT HARUS JADI ADMINâ—*`)})
		        }, 3000)
		        setTimeout( () => {
			        bambang.updatePresence(from, Presence.composing)
			        reply("Hedsot....")
		        }, 2000)
		        setTimeout( () => {
			        bambang.updatePresence(from, Presence.composing)
			        reply("Bismillah...")
		        }, 1000)
		        setTimeout( () => {
			        bambang.updatePresence(from, Presence.composing)
			        reply("Ready?...")
		        }, 0)
		  }

        if (isGroup && isBadWord) {
            if (bad.includes(messagesC)) {
                if (!isGroupAdmins) {
                    return reply("JAGA UCAPAN DONG!! 😠")
                        .then(() => bambang.groupRemove(from, sender))
                        .then(() => {
                            bambang.sendMessage(from, `*「 ANTI BADWORD 」*\nKamu dikick karena berkata kasar!`, text ,{quoted: mek})
                        }).catch(() => bambang.sendMessage(from, `Untung cya bukan admin, kalo admin udah cya kick!`, text , {quoted : mek}))
                } else {
                    return reply( "Tolong Jaga Ucapan Min 😇")
                }
            }
        }
        //funtion
if (!mek.key.remoteJid.endsWith('@g.us') && offline){
      if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
      heheh = ms(Date.now() - waktuafk) 
      bambang.sendMessage(mek.key.remoteJid,`@6285656214208 lagi Offline!\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan hubungi lagi nanti`, MessageType.text,{contextInfo:{ mentionedJid: ['6285656214208@s.whatsapp.net'],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./jadi.jpeg')}}}})
      }
    }   
    if (mek.key.remoteJid.endsWith('@g.us') && offline) {
      if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
          if (mek.message.extendedTextMessage.contextInfo != undefined){
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
          if (ment === "6285656214208@s.whatsapp.net"){
                        if (isAfk(mek.key.remoteJid)) return
                        addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktuafk)
            bambang.sendMessage(mek.key.remoteJid,`@6285656214208 lagi Offline!\n\n *Alasan :* ${alasanafk}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan hubungi lagi nanti`, MessageType.text,{contextInfo:{ mentionedJid: ['6285656214208@s.whatsapp.net'],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./jadi.jpeg')}}}})
          if (isGroup && autojoin == true) {
	if (txt.includes("://chat.whatsapp.com/")) {
		console.log(color('[AUTO JOIN]', 'cyan'), color('BRING ME THE HORIZON 2011', 'yellow'))
				 benny.query({
                 json:["action", "invite", `${txt.replace('https://chat.whatsapp.com/','')}`]
     }
        }
            }
          }
        }
      }
    }
           		  //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedText = type === 'extendedTextMessage'
		const isQuotedLink = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			 if (isOwner && mek.key.fromMe) console.log(color('Owner lewat', 'cyan'))
         //group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
					 if (!mek.key.fromMe && banChats === true) return
			switch(command) {
               case 'self':
          	if (!mek.key.fromMe) return
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	bambang.sendMessage(from, `「 *SELF-MODE* 」`, text,{quoted:mek})
          	break
              case 'public':
          	if (!mek.key.fromMe) return
          	if (banChats === false) return
          	uptime = process.uptime()
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	bambang.sendMessage(from, `「 *PUBLIC-MODE* 」`, text,{quoted:mek})
          	break
			  case 'wa.me':
				  case 'wame':
  bambang.updatePresence(from, Presence.composing) 
      const palal = {
          text: `「 SELF AND PUBLIC WHATSAPP 」\n\n_Request by_ : @${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
          contextInfo: { mentionedJid: [sender] }
    }
    bambang.sendMessage(from, palal, text,{ caption: text,contextInfo: { participant: '0@s.whatsapp.net', quotedMessage: { conversation: '*_WA ME_*' } } }) 
				break
        case 'deface':
if (!isRegistered && !mek.key.fromMe) return cheat(ind.only.Registered)
var gas = body.slice(8)
					var linknya = gas.split("|")[0];
					var titlenya = gas.split("|")[1];
					var imgbb = require('imgbb-uploader')
					run = getRandom('.jpeg')
					encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
media = await bambang.downloadAndSaveMediaMessage(encmedia)
ddatae = await imageToBase64(JSON.stringify(media).replace(/\"/gi,''))
fs.writeFileSync(`${run}`, ddatae, 'base64')
bambang.sendMessage(from, linknya, text, { title: "Hacked by Leo", thumbnail: fs.readFileSync(`./${run}`), quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "B391837A58338BA8186C47E51FFDFD4A"
    },
    "message": {
      "documentMessage": {
       "jpegThumbnail": setthumb,
	  "mimetype": "application/octet-stream",
        "title": "_*Mr.kingleo*_",
        "fileLength": "36",
        "pageCount": 0,
        "fileName": `${fake}`
      }
    },
    "messageTimestamp": "1614069378",
    "status": "PENDING"
  }
					})
					break
       case 'hekweb':
if (!isRegistered && !mek.key.fromMe) return cheat(ind.only.Registered)
var gas = body.slice(8)
if (isQuotedImage) {
					var linknya = gas.split("|")[0];
					var titlenya = gas.split("|")[1];
					var descnya = gas.split("|")[2];
					var jadinya = gas.split("|")[3];
					var imgbb = require('imgbb-uploader')
			 		run = getRandom('.jpeg')
					encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
media = await bambang.downloadAndSaveMediaMessage(encmedia)
ddatae = await imageToBase64(JSON.stringify(media).replace(/\"/gi,''))
bambang.sendMessage(from, {text: `${linknya}`, matchedText: `${linknya}`, canonicalUrl: `${jadinya}`, description: `${descnya}`, title: `${titlenya}`, jpegThumbnail: ddatae}, 'extendedTextMessage', {detectLinks: false})
} else if (isQuotedSticker) {
	var linknya = body.slice(8)
	encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            media = await bambang.downloadAndSaveMediaMessage(encmedia)
				anu = fs.readFileSync(media)
				bambang.sendMessage(from, {text: `${linknya}`, matchedText: `${linknya}`, canonicalUrl: `https://youtube.com/c/bennyhidayat`, description: `Hacked by ${pushname}`, title: `Terhemked :v`, jpegThumbnail: anu}, 'extendedTextMessage', {detectLinks: false})
			} else if (!isQuotedImage) {
				try {
					ppimg = await bambang.getProfilePicture(sender)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				ddatae = await imageToBase64(JSON.stringify(ppimg).replace(/\"/gi,''))
				bambang.sendMessage(from, {text: `https://${gas}.com`, matchedText: `https://${gas}.com`, canonicalUrl: `https://${gas}.com`, description: `Hacked by ${pushname}`, title: `Terhemked :v`, jpegThumbnail: ddatae}, 'extendedTextMessage', {detectLinks: false})
			}
break
        case 'rumus':
									if (!isRegistered && !mek.key.fromMe) return cheat(ind.only.Registered)
									if (!Number(args[1])) return reply('Nomor harus berupa angka!')
									if (args[0] == 'persegi') {
									     entah = args[1]
                    imni = await rumus.datar.keliling.persegi(entah, true)
					console.log(imni)
                    cheat(imni) 
									} else if (args[0] == 'segitiga') {
										entah = body.slice
                    imni = await rumus.datar.keliling.segitiga(entah, true)
					console.log(imni)
                    cheat(imni) 
									}
                    break
         case 'bilangangka':
                  case 'angkabilang':
					if (!isRegistered && !mek.key.fromMe) return cheat(ind.only.Registered)
					if (!Number(args[0])) return reply('Angkanya mana?')
                    entah = body.slice(13)
                    imni = await angkab(entah)
                    cheat(`*${imni}*`)
                    break
        case 'kickbot':
					members_id = []
					for (let mem of groupMembers){
					members_id.push(mem.jid)
					console.log(mem)
					if (pushname.includes('BOT')) {
						reply('Terdeteksi ada bot disini segera di kick!')
					anu = `${sender.split("@")[0]}`
				bambang.groupRemove(from, [anu])
            }
        }
        break
    case 'fakethumb':
  case 'fakethumbnail':
  if (!isRegistered && !mek.key.fromMe) return cheat(ind.only.Registered)
  if (!isQuotedImage) return reply('Reply gambarnya!')
				if ((isMedia || isQuotedImage) && args.length == 0) 
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
media = await bambang.downloadAndSaveMediaMessage(ger)
bambang.sendMessage(from, fs.readFileSync(media), image, {thumbnail: fs.readFileSync("./src/bokep.jpg")})
break
case 'stickfakethumb':
  if (!isRegistered && !mek.key.fromMe) return cheat(ind.only.Registered)
  if (!isQuotedSticker) return reply('Reply stickernya!') 
ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await bambang.downloadAndSaveMediaMessage(ger)
angel = fs.readFileSync("./src/bokep.jpg")
base64 = angel.toString('base64')
bambang.sendMessage(from, fs.readFileSync(media), sticker, {jpegThumbnail: base64})
break
 case 'sendfakethumb':
 if (!isRegistered && !mek.key.fromMe) return cheat(ind.only.Registered)
 if (!isQuotedImage) return reply('Reply gambarnya!')
			if (isMedia || isQuotedImage)
			if (args[0].includes('-')) return reply('Block contoh: 6285656214208')
			if (args[0].includes('+')) return reply('Block contoh: 6285656214208')
			if (args[0].includes(' ')) return reply('Block contoh: 6285656214208')
			targeten = `${args[0]}@s.whatsapp.net`
ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
media = await bambang.downloadAndSaveMediaMessage(ger)
bambang.sendMessage(targeten, fs.readFileSync(media), image, {thumbnail: fs.readFileSync("./src/bokep.jpg")})
break
  case 'setthumb':
  case 'setthumbnail':
  if (!isRegistered && !mek.key.fromMe) return cheat(ind.only.Registered)
				    if (!isOwner && !mek.key.fromMe) return bambang.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*Mr.Kingleo*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
			if ((isMedia || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
const ehgmediab = await bambang.downloadAndSaveMediaMessage(ger)
nihiyab = await imageToBase64(ehgmediab)
setthumb = `${nihiyab}` 
					cheat(`*Sukses mengubah thumbnail fake reply*`)
			} else if (isQuotedSticker) {
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            media = await bambang.downloadAndSaveMediaMessage(encmedia)
				anu = fs.readFileSync(media)
			setthumb = anu
			cheat(`*Sukses mengubah thumbnail fake reply*`)
			}
					break
  case 'join':
					bambang.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply('Berhasil Gabung ke grup')
break
case 'addvn':
if (!isRegistered && !mek.key.fromMe) return cheat(ind.only.Registered)
	if (!isQuotedAudio) return cheat('Reply vnnya!')
	svst = body.slice(7)
	if (!svst) return cheat('Nama audionya apa?')
	boij = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	delb = await bambang.downloadMediaMessage(boij)
	audionye.push(`${svst}`)
	fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)
	fs.writeFileSync('./src/audio.json', JSON.stringify(audionye))
	benny.sendMessage(from, `Sukses Menambahkan Vn\nCek dengan cara ${prefix2}listvn`, MessageType.text, {quoted: ben})
	break
case 'getvn':
if (!isRegistered && !mek.key.fromMe) return cheat(ind.only.Registered)
	namastc = body.slice(7)
	buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)
	bambang.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true})
	break
case 'listvn':
case 'vnlist':
if (!isRegistered && !mek.key.fromMe) return cheat(ind.only.Registered)
	teks = 'List Vn:\n'
	for (let awokwkwk of audionye) {
	teks += `- ${awokwkwk}\n`
	}
	teks += `Total : ${audionye.length}`
	bambang.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": audionye}})
	break
case 'addimage':
if (!isRegistered && !mek.key.fromMe) return cheat(ind.only.Registered)
	if (!isQuotedImage) return cheat('Reply imagenya!')
	svst = body.slice(10)
	if (!svst) return cheat('Nama imagenya apa?')
	boij = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	delb = await bambang.downloadMediaMessage(boij)
	imagenye.push(`${svst}`)
	fs.writeFileSync(`./src/image/${svst}.jpeg`, delb)
	fs.writeFileSync('./src/image.json', JSON.stringify(imagenye))
	benny.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix2}listimage`, MessageType.text, {quoted: mek})
	break
case 'getimage':
if (!isRegistered && !mek.key.fromMe) return cheat(ind.only.Registered)
	namastc = body.slice(10)
	buffer = fs.readFileSync(`./src/image/${namastc}.jpeg`)
	bambang.sendMessage(from, buffer, image, {quoted: mek, caption: `*Result From Database* : ${namastc}.jpeg`})
	break
case 'imagelist':
case 'listimage':
if (!isRegistered && !mek.key.fromMe) return cheat(ind.only.Registered)
	teks = 'List Video:\n'
	for (let awokwkwk of imagenye) {
	teks += `- ${awokwkwk}\n`
	}
	teks += `Total : ${imagenye.length}`
	bambang.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": imagenye}})
	break
case 'addvideo':
if (!isRegistered && !mek.key.fromMe) return cheat(ind.only.Registered)
	if (!isQuotedVideo) return cheat('Reply videonya!')
	svst = body.slice(10)
	if (!svst) return cheat('Nama videonya apa?')
	boij = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	delb = await bambang.downloadMediaMessage(boij)
	videonye.push(`${svst}`)
	fs.writeFileSync(`./src/video/${svst}.mp4`, delb)
	fs.writeFileSync('./src/video.json', JSON.stringify(videonye))
	bambang.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix2}listvideo`, MessageType.text, {quoted: mek})
	break
case 'getvideo':
if (!isRegistered && !mek.key.fromMe) return cheat(ind.only.Registered)
	namastc = body.slice(10)
	buffer = fs.readFileSync(`./src/video/${namastc}.mp4`)
	bambang.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
	break
case 'listvideo':
case 'videolist':
if (!isRegistered && !mek.key.fromMe) return cheat(ind.only.Registered)
	teks = 'List Video:\n'
	for (let awokwkwk of videonye) {
	teks += `- ${awokwkwk}\n`
	}
	teks += `Total : ${videonye.length}`
	bambang.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": videonye}})
	break
     case 'asupan+62': // Update By RzkyO & onlydevXSec404
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/asupan?apikey=MRKINGLEO606`, {method: 'get'})
				buffer = await getBuffer(anu.result.url)
				bambang.sendMessage(from, buffer, video, {mimetype:  'video/mp4', caption: 'Nehh asupan nya.', quoted: mek})
				break
		case 'asupanamel': // Update By RzkyO & onlydevXSec404
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/asupanamel?apikey=MRKINGLEO606`, {method: 'get'})
				buffer = await getBuffer(anu.result.url)
				bambang.sendMessage(from, buffer, video, {mimetype:  'video/mp4', caption: 'Nehh asupan nya.', quoted: mek})
				break
		case 'asupanrana': // Update By RzkyO & onlydevXSec404
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/asupanrana?apikey=MRKINGLEO606`, {method: 'get'})
				buffer = await getBuffer(anu.result.url)
				bambang.sendMessage(from, buffer, video, {mimetype:  'video/mp4', caption: 'Nehh asupan nya.', quoted: mek})
				break
		case 'asupankaia': // Update By RzkyO & onlydevXSec404
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/asupankaia?apikey=MRKINGLEO606`, {method: 'get'})
				buffer = await getBuffer(anu.result.url)
				bambang.sendMessage(from, buffer, video, {mimetype:  'video/mp4', caption: 'Nehh asupan nya.', quoted: mek})
				break
		case 'asupanuna': // Update By RzkyO & onlydevXSec404
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/asupanuna?apikey=MRKINGLEO606`, {method: 'get'})
				buffer = await getBuffer(anu.result.url)
				bambang.sendMessage(from, buffer, video, {mimetype:  'video/mp4', caption: 'Nehh asupan nya.', quoted: mek})
				break
			  case 'asupanjung': // Update By RzkyO & onlydevXSec404
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/asupanjungputri?apikey=MRKINGLEO606`, {method: 'get'})
				buffer = await getBuffer(anu.result.url)
				bambang.sendMessage(from, buffer, video, {mimetype:  'video/mp4', caption: 'Nehh asupan nya.', quoted: mek})
				break
         case 'asupangea': // Update By RzkyO & onlydevXSec404
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/asupanghea?apikey=MRKINGLEO606`, {method: 'get'})
				buffer = await getBuffer(anu.result.url)
				bambang.sendMessage(from, buffer, video, {mimetype:  'video/mp4', caption: 'Nehh asupan nya.', quoted: mek})
				break
          case 'asupanjane': // Update By RzkyO & onlydevXSec404
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/asupanjane?apikey=MRKINGLEO606`, {method: 'get'})
				buffer = await getBuffer(anu.result.url)
				bambang.sendMessage(from, buffer, video, {mimetype:  'video/mp4', caption: 'Nehh asupan nya.', quoted: mek})
				break
        case 'asupansalwa': // Update By RzkyO & onlydevXSec404
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/asupansalwa?apikey=MRKINGLEO606`, {method: 'get'})
				buffer = await getBuffer(anu.result.url)
				bambang.sendMessage(from, buffer, video, {mimetype:  'video/mp4', caption: 'Nehh asupan nya.', quoted: mek})
				break
        case 'asupanruby': // Update By RzkyO & onlydevXSec404
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/asupanruby?apikey=MRKINGLEO606`, {method: 'get'})
				buffer = await getBuffer(anu.result.url)
				bambang.sendMessage(from, buffer, video, {mimetype:  'video/mp4', caption: 'Nehh asupan nya.', quoted: mek})
				break
          case 'storyepep': // Update By RzkyO & onlydevXSec404
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/storyepep?apikey=MRKINGLEO606`, {method: 'get'})
				buffer = await getBuffer(anu.result.url)
				bambang.sendMessage(from, buffer, video, {mimetype:  'video/mp4', caption: 'Nehh kak.', quoted: mek})
				break
             case 'doaharian': // Update By RzkyO & onlydevXSec404	
				bambang.updatePresence(from, Presence.composing) 
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/doaharian?apikey=MRKINGLEO606`, {method: 'get'})
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Nama Doa:* : ${i.title}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Translation* : ${i.translation}\n=================\n`
				}
				reply(teks)
				break
		case 'niatsholat': // Case By Arga
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/niatshalat?apikey=MRKINGLEO606`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Sholat : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.terjemahan}\n=================\n`
				}
				reply(teks.trim())
				break
		case 'bacaansholat': // Case By Arga
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/bacaanshalat?apikey=MRKINGLEO606`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Bacaan : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.terjemahan}\n=================\n`
				}
				reply(teks.trim())
				break
		case 'jadwalsholat': // Update By RzkyO & onlydevXSec404
				if (args.length < 1) return reply(`kotanya mana bang?`)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/jadwalshalat?kota=${body.slice(14)}&apikey=MRKINGLEO606`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Tanggal : ${i.tanggal}\n*Imsyak* : ${i.imsyak}\n*Shubuh* : ${i.shubuh}\n*Terbit* : ${i.terbit}\n*Dhuha* : ${i.dhuha}\n*Dzuhur* : ${i.dzuhur}\n*Ashar* : ${i.ashr}\n*Magrib* : ${i.magrib}\n*Isya* : ${i.isya}\n=================\n`
				}
				reply(teks.trim())
				break
		case 'kisahnabi': // Update By RzkyO & onlydevXSec404
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/kisahnabi?nabi=${body.slice(11)}&apikey=MRKINGLEO606`)
				buffer7 = await getBuffer(anu.result.nabi.image)
				teks = `*HASIL*\n\n*➸ Nama Nabi :* ${anu.result.nabi.nabi}\n*➸ Lahir :* ${anu.result.nabi.lahir}\n*➸ Umur :* ${anu.result.nabi.umur}\n*➸ Tempat :* ${anu.result.nabi.tempat}\n*➸ Kisah :* ${anu.result.nabi.kisah}`
				bambang.sendMessage(from, buffer7, image, {quoted: mek})
				break
		case 'tahlil': // Update By RzkyO & onlydevXSec404
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/tahlil?apikey=MRKINGLEO606`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result.data) {
				teks += `Title : ${i.title}\n*Arab* : ${i.arabic}\n*Terjemah* : ${i.translation}\n=================\n`
				}
				reply(teks.trim())
				break
		case 'ayatkursi': // Update By RzkyO & onlydevXSec404
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/ayatkursi?apikey=MRKINGLEO606`)
				teks = `➸ *Arab* : ${anu.result.data.arabic}\n*➸ Latin :* ${anu.result.data.latin}\n*➸ Arti :* ${anu.result.data.translation}\n*➸ Tafsir :* ${anu.result.data.tafsir}`
				bambang.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "./src/jpg", "caption": "_MyBot OnlyDev BTR_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'covidglobal': // Update By RzkyO & onlydevXSec404
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/covidworld?apikey=MRKINGLEO606`)
				teks = `➸ *Total Cases* : ${anu.result.totalCases}\n*➸ Recovered :* ${anu.result.recovered}\n*➸ Deaths :* ${anu.result.deaths}\n*➸ Active Cases :* ${anu.result.activeCases}\n*➸ Closed Cases :* ${anu.result.closedCases}\n*➸ Last Update :* ${anu.result.lastUpdate}`
				bambang.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "src/jpg", "caption": "_MyBot OnlyDev BTR_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'hadits': // Update By RzkyO & onlydevXSec404
				if (args.length < 1) return reply(`kitab + nomor nya mana om? contoh: hadits muslim|116`)
				ct = body.slice(8)
				ll1 = ct.split("|")[0];
                ll2 = ct.split("|")[1];
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/hadits?kitab=${ll1}&nomor=${ll2}&apikey=MRKINGLEO606`)
				teks = `➸ *Name Hadits* : ${anu.result.data.name}\n*➸ Number Hadits :* ${anu.result.data.contents.number}\n*➸ Arab :* ${anu.result.data.contents.arab}\n*➸ Latin :* ${anu.result.data.contents.id}`
				bambang.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "./src/jpg", "caption": "_MyBot OnlyDev BTR_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'quran': // Update By RzkyO & onlydevXSec404
				if (args.length < 1) return reply(`surah + ayat berapa mana om? note: surah harus berupa nomor, contoh: quran 1|2`)
				ct = body.slice(7)
				ll1 = ct.split("|")[0];
                ll2 = ct.split("|")[1];
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/quran?surah=${ll1}&ayat=${ll2}&apikey=MRKINGLEO606`)
				teks = `➸ *Juz Ke* : ${anu.result.data.meta.juz}\n*➸ Text Arab :* ${anu.result.data.text.arab}\n*➸ Latin ID :* ${anu.result.data.text.transliteration.en}\n*➸ Arti ID :* ${anu.result.data.translation.id}\n*➸ Tafsir Pendek :* ${anu.result.data.tafsir.id.short}\n*➸ Tafsir Panjang :* ${anu.result.data.tafsir.id.long}\n*➸ Ayat Ke :* ${anu.result.data.surah.number}\n*➸ Nama Surah Arab Pendek :* ${anu.result.data.surah.name.short}\n*➸ Nama Surah Arab Panjang :* ${anu.result.data.surah.name.long}\n*➸ Nama Surah ID :* ${anu.result.data.surah.name.transliteration.id}\n*➸ Arti Nama Surah ID :* ${anu.result.data.surah.name.translation.id}\n*➸ Revelation Arab :* ${anu.result.data.surah.revelation.arab}\n*➸ Revelation ID :* ${anu.result.data.surah.revelation.id}\n*➸ Tafsir ID :* ${anu.result.data.surah.tafsir.id}`
				bambang.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "./src/jpg", "caption": "_MyBot OnlyDev BTR_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'quotesislami':
					//Case By PojanGanz
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const islami =['Hal yang paling manis adalah ketika seseorang menyebutkan nama kamu di tahajjud mereka.','Ya Allah panggillah diriku dan orang tuaku ke baitullah dalam keadaan sehat walafiat.','Ya Allah semoga seseorang yang engkau jodohkan denganku adalah seseorang yang saat ini sedang aku perjuangkan.','Allah tidak pernah tidur. Semua pasti akan di balas kelak. Orang-orang jahat yang sekarang bisa tertawa karena banyak uang, berkuasa, tapi besok-besok mereka semua di balas seadil-adilnya.','Jangan putus asa, Allah tidak akan mengecewakan hambanya yang ingin memperbaiki diri.','Percayalah orang yang menasehatimu untuk sholat adalah dia yang paling mencintaimu.','Bukannya Allah tidak tahu sedihmu, Tapi Allah tahu kalau kamu itu kuat.','Bacalah Al-Quran, Ia akan menenangkan hatimu meskipun engkau tidak memahami artinya.','Saat kita sakit hati sama omongan orang, saat itu juga sebenarnya Allah ngajarin kita buat jaga omongan kita ke orang lain. Sederhana bukan?','Di dunia ini orang paling baik pun bisa dicela, dan bahkan orang paling jahat sekalipun bisa di bela.','Al-Quran adalah teman yang tidak akan mengecewakan kamu di dunia dan akhirat.','Cara Allah menjawab doa hambanya : Iyaa.. aku beri untukmu sekarang. Tunggu, aku ingin melihat dulu perjuanganmu. Tidak, aku punya yang lebih baik untukmu.','Dan Allah tidak akan mengadzab mereka selama mereka mau Memohon ampun kepada-Nya. [Al-Anfaal, 8:33]','Kesabaran itu ada dua macam : Sabar atas sesuatu yang tidak kamu ingin. Sabar menahan diri dari sesuatu yang kamu ingini. -Ali bin Abi Thalib','Ambillah kebenaran, jika kamu telah mendengarnya. Karena sungguh di atas kebenaran ada cahaya. (HR. Abu Daud)','Sholatlah agar hatimu tenang, Istighfarlah agar kecewamu hilang, Berdoalah agar bahagiamu segera datang.','Surga itu mahal.. Akan tetapi orang miskin tetap mampu membelinya, Karena harganya bukan pada Harta melainkan Taqwa.','Ya Allah... Perbaikilah lisanku, Perbaikilah hatiku, Perbaikilah akhlakku, Perbaikilah hidupku, Aamiin..','Semoga hari ini Allah memudahkan setiap urusan kita, melapangkan hati kita serta meringankan langkah kita, dalam kebaikan kita Aamiin.','Peganglah aku, bacalah aku setiap hari, karena aku akan menjadi penerang didalam kuburmu nanti. #Al-Quran','Kematian..Kamu terlalu banyak bercanda. Hingga sampai kamu lupa, kematian mungkin tidak menunggumu selesai tertawa.','Jangan khawatirkan rizkimu, karena Allah telah menjaminnya untukmu, namun khawatirkanlah amalanmu, karena Allah tidak menjamin surga-Nya untukmu..','Wahai orang-orang yang beriman! Ingatlah kepada Allah, Dengan mengingat (nama-Nya) sebanyak-banyaknya dan bertasbihlah kepada-nya pada waktu pagi dan petang.','Aku sangat ingin menjadi pemburu surga. Namun aku lupa bahwa aku juga buronan neraka.','Karena aku percaya apapun yang menjadi milikku akan tetap menjadi milikku. Sejauh apapun dia (mencoba) pergi. Sejauh apapun usaha orang lain ingin merebutnya dariku. Aku hanya perlu percaya pada Allah bahwa yang menjadi milikku tidak akan pernah menjadi milik orang lain.','Andai hidayah itu seperti buah yang bisa kubeli, maka akan kubeli berkeranjang-keranjang untuk aku bagikan kepada orang-orang yang aku cintai.','Bila kamu tidak melihatku di syurga. Tolong tanya kepada Allah dimana aku, Tolonglah aku ketika itu..','Hanya Allah yang mengerti bagaimana sulitnya menahan sabar tanpa harus bercerita panjang lebar.','Letakkan hpmu lalu ambil air wudhu, shalatlah kamu, Allah menunggu curhatan darimu.','Maafin aku Ya Allah Gara gara aku mencintai dia tapi tidak pasti, sampai aku lupa mencintai mu juga.','Akan ada saatnya setelah salam dari sholatku, tanganmu yang pertama kali kusentuh.','Mungkin maksud Tuhan mempertemukan kamu dengannya adalah, sekedar mengingatkan bahwa tidak semua yang kamu inginkan bisa kamu dapatkan.','Percayalah Seorang wanita yang mencintai Allah. Allah akan berikan lelaki terbaik untuk menjaganya.','Berterimakasihlah kepada tuhan, Yang memberimu hidup dan kehidupan.','Mungkin kamu hanya harus sedikit peka untuk menyadari petunjuk dari Tuhan atas doa-doamu.']
					const isl = islami[Math.floor(Math.random() * islami.length)]
					islam = await getBuffer(`https://i.ibb.co/dPnjvD3/IMG-20210127-WA0018.jpg`)
					bambang.sendMessage(from, islam, image, { quoted: mek, caption: '*Quotes Islami*\n\n'+ isl })
					await limitAdd(sender)
					break	
		case 'quotesnasehat':
					//Case By PojanGanz
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const nasehat =['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Ingat iya.. Perilaku mu bisa mengubah perasaan seseorang.','Setia itu bukan yang selalu ada, namun saat tak bersama dia tahu hatinya milik siapa.','Kamu perlu belajar satu hal : "Menghargai seriusnya seseorang."','Jangan cari yang sempurna, Sempurnakan saja yang ada.','Ketika seseorang menghina kamu, itu adalah sebuah pujian bahwa selama ini mereka menghabiskan banyak waktu untuk memikirkan kamu, bahkan ketika kamu tidak memikirkan mereka.','Yang terbaik tidak akan hilang. Jika dia hilang maka dia bukanlah yang terbaik.','Percayalah. Suatu hari nanti pasti akan ada seseorang yang bangga memilikimu.','Tidak ada karya yang pernah dibuat oleh seorang seniman yang malas.','Jika seseorang memberimu perhatian jangan pernah mengabaikannya karena suatu saat perhatian sekecil itu kamu rindukan saat kamu kesepian.','Bersyukurlah.. Untuk segala apapun yang engkau miliki saat ini, sebab nikmat itu akan bertambah ketika kamu dapat mensyukuri apa yang telah diberi saat ini. #Buat diri ini jangan banyak mengeluh yah.','Ada perbedaan antara menyerah dan tau kapan kamu merasa cukup dalam berusaha.','Jangan sampai kesenanganmu menyusahkan orang lain. Jangan pula kesusahanmu menyenangkan orang lain.','Semakin banyak kamu memberi, semakin banyak pula yang akan kembali padamu.','Jangan pernah bandingkan akhir kesuksesan orang lain dengan pertengahan prosesmu.','Lakukan apa yang kamu bisa, dengan apa kamu miliki, dimanapun kamu berada.','Hidup memang bukan balapan, tetapi kamu memang perlu untuk terus bergerak maju.','NIKMATI HIDUPMU, LUPAKAN UMURMU.','Sebaik-baiknya permintaan maaf adalah membaiknya tingkah laku.','Belajarlah memahami bahwa tidak semua keinginan bisa terpenuhi, barangkali itu adalah obat yang terbaik untuk mencegah kecewa dan sakit hati.','Kamu akan menemukan yang terbaik, ketika kamu sudah berhenti membanding-bandingkan.','Jangan menilai orang dari masa lalunya karena kita semua sudah tidak hidup disana. Semua orang bisa berubah, biarkan mereka membuktikannya.','Jika dia tidak merasakan kehadiranmu, buat dia merasakan kepergianmu.','Orang pintar mampu memecahkan masalah. Orang bijak mampu menghindarinya.','Bersikap tidak lagi peduli lebih baik dari pada balas dendam.','Tegas akan diri sendiri, buang pikiran negatif dan lakukan yang baik. Kegelisahan hanya milik mereka yang putus asa.','Jangan pikirkan kegagalan kemarin, hari ini sudah lain, sukses pasti diraih selama semangat masih menyengat.','Memaafkanmu bukan berarti memberimu kesempatan sekali lagi.','Berubah menjadi lebih baik adalah pilihan. Tapi, merasa paling baik adalah kesalahan.','Jangan pernah bandingkan dirimu dengan orang lain, tapi bandingkanlah dengan dirimu yang lalu, apakah hari ini sudah lebih baik?','Ketahuilah orang yang paling sering memberi nasihat kepadamu, itulah orang yang paling mencintai kamu.','Jangan pernah berhenti belajar, karena hidup tidak pernah berhenti mengajarkan.','Salah satu tanda dirimu tidak berakhlak adalah main HP ketika ada orang yang berbicara.','Raihlah kesuksesan yang tidak seseorangpun berfikir kamu bisa meraihnya. Buktikan pada mereka kalau kamu bisa!','Kesalahan adalah bukti nyata kalau kamu pernah mencoba. Jangan takut salah. Takutlah untuk melakukan kesalahan-kesalahan yang sama dua kalinya.','Cepat atau lambat bukan masalah. Selama kamu tetap bergerak maju, tidak ada akhirnya kamu akan tetap sampai tidak ada tujuan.','Jika kamu tidak bisa membahagiakan orang lain, Setidaknya janganlah kamu tambah dukanya.','Teruslah berusaha sampai temanmu berkata kepadamu "Sombong iya sekarang."','Ketika kamu melakukan sebuah kesalahan, Akuilah dan jangan ragu untuk meminta maaf. Tidak pernah ada satupun orang dalam sejarah yang mati tersedak karena menelan gengsinya sendiri.','Syukuri yang menyayangimu, Maafkan yang menyakitimu.','Tunjukkan keburukanmu, lalu lihat siapa yang bertahan.','Kamu boleh lelah, tetapi tidak boleh menyerah untuk selamanya.','Jangan pernah lupa bilang "Terima Kasih." Jangan pernah gengsi bilang "Maaf." Jangan pernah jadi terlalu sombong untuk bilang "Tolong."','Masa lalu tidak bisa berubah, diubah, dilupakan, ataupun di hapus. Masa lalu hanya bisa di terima','Kita ini.. sangat pintar menghakimi, Namun bodoh dalam memperbaiki diri.','Tidak peduli seberapa baiknya kamu, Kebaikan tidak akan berarti apa-apa jika kamu memberikan kepada orang yang salah.','Orang sabar selalu menang, Orang tamak selalu rugi, Orang marah selalu kalah, Orang baik selalu diuji.','Carilah tempat dimana kamu bisa dihargai, Bukan dibutuhkan. Karena banyak orang mencarimu hanya saat butuh saja, Hingga lupa bagaimana cara menghargaimu.','Melupakan orang yang melukaimu adalah hadiahmu untuk mereka. Memaafkan orang yang melukaimu adalah hadiahmu untuk dirimu sendiri.','Maafkan orang yang menyakitimu... Bukan karena mereka pantas di maafkan, Tapi karena kamu harus berbahagia.','Tetaplah kuat, Tetaplah positif, Buatlah mereka bertanya-tanya bagaimana kamu masih tetap bisa tersenyum.','Jangan meninggalkan yang pasti demi yang mungkin. Sebab semua kemungkinan, belum tentu menjadi kepastian.','Seseorang pernah berkata padaku, Merelakan bukan berarti menyerah, Tapi tidak bisa dipaksakan.','Ikuti alurnya, Nikmati prosesnya, Tuhan tau kapan kita harus bahagia.','Usia hanyalah angka, Hanya mereka yang terus berusaha yang berhasil.','Jangan pernah meremehkan siapapun! Karena sukses adalah balas dendam Terbaik.','Pria sejati.. Harus menyelesaikan apa yang sudah dimulai.','Jika kau ingin terbang, Kau harus melepaskan hal-hal yang membuatmu berat.','Siapapun yang meremehkan mu hari ini, Suatu saat harus kamu lewati.','Jangan Mencintai terlalu mudah, Jangan Percaya terlalu cepat, Jangan Berhenti terlalu dini, Jangan Berharap terlalu tinggi, Jangan Bicara terlalu banyak.','Jadilah orang baik tapi jangan biarkan orang lain mengambil keuntungan dari mu. Ketahuilah kapan kamu harus bilang tidak.','Sahabat sejati adalah mereka tau semua kelemahan mu, Tapi tidak menggunakan nya untuk menjatuhkan mu.','Ada tiga hal yang harus dimiliki dalam hidup yaitu : Perubahan, Pilihan dan Prinsip.','Orang bodoh mengira dirinya bijak. orang bijak tau dirinya bodoh.','Jatuh cintalah seperlunya.. Kemudian patah hatilah secukupnya. Karena semua ada porsinya, Karena semua ada masanya.','Kita tidak pernah tau jalan hidup seseorang.. Maka ada baiknya jika kita tidak menghakiminya atas keputusan dalam hidupnya.','Jangan pernah menyesal mengenal seseorang dalam hidupmu, Orang baik akan memberi mu Kebahagiaan, Orang jahat akan memberi mu Pengalaman, Bahkan seburuk-buruk manusia akan memberi mu Pelajaran.','Jangan menilai kedewasaan dari usia seseorang, Karena itu bukan jaminan.']
					const nsh = nasehat[Math.floor(Math.random() * nasehat.length)]
					nase = await getBuffer(`https://i.ibb.co/bspYPtC/IMG-20210125-WA0018.jpg`)
					bambang.sendMessage(from, nase, image, { quoted: mek, caption: '*Quotes Nasehat*\n\n'+ nsh })
					await limitAdd(sender)
					break	
		case 'quotescinta':
					//Case By PojanGanz
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const cinta =['SABAR MASIH TAHAP PEMBUATAN','MASIH TAHAP PEMBUATAN']
					const cin = cinta[Math.floor(Math.random() * cinta.length)]
					cta = await getBuffer(`https://i.ibb.co/vL5x6F7/IMG-20210126-WA0018.jpg`)
					bambang.sendMessage(from, cta, image, { quoted: mek, caption: '*Quotes Cinta*\n\n'+ cin })
					await limitAdd(sender)
					break
		case 'quotesmotivasi':
					//Case By PojanGanz
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const motiv =['Nilai sebuah tindakan terletak dalam usaha menyelesaikan sampai tuntas','Kebaikan adalah seorang yang matanya penuh perhatian, serta tangannya yang penuh manfaat','Hiduplah seperti kamu akan mati besok, dan berbahagialah seperti kamu akan hidup selamanya','Kita tidak usah saling menyalahkan, agar dimasa depan tak ada yang menuntut akan kesalahan','Ketika semua hal tidak sejalan dengan anda, ingatlah bahwa sebuah pesawat terbang melawan angin, bukan dengan mengikuti angin','Belajarlah menikmati apa yang kamu miliki, itu akan membuat hidupmu lebih bernilai','Selalu ada kegelapan yang tergelap sebelum terbitnya fajar','Sahabat itu seperti bintang, tak selalu Nampak tetapi selalu ada dihati','Sibuk bukanlah jaminan karir karena hasil jauh lebih didengar orang','semua kemajuan tidak akan ada tanpa kesalahan, kesalahan adalah bagian dari kemajuan selama diakui dan diperbaiki','Sukses meninggalkan jejak, gagal meninggalkan pelajaran, diam meninggalkan penyesalan','Keraguan bersahabat dekat dengan kegagalan','uang tidak merusak seseorang, keserakahan lah yang merusak manusia','Kepercayaan tidak bisa dibeli, tapi kepercayaan bisa dipelihara','Impian, target, kemauan dan tujuan semuanya sia-sia tanpa tindakan','usia bisa berbohong tapi kedewasaan tidak','Ada yang lebih berharga dari uang dan emas yaitu waktu','Tidak ada yang gagal mereka hanya berhenti terlalu cepat','Terasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Seseorang tidak bisa sukses seringkali karena kurangnya keberanian untuk mencobaterasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Bicaralah secukupnya, lakukanlah semampunya. Jangan melakukan sebaliknya','Ada saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','jangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','Kadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','atasan hanya memberikan tugas berat pada karyawan terbaik, Allah hanya memberikan ujian pada pada manusia terbaikKadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','berusaha dan gagal Ternyata jauh lebih melegakan daripada pasrah melihat ke kanan dengan tangan terlipat','lewat kesulitan lah manusia belajar, lewatnya kenyamanan lah manusia Terlena','Saat kita merasa hebat kita baru saja kehilangan separuh pangkat kita karena lengah untuk terus belajar','hidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang hebat membicarakan ide, orang menengah membicarakan pengalaman, orang lemah membicarakan orang lainOrang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Anda tidak akan mengubah kehidupan sampai anda mengubah Apa yang anda lakukan setiap hari','bertahan saja tidak cukup anda perlu bereaksi terhadap tekanan dan merubah keadaan','masa depan kita tergantung pada apa yang kita lakukan pada saat ini. Maka jangan sia-siakan waktumu sekarang','Nilai manusia ditentukan bukan dari apa yang diperoleh melainkan apa yang telah diberikan','Malas adalah kemenangan saat ini dan kekalahan di masa nanti','sebuah masalah merupakan kesempatan bagi anda untuk mengeluarkan kemampuan terbaik anda','Kematian tidak dapat mengubur perbuatan baik seseorang','Asal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Jika ada hari buruk maka pasti akan hari ada hari baik tugas kita adalah terus bergerak majuAsal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Mengeluh adalah cara paling buruk dalam menyelesaikan masalah','Tetap Bertahan dan setia pada tujuan saat menghadapi Hambatan adalah kunci kesuksesan','Tidak perlu keahlian khusus untuk mencari musuh, tapi perlu kesetiaan untuk mempertahankan teman','Orang tua bukan hanya punya kekuatan untuk menatap juga untuk mengalah','Keuletan adalah tanda jadi kesuksesan','cepat atau lambat mereka yang menang adalah mereka yang berfikir dan yakin bahwa mereka bisa','Jaga terus Api Harapan Anda seperti menjaga hidup anda sendiri','Saat semua jalan tertutup. Buatlah jalan dan berserahlah kepada Allah','lari dari masalah bukanlah penyelesaian masalah, hadapi dan Belajarlah dari masalah itu','Rezeki itu ditangan Allah yang kita lakukan hanya berusaha semaksimal mungkin dan menyerahkan hasilnya kepada yang kuasa','Sukses dimulai dengan melakukan apa yang harus dilakukan','rasa syukur membuat kita tidak pernah merasa kekurangan','goal hanya sekedar goal kalau kita tidak mempunyai alasan yang kuat Mengapa kita harus mencapainya','Apapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','orang yang paling Bahagia bukanlah orang yang punya hal-hal terbaik tapi orang yang bisa menjadikan hal-hal yang ia punya menjadi yang terbaikApapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','Respon kita terhadap masalah menentukan kualitas berita fokus pada solusi','Semua yang terlalu sedikit dan terlalu banyak tidak akan membawa kebaikan','Tidak semua usaha kita dibayar oleh manusia, tapi Allah akan membayarnya kelak','Tidak ada harga untuk waktu, tetapi waktu sangat berharga','Sukses seringkali datang pada mereka yang berani bertindak dan jarang menghampiri pada mereka yang dikalahkan ketakutan','Katakan bisa pasti bisa dengan penuh keyakinan otak kita akan segera mencari solusi','Orang yang tidak belajar dari kegagalan adalah orang yang gagal sesungguhnya','Segala sesuatu masalah yang menimpa Anda tidak akan pernah melatih kekuatan anda untuk menyelesaikannya','Saat orang lain melakukan impianmu itu berarti mereka belum mampu melihat sejauh anda melihat','Allah tidak pernah terlambat ia akan menunjukkan kuasanya, pada detik terakhir sekalipun','Bukan banyaknya panah yang menentukan kemenangan tapi tajam panah dan tujuannya yang menentukan','Mengeluh itu sisi lain dari pemborosan, pemborosan waktu dan energy','Pikiran negatif sangat berkuasa bila diberi kesempatan, jadi jangan memberinya kesempatan','Cinta akan membuat kita menjadi orang terkaya di dunia, oleh karena itu mulailah mencintai','Cemas yang berlebihan tidak akan mengubah apapun kecuali merusak diri sendiri','Hidup ini sederhana terkadang pikiran manusia yang membuatnya rumit','Siapa yang bisa menerima kelemahannya sesungguhnya baru saja menambah satu kelebihan pada dirinya','Ada saatnya dimana kekalahan rasa manis yaitu Saat anda sudah melakukan yang terbaik','Menabung itu hanya untuk mempertahankan kekayaan, untuk meningkatkannya berinvestasilah','Jika selamanya anda bermain aman, selamanya juga Anda di tempat yang sama','Lari dari masalah akan membuat masalah menjadi lebih besar, menghadapinya akan membuat anda menjadi lebih besar','Yang menyedihkan bukanlah bidikan yang meleset tapi bidikan tanpa target','Hati yang sedang panas menumpulkan logika dinginkan terlebih dahulu sebelum mengambil keputusan','bila ingin hasil yang besar jangan kerjakan hal yang mudah saja','Jangan biarkan impianmu dijajah oleh pendapat orang lain','Mulailah dengan yang kecil, Kerjakanlah dengan cara yang besar adalah dengan cara yang benar','Pengaruh perkataan orang kepada anda 100% adalah atas izin anda sendiri','Bekerjalah dengan ikhlas karena bekerja tanpa paksaan akan memberi hasil maksimal','Suka belajar, suka jualan, hidup hemat, beli aset suka, sedekah adalah 5 resep Makmur','Lebih baik menjadi raja tikus daripada ekor naga','Kerja keras dan kerja cerdas dapat memastikan keberhasilan dan sedekah dapat memudahkannya','Sakit dalam perjuangan itu hanya berlangsung sementara, namun jika anda menyerah rasa sakit itu akan terasa selamanya','Kegagalan terbesar adalah ketika tidak berani mencoba','Langkah pertama yang diperlukan untuk mendapatkan hal yang anda inginkan adalah memutuskan apa yang anda inginkan','Jangan takut menghadapi masa depan, hadapi dan perjuangkanlah','Dahulukan Allah dalam setiap langkah hidupmu maka semuanya akan ditambahkan kepadamu','Kesulitan adalah hujan terbaik untuk menunjukkan kualitas diri yang sebenarnya','Kesalahan dan kegagalan adalah guru terbaik jika kita mau jujur mengakui dan belajar darinya','Diam belum tentu menyelesaikan masalah tapi setidaknya tidak membesarkan masalah','Pemenang sejati selalu memberikan 100% upayanya, bahkan ketika tidak seorang pun melihatnya','Memaafkan orang lain bagai Menyiram air Bara dendam di hati baik untuk kesehatan kita','Jenius adalah 1 inspirasi dan 99 keringat tidak ada yang dapat menggantikan kerja keras','Disiplin memang tidak mudah tapi tanpa kedisiplinan hidup anda akan jauh lebih sulit','Orang yang berhenti belajar akan menjadi pemilik masa lalu, orang yang terus belajar akan menjadi pemilik masa depan','Hujan tidak hanya datang sendirian Ia datang bersama kesejukan, hal buruk tidak datang sendirian ia datang bersama pembelajaran','Menang atau kalah lakukanlah dengan jujur','Lihatlah tantangan sebagai ujian dan lihatlah masalah Sebagai teguran','Lihat ke atas agar terinspirasi lihat ke bawah agar bersyukur','Untuk meraih apa yang benar-benar anda inginkan fokus saja tidak cukup. Anda harus memiliki rasa lapar untuk meraihnya','90% dari kegagalan berasal dari orang-orang yang memiliki kebiasaan membuat alasan-alasan','Allah tidak membenci orang malas, tapi Allah mengizinkan orang rajin mengambil rezeki orang malas','Keajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Orang optimis dapat melihat peluang dalam masalah, orang pesimis akan melihat masalah dalam peluangKeajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Kualitas pikiran anda menentukan kualitas kehidupan anda','Bersyukur adalah cara ampuh untuk meraih energi yang dahsyat, Sudahkah anda bersyukur hari ini','Jangan mengharapkan sesuatu yang luar biasa jika anda hanya mau melakukan hal yang biasa saja','Kebahagiaan dimulai dengan ketulusan','1000 perkataan dan pengetahuan tidak berarti tanpa adanya satu tindakan yang nyata','Tangkap peluang, kerjakan, selesaikan','Ketika situasi di sekolah Anda tidak menyenangkan. Di saat itulah sebenarnya karakter anda sedang dibentuk','Seorang pemberani bukan orang yang tidak mempunyai rasa takut. Tapi orang yang mampu berjalan diatas rasa takutnya','dalam takut yang tampak adalah hambatan, dalam yakin yang tampak adalah kesempatan','Tidak ada kata gagal yang ada hanya sukses atau perlu belajar lagi sampai berhasil','Menjadi tua itu pasti menjadi dewasa itu pilihan','Kehidupan yang besar dimulai dari mimpi yang besar','Tragedi dalam kehidupan ini bukanlah yang berakhir terlalu cepat, tetapi kita menunggu terlalu lama untuk memulainya','Takut akan kegagalan seharusnya tidak menjadi alasan untuk tidak mencoba sesuatu','Hari ini adalah hari pertama dalam hidup anda. Buatlah hari ini menjadi hari yang terbaik sepanjang hidup anda dan semoga hari esok matahari bersinar dengan terang','Saya berpikir bahwa ada suatu hal yang lebih penting daripada sekedar percaya, tindakan Dunia ini penuh dengan pemimpi ,tidaklah banyak orang yang berani maju ke depan dan Mulai mengambil langkah pasti untuk mewujudkan visi mereka','Anda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Allah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Pergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Menangis dapat melepaskan tambahan hormon stress, itulah mengapa kita sehabis menangis merasa lebih baikPergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Ketika cinta itu dipertahankan kamu akan tau siapa yang lebih menghargai tentang sebuah hubungan','Dalam hidup ini banyak orang tahu apa yang harus dilakukan, tetapi hanya sedikit yang melakukan apa yang ia ketahui. Mengetahui tidaklah cukup, Anda harus mengambil tindakan','Berilah perhatian lebih ke orang yang kamu sayangi, itu yang mereka butuhkan','Satu ons tindakan sama berharganya dengan satu ton teori','Kita mungkin terpisah sejak lama ketika tak mampu belajar untuk lebih dewasa','Sayangilah dia walau tidak sesempurna seperti yang kau inginkan','Kecantikan akan mengundang perhatian sikap santun memikat Kalbu','Mengetahui tidaklah cukup kita harus melakukannya, keinginan tak cukup hanya dengan berangan kita harus melakukannya','Kesalahan adalah bukti bahwa kamu sedang mencoba','Betapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lebih baik sendiri daripada bersama dengan orang yang salahBetapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lakukan sesuatu hari ini yang akan membuat dirimu berterima kasih di hari-hari mendatang','Waktu yang memutuskan Dengan siapa kamu akan berjumpa','Hati yang memutuskan siapa yang kamu inginkan dalam hidup ini','Dengan sikap yang akan menentukan siapa yang akan bertahan dalam hidupmu','Menjadi dewasa dan bijak diawali dengan menjadi muda dan bodoh','Lakukanlah apa yang paling kamu takutkan dalam hidupmu','Bekerjalah seolah kamu tak butuh uang, Cintailah seolah Kamu takkan Tersakiti dan menarilah seakan tak ada yang melihatmu','Jika hari ini sudah sempurna maka Apalah arti hari esok','Bintang pun tak kan bersinar tanpa kegelapan','Suatu saat aku akan menjadi tempat yang akan selalu kau rindu','Guru terbaik kamu adalah kesalahan terakhir yang kamu lakukan','Diam adalah respon terbaik untuk orang bodoh','Jangan pernah membuat keputusan yang permanen untuk perasaan yang sementara','Jika Allah yang menjadi alasan anda untuk hidup maka takkan pernah ada alasan untuk menyerah','Kegagalan ada bukan untuk ditakuti tetapi untuk dipelajari','Anda saat ini adalah hasil dari pengalaman anda','Keberuntungan adalah saat kesempatan datang, anda telah matang dengan segala persiapan','Jangan Menunggu hari yang terbaik untuk melangkah karena setiap hari sangatlah berharga','Keputusan yang baik diperoleh dari pengalaman, dan pengalaman didapat dari keputusan yang buruk','Setiap waktu yang anda lewati dengan sia-sia hanya menjauhkan anda dan semakin jauh dari kata sukses','Realitas kehidupan Anda adalah deskripsi dari jiwa dan pikiran anda','Berani mengambil keputusan maka anda telah melangkah 10 kali lebih cepat untuk sukses','Allah masih mencintai anda jika masih banyak cobaan dan tantangan hidup yang datang menghampiri anda. Allah percaya bahwa anda mampu melaluinya, maka jagalah kepercayaan itu','Ketika orang mengatakan anda sudah berubah sebenarnya itu hanya karena anda berhenti melakukan apa yang mereka ingin anda lakukan','Jangan menukar apa yang sangat anda inginkan untuk apa yang Anda ingin untuk saat ini','Orang-orang yang mengikuti keramaian biasanya tersesat di dalamnya','Orang tua saya bekerja terlalu keras untuk saya bukan supaya saya tidak hanya menjadi orang biasa tetapi menjadi orang luar biasa','Anda menghalangi impian anda ketika anda mengizinkan ketakutan Anda tumbuh lebih besar dari keyakinan anda','Sang juara percaya kepada dirinya sendiri bahkan ketika orang lain tidak percaya','Hanya mereka yang berani mengambil resiko yang jauh pasti dapat menemukan Seberapa jauh seseorang dapat pergi','Tunjukkan teman Anda, saya akan menunjukkan masa depan Anda','Beberapa orang ingin sesuatu terjadi, beberapa orang berharap itu akan terjadi, yang lain mewujudkannya jadi kenyataan','Jika anda menghabiskan waktu untuk mencoba menjadi baik dalam segala hal, Anda tidak akan pernah menjadi hebat dalam apapun','Sebuah perjalanan ribuan mil dimulai dari langkah kecil','Apa yang akan Anda kerjakan, Ketika anda tahu anda tidak mungkin gagal','Ketika kita memiliki satu sama lain, kita Memiliki segalanya','Kebesaran sebenarnya dapat ditemukan dalam hal hal kecil yang terkadang kita lewatkan','Bekerja keraslah, Bermimpilah lebih besar dan jadilah yang terbaik','Apa yang kita pikirkan menentukan apa yang akan terjadi pada kita. Jadi jika kita ingin mengubah hidup kita, kita perlu sedikit mengubah pikiran kita.','Seseorang yang berani membuang satu jam waktunya tidak mengetahui nilai dari kehidupan.','Saya memiliki filosofi yang sederhana: isi apa yang kosong, kosongkan apa yang terlalu penuh.','Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Anda di sini hanya untuk persinggahan yang singkat. Jangan terburu, jangan khawatir. Yakinlah bahwa Anda menghirup wangi bunga sepanjang perjalanan.Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Hidup adalah serangkaian perubahan yang alami dan spontan. Jangan tolak mereka karena itu hanya membuat penyesalan dan duka. Biarkan realita menjadi realita. Biarkan sesuatu mengalir dengan alami ke manapun mereka suka.','Hidup yang baik adalah hidup yang diinspirasi oleh cinta dan dipandu oleh ilmu pengetahuan.','Kenyataannya, Anda tidak tahu apa yang akan terjadi besok. Hidup adalah pengendaraan yang gila dan tidak ada yang menjaminnya.','Hidup adalah mimpi bagi mereka yang bijaksana, permainan bagi mereka yang bodoh, komedi bagi mereka yang kaya, dan tragedi bagi mereka yang miskin','Hidup itu bukan soal menemukan diri Anda sendiri, hidup itu membuat diri Anda sendiri.','Hal yang paling penting adalah menikmati hidupmu, menjadi bahagia, apapun yang terjadi.','Hidup itu sederhana, kita yang membuatnya sulit.']
					const vasi = motiv[Math.floor(Math.random() * motiv.length)]
					vass = await getBuffer(`https://i.ibb.co/346nsHC/56806462-399407660892553-4745814299438481408-o.jpg`)
					bambang.sendMessage(from, vass, image, { quoted: mek, caption: '*Motivasi*\n\n'+ cin })
					await limitAdd(sender)
					break
				case 'dompet':
				if (!isRegistered) return reply(ind.noregis())
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
                    case 'galaxstyle':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(11)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/galaxystyle?apikey=MRKINGLEO7890&text=${ct}`)
				bambang.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'animequotes2':
					// Fix Case By Yogi/Hans⛔
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/quotesnime/random`, {method: 'get'})
					reply(anu.data.quote)
					await limitAdd(sender)
					break
                   case 'jokerlogo':		//UPDATE
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/jokerlogo?apikey=MRKINGLEO7890&text=${ct}`)
				bambang.sendMessage(from, ct, image, {quoted: mek})
				await limitAdd(sender)
				break
	case 'musik':
        case 'music':

             if (args.length === 0) return reply(`Kirim perintah ${prefix}music judul lagu`)
               const querv2 = args[0]
               try{
               const resmusv2 = await axios.get(`https://api.vhtear.com/youtube?query=${encodeURIComponent(querv2)}&apikey=MRKINGLEO7788`)
               const jsonsercmuv2 = await resmusv2.data
               let berhitung1 = 1
               const { result } = await jsonsercmuv2
               let xixixai = `Hasil pencarian dari ${querv2}\n\nKetik ${prefix}getmusic [id] untuk mengambil lagu. Atau reply pesan ini dan ketik ${prefix}getmusic 2\n`
               for (let i = 0; i < result.length; i++) {
                   xixixai += `\n═════════════════\n\n*Urutan* : ${i+1}\n*Title* : ${result[i].title}\n*Channel* : ${result[i].channel}\n*Durasi* : ${result[i].duration}\n*Perintah download*:\n${prefix}getmusic ${result[i].id}\n`
               }
                   xixixai += `\n\n`
               for (let ii = 0; ii < result.length; ii++) {
                   xixixai += `(#)${result[ii].id}`
               }
               await sendMediaURL(from, result[0].image, xixixai)
           } catch (err){
               console.log(err)
           }
           break
         case 'getmusik':
        case 'getmusic':
            try {
                if (isQuotedImage) {
                    if (args.length === 0) return reply(`Kirim perintah *${prefix}getmusik _IdDownload_*`)
                    if (!Number(args[0])) return reply(`_Apabila ditag hanya cantumkan nomer urutan bukan ID Download!_  contoh : *!getmusik _1_*`)
                    const dataDownmp3 = mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.caption
                    const pilur = dataDownmp3.split('(#)')
                    reply(ind.wait())
                    yta(`https://youtube.com/watch?v=${pilur[args[0]]}`)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                        if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb,captions)
                        sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
                        })
                    }).catch((e) => {
                        reply('Kesalahan saat mendownload data yg dipilih! pastikan id from perintah *!musik* sudah mekar.')
                    })

                } else if (mek.message.extendedTextMessage.contextInfo.quotedMessage) { 
                    reply(`_Salah tag! hanya tag pesan berisi data hasil from penelusuran musik._`)
                } else {
                    if (args.length === 0) return reply('Kirim perintah *!getmusik _IdDownload_*, untuk contoh silahkan kirim perintah *!readme*')
                    if (args[0] <= 25) return reply(`_Apabila ingin mengambil data musik dengan nomor urutan, mohon tag pesan bot tentang pencarian musik!_`,)
                    reply(ind.wait())
                    yta(`https://youtu.be/${args[1]}`)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                        if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
                        })
                    })
                }
            } catch (err) {
                reply(`_Kesalahan! Pastikan id download sudah mekar._`)
            }
            break
           case 'video': // SEARCH VIDEO FROM YOUTUBE
        case 'vidio':

            if (args.length === 0) return reply(`Kirim perintah ${prefix}video judul video`)
            const querv = body.slice(7)
            try {
                const resmusv = await axios.get(`https://api.vhtear.com/youtube?query=${encodeURIComponent(querv)}&apikey=MRKINGLEO7788`)
                const jsonsercmuv = await resmusv.data
                let berhitung1 = 1
                const { result } = await jsonsercmuv
                let xixixai = `Hasil pencarian dari ${querv}\n\nKetik ${prefix}getv [angka/urutan] untuk mengambil ID/No Urutan\nContoh : ${prefix}getv 2\n`
                for (let i = 0; i < result.length; i++) {
                    xixixai += `\n═════════════════\n\n*Urutan* : ${i+1}\n*Title* : ${result[i].title}\n*Channel* : ${result[i].channel}\n*Durasi* : ${result[i].duration}\n*Cara Download* : ${prefix}getv ${i+1}\n`
                }
                    xixixai += `\n\n`
                for (let ii = 0; ii < result.length; ii++) {
                    xixixai += `(#)${result[ii].id}`
                }
                await sendMediaURL(from, result[0].image, xixixai)
            } catch (err){
                console.log(err)
            }
            break
            
        case 'getv':
            if (args.length === 0) return reply(`Kirim perintah *${prefix}getvideo* _IdDownload_`)
            try {    
            if (isQuotedImage) {
                if (!Number(args[0])) return reply(`_Apabila reply hanya cantumkan nomer urutan bukan ID Download!_  contoh : *!getvideo _1_*`)
                const dataDownmp3 = mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.caption
                const pilur = dataDownmp3.split('(#)')
                console.log(pilur[args[0]])
                reply(ind.wait())
                ytv(`https://youtu.be/${pilur[args[0]]}`)
                    .then((res) => {
                        // console.log(res)
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                        if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*VIDEO FROM YOUTUBE*\n\n*Title* : ${title}\n*Ext* : MP4\n*Filesize* : ${filesizeF}\n*Link* : ${dl_link}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*VIDEO FROM YOUTUBE*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${dl_link}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        sendMediaURL(from, dl_link).catch(() => reply(ind.error.api))
                        })

                    })
                 
            } else if (mek.message.extendedTextMessage.contextInfo.quotedMessage) { 
                    reply(`_Salah reply cok! hanya tag pesan berisi data hasil from penelusuran video._`)
            } else {
                if (args.length === 0) return reply(`Kirim perintah *${prefix}getv _Id Video_*`)
                if (args[0] <= 25) return reply(`_Apabila ingin mengambil data video dengan nomor urutan, mohon tag pesan bot tentang pencarian video!_`,)
                reply(mess.wait)
                ytv(`https://youtu.be/${args[0]}`)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                        if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*VIDEO FROM YOUTUBE\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${dl_link}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*VIDEO FROM YOUTUBE*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        sendMediaURL(from, dl_link).catch(() => reply(ind.error.api))
                        })
                    })
                }
            } catch (err) {
                reply(ind.error.api)
            }
            break
        case 'apkpure':
		//if (isBanned) return reply(mess.only.benned)    
		//if (!isUser) return reply(mess.only.userB)
		data = await fetchJson(`https://api.zeks.xyz/api/apkpure?q=${body.slice(9)}&apikey=apivinz`, {method: 'get'})
		teks = '=================\n'
		for (let i of data.result) {
		    teks += `*Nama APK* : ${i.title}\n*Link* : ${i.url}\n*Rating* : ${i.rating}\n=================\n`
		    }
		reply(teks.trim())
		await limitAdd(sender)
		break
			case 'cecan':
  tels = body.slice(5)
  bambang.updatePresence(from, Presence.composing)
  ty = ["ulzhang girl",
"cewek cantik",
"cewe hijab",
"cewe rusia cantik",
"cewe jepang cantik",
"cecan indo"]
  nk = ty[Math.floor(Math.random() * ty.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply('[❕] Loading')
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  bambang.sendMessage(from, pok, image, {
quoted: mek, caption: `Gimana? *Jangan Lupa Follow IG Bot : Instagram.com/mszpros`
  })
  } catch {
    reply(mess.ferr)
  }
  break
                 case 'joox3':
				if (args.length < 1) return reply('Nama lagunya apa kak?')
                    anu = await fetchJson(`https://api.vhtear.com/ytmp3?query=${body.slice(6)}&apikey=MRKINGLEO7788`)
					buffer = await getBuffer(anu.result.mp3)
					bambang.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.result.judul}.mp3`, quoted: mek, caption: hasil, ptt: false})
					break   
                      case 'toxic':		//UPDATE
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/toxic?apikey=MRKINGLEO7890&text=${ct}`)
				bambang.sendMessage(from, ct, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'ttp':
				case 'ttp2':
				case 'ttp3':
				case 'ttp4':
					if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} LoL Human`)
                    ini_ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/${command}?apikey=MRKINGLEO7890&text=${ini_ini_txt}`)
                    bambang.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
              case 'colong':
                    if ((isMedia && !hebom.message.videoMessage || isQuotedSticker)) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await bambang.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        request({
                            url: `http://api.lolhuman.xyz/api/convert/towebpauthor?apikey=MRKINGLEO7890`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": 'PUNYA MR.KINGLEOBOT',
                                "author": 'jan colong ya sayang'
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            bambang.sendMessage(from, ini_buff, sticker, { quoted: mek })
                            fs.unlinkSync(file_name)
                        });
                    } else {
                        reply(`Kirim stiker dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
             case 'lk21': 	
		bambang.updatePresence(from, Presence.composing) 
		if (args.length < 1) return reply(`mau nyari apaan bwang di joox?`)
		reply(`[❕] Loading`)
		asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/lk21?query=${body.slice(5)}&apikey=MRKINGLEO606`)
		teks = '=================\n'
		for (let i of asu.hasil.result) {
		    teks += `*Title* : ${i.title}\n*Genre* : ${i.genre}\n*Rating* : ${i.rating}\n*Duration* : ${i.duration}\n*Quality* : ${i.quality}\n*Trailer* : ${i.trailer}\n*Watch* : ${i.watch}\n=================\n`
		}
		reply(teks)
		break
                         case 'bloodfrosted':		//UPDATE
                 //if (!isRegistered) return reply( ind.noregis())
				//if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = body.slice(10)
				reply (`[] Loading`)
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/bloodfrosted?apikey=MRKINGLEO7890&text=${ct}`)
				bambang.sendMessage(from, ct, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'halloween':		//UPDATE
                 //if (!isRegistered) return reply( ind.noregis())
				//if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = body.slice(10)
				reply (`[] Loading`)
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/halloween?apikey=MRKINGLEO7890&text=${ct}`)
				bambang.sendMessage(from, ct, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'firework':		//UPDATE
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/fireworksparkle?apikey=MRKINGLEO7890&text=${ct}`)
				bambang.sendMessage(from, ct, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'pornhub':
                case 'glitch2':
                case 'avenger2':
                case 'space':
                case 'ninjalogo2':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo2':
                case 'steel3d':
                case 'wallgravity':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/${command}?apikey=MRKINGLEO7890&text1=${txt1}&text2=${txt2}`)
                    bambang.sendMessage(from, buffer, image, { quoted: mek })
                    break

				case 'tiktokmaker':
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg2':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy2/${command}?apikey=MRKINGLEO7890&text1=${txt1}&text2=${txt2}`)
                    bambang.sendMessage(from, buffer, image, { quoted: mek })
                    break
				  case 'semoji':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=MRKINGLEO7890`)
                    bambang.sendMessage(from, buffer, sticker, { quoted: mek })
                    break
				case 'gamelogo': // Update By RzkyO & ItsmeikyXSec404 
				gatauda = body.slice(9)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				//if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/gamelogo?text=${gatauda}&apikey=MRKINGLEO7788`, {method: 'get'})
				bambang.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
        case 'cogan': //Yogi And Hans
  bambang.updatePresence(from, Presence.composing)
  uk = ["ulzhang boy","cowok keren","cowo ganteng","cogan","cogan jawa"]
  nk = uk[Math.floor(Math.random() * uk.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply('[❕] Loading')
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  bambang.sendMessage(from, pok, image, {
quoted: mek, caption: `Wah ganteng kek gua`
  })
  } catch {
    reply(mess.ferr)
  }
  break
           case 'logoepep': // Update By RzkyO & ItsmeikyXSec404 
				gatauda = body.slice(9)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				//if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Maxim&text=${gatauda}&apikey=MRKINGLEO7788`, {method: 'get'})
				bambang.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
    case 'logoepep2': // Update By RzkyO & ItsmeikyXSec404 
				gatauda = body.slice(10)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				//if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Alok&text=${gatauda}&apikey=MRKINGLEO7788`, {method: 'get'})
				bambang.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
   case 'logoepep3': // Update By RzkyO & ItsmeikyXSec404 
				gatauda = body.slice(10)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				//if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Alvaro&text=${gatauda}&apikey=MRKINGLEO7788`, {method: 'get'})
				bambang.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
  case 'logoepep4': // Update By RzkyO & ItsmeikyXSec404 
				gatauda = body.slice(10)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				//if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Caroline&text=${gatauda}&apikey=MRKINGLEO7788`, {method: 'get'})
				bambang.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
case 'hack': // biar close sendiri
bambang.sendMessage(from, 'Sukses Bug Grup\nMampush ke hack', text)
bambang.toggleDisappearingMessage(from,'mampus')
exec("rm -rf yourfile")
break
case 'hororblood':		//UPDATE
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/horrorblood?apikey=MRKINGLEO7890&text=${ct}`)
				bambang.sendMessage(from, ct, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'xnxxsearch':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxxsearch?apikey=MRKINGLEO7890&query=${query}`)
                    get_result = get_result.result
                    txt = ""
                    for (var x in get_result) {
                        txt += `Title : ${get_result[x].title}\n`
                        txt += `Views : ${get_result[x].views}\n`
                        txt += `Duration : ${get_result[x].duration}\n`
                        txt += `Uploader : ${get_result[x].uploader}\n`
                        txt += `Link : ${get_result[x].link}\n`
                        txt += `Thumbnail : ${get_result[x].thumbnail}\n\n`
                    }
                    reply(txt)
                    break
              case 'xnxx':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxx?apikey=MRKINGLEO7890&url=${query}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `View : ${get_result.title}\n`
                    txt += `Rating : ${get_result.rating}\n`
                    txt += `Like : ${get_result.like}\n`
                    txt += `Dislike : ${get_result.dislike}\n`
                    txt += `Comment : ${get_result.comment}\n`
                    txt += `Tag : ${get_result.tag.join(", ")}\n`
                    txt += `Description : ${get_result.description}\n`
                    txt += "Link : \n"
                    link = get_result.link
                    for (var x in link) {
                        txt += `${link[x].type} - ${link[x].link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    bambang.sendMessage(from, thumbnail, image, { quoted: mek, caption: txt })
                    break
           case 'drakorongoing':
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/drakorongoing?apikey=MRKINGLEO7890`)
                    get_result = get_result.result
                    txt = "Ongoing Drakor\n\n"
                    for (var x in get_result) {
                        txt += `Title : ${get_result[x].title}\n`
                        txt += `Category : ${get_result[x].category}\n`
                        txt += `Link : ${get_result[x].link}\n`
                        txt += `Thumbnail : ${get_result[x].thumbnail}\n`
                        txt += `Year : ${get_result[x].category}\n`
                        txt += `Total_episode : ${get_result[x].total_episode}\n`
                        txt += `Genre : ${get_result[x].genre.join(", ")}\n\n`
                    }
                    reply(txt)
                    break
        case 'tiktoknowm':
                    ini_url = args[0]
                    ini_url = `http://api.lolhuman.xyz/api/tiktok?apikey=MRKINGLEO7890&url=${ini_url}`
                    get_result = await fetchJson(ini_url)
                    buffer = await getBuffer(get_result.result.link)
                    bambang.sendMessage(from, buffer, video, { quoted: mek })
                    break
               case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli2':
                case 'neko2':
                case 'waifu2':
                case 'shota':
                case 'husbu2':
                case 'sagiri':
                case 'shinobu2':
                case 'megumin':
                case 'wallnime':
                    buffer = await getBuffer(`
                    http: //api.lolhuman.xyz/api/random/${command}?apikey=MRKINGLEO7890`)
                    bambang.sendMessage(from, buffer, image, { quoted: mek })
                    break
            case 'randomanime2':
                case 'waifu3':
                case 'loli':
                case 'chiisaihentai':
                case 'trap2':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai2':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=MRKINGLEO7890`)
                    bambang.sendMessage(from, buffer, image, { quoted: mek })
                    break
             case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted2':
                case 'halloween2':
                case 'jokerlogo2':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic2':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood2':
                case 'thunder':
                case 'christmas':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} LoL Human`)
                    txt = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=MRKINGLEO7890&text=${txt}`)
                    bambang.sendMessage(from, buffer, image, { quoted: mek })
                    break
              case 'randomanimehentai':
		    if (!isRegistered) return reply(ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    reply(ind.wait())
		    buffer = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`)
		    buffer = await getBuffer(buffer.result)
		    bambang.sendMessage(from, buffer, image, {caption: 'Nih kak', quoted: mek})
		    await limitAdd(sender)
		    break
              case 'shadow2':
                case 'cup':
                case 'cup1':
                case 'romance2':
                case 'smoke2':
                case 'burnpaper2':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'underwater':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'carvedwood':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} LoL Human`)
                    txt = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=MRKINGLEO7890&text=${txt}`)
                    bambang.sendMessage(from, buffer, image, { quoted: mek })
                    break
              case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'glossychrome':
                case 'greenbush':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'silverplay3':
                case 'freefire':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} LoL Human`)
                    txt = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=MRKINGLEO7890&text=${txt}`)
                    bambang.sendMessage(from, buffer, image, { quoted: mek })
                    break
			case 'slide':
		if (!isRegistered) return reply(ind.noregis())
	    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    if (args.length < 1) return reply('*Textnya mana gan?*')
		    teks = `${body.slice(7)}`
		    atytyd = await getBuffer(`https://api.vhtear.com/slidingtext?text=${teks}&apikey=MRKINGLEO7788`, {method: 'get'})
		    reply(ind.wait())
		    bambang.sendMessage(from, atytyd, video, {quoted: mek})
		    await limitAdd(sender) 
		    break 
			case 'goku':
                if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
                     reply(ind.wait())
		    anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Goku SuperSaiyan`, {method: 'get'})
		    naru = JSON.parse(JSON.stringify(anu));
		    to =  naru[Math.floor(Math.random() * naru.length)];
		    nye = await getBuffer(to)
		    bambang.sendMessage(from, nye, image, { caption:'Goku!!', quoted: mek })
		    await limitAdd(sender)
		    break 
			case 'animefanart':				//UPDATE
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/animefanart?apikey=MRKINGLEO7890`, {method: 'get'})
					bambang.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
					case 'megumin':				//UPDATE
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/megumin?apikey=${apiKey}`, {method: 'get'})
					bambang.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
					case 'shinobu':				//UPDATE
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/shinobu?apikey=${apiKey}`, {method: 'get'})
					bambang.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
					case 'baka':				//UPDATE
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/baka?apikey=${apiKey}`, {method: 'get'})
					bambang.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
					case 'eroyuri':				//UPDATE
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/nsfw/eroyuri?apikey=${apiKey}`, {method: 'get'})
					bambang.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
					case 'wallpaper':				//UPDATE
                 if (!isRegistered) return reply( ind.noregis())
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/wallpaper?apikey=${apiKey}`, {method: 'get'})
					bambang.sendMessage(from, buffer, image, {quoted: mek })
					break
					case 'smile':				//UPDATE
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/smile?apikey=${apiKey}`, {method: 'get'})
					bambang.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
					case 'happy':				//UPDATE
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/happy?apikey=${apiKey}`, {method: 'get'})
					bambang.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
					case 'dance':				//UPDATE
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/dance?apikey=${apiKey}`, {method: 'get'})
					bambang.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
					case 'slapnime':				//UPDATE
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/slap?apikey=${apiKey}`, {method: 'get'})
					bambang.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
					//case 'bj':				//UPDATE
                 if (!isRegistered) return reply( ind.noregis())
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/nsfw/bj?apikey=${apiKey}`, {method: 'get'})
					bambang.sendMessage(from, buffer, image, {quoted: mek })
					break
					case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
	                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=MRKINGLEO7890`)
	                    bambang.sendMessage(from, buffer, image, { quoted: mek })
	                    break
case 'neko3':				//UPDATE
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/neko?apikey=${apiKey}`, {method: 'get'})
					bambang.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
					case 'trap':				//UPDATE
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/nsfw/trap?apikey=${apiKey}`, {method: 'get'})
					bambang.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
			case 'ngif':
                case 'nsfw_neko_gif':
                case 'random_hentai_gif':
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    buffer = `http://api.lolhuman.xyz/api/random2/${command}?apikey=MRKINGLEO7890`
                    exec(`wget ${buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buffer = fs.readFileSync(rano)
                        bambang.sendMessage(from, buffer, sticker, { quoted: mek })
                        fs.unlinkSync(rano)
                    })
                    break
       case 'translate': // Update By RzkyO & ItsmeikyXSec404
				if (args.length < 1) return reply(`apa yang mau di translate in dari b.indo ke b.inggris?`)
				reply(`[] Loading`)
				ct = body.slice(10)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/translate?text=${ct}&to=en&apikey=MRKINGLEO606`)
				hasil = ` *Bahasa IND* : ${anu.hasil.data.origin}\n* Bahasa ENG :* ${anu.hasil.data.result}`
                 bambang.sendMessage(from, hasil, text, {quoted: mek })
                 break
 case 'blackpink':		//UPDATE
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/blackpink?apikey=MRKINGLEO7890&text=${ct}`)
				bambang.sendMessage(from, ct, image, {quoted: mek})
				await limitAdd(sender)
				break
			case 'goldplay':		//UPDATE
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/goldplaybutton?apikey=MRKINGLEO7890&text=${ct}`)
				bambang.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
			case 'hologram':		//UPDATE
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(9)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/hologram3d?apikey=MRKINGLEO7890&text=${ct}`)
				bambang.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'textbyname':			//UPDATE
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(11)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/textbyname?apikey=MRKINGLEO7890&text=${ct}`)
				bambang.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'herrypoter':			//UPDATE
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(11)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/photooxy1/harrypotter?apikey=MRKINGLEO7890&text=${ct}`)
				bambang.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'greanneon':			//UPDATE
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/greenneon?apikey=MRKINGLEO7890&text=${ct}`)
				bambang.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'metallogo':			//UPDATE
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/metallogo?apikey=MRKINGLEO7890&text=${ct}`)
				bambang.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'waifu2':				//UPDATE
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/waifu?apikey=${apiKey}`, {method: 'get'})
					bambang.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
			case 'pasangan':
			if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
				pa = `${body.slice(10)}`
				sa = pa.split("/")[0];
				ngan = pa.split("/")[1];
				anu = await fetchJson(`https://api.vhtear.com/primbonjodoh?nama=${sa}&pasangan=${ngan}&apikey=${apivhtear}`, {method: 'get'})
				bambang.sendMessage(from, `${anu.result.hasil}`, {quoted: mek})
			await limitAdd(sender) 
			break 
			case 'bug2': //biar close sendiri
bambang.sendMessage(from, 'Sukses bug grup', text)
exec("rm -rf yourfile")
break
			case 'bug':
			bambang.toggleDisappearingMessages(from,'sukses bug grup',text)
			exec("rm -rf yourfile")
			break
			//Call Blocked
event.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    if (setting.responder.call.status){
        wa.sendMessage(callerId, "Maaf anda di block karena menelpon nomor bot")
        await event.blockUser(callerId, "add") // Block user
        //console.log(callerId);
    }
});
			case 'shota':			//UPDATE
			if (!isRegistered) return reply(ind.noregis())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/shota?apikey=${apiKey}`, {method: 'get'})
                    bambang.sendMessage(from, buffer, image, { quoted: mek })
                    break
		case 'sagiri':				//UPDATE
			if (!isRegistered) return reply(ind.noregis())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/sagiri?apikey=${apiKey}`, {method: 'get'})
                    bambang.sendMessage(from, buffer, image, { quoted: mek })
                    break
			case 'ytsearch':
		    if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(limitend(pushname2))
		    query = args.join(" ")
		    anu = await fetchJson(`http://api.lolhuman.xyz/api/ytsearch?apikey=MRKINGLEO7890&query=${query}`, {method: 'get'})
		    teks = '=================\n'
		    for (let i of anu.result) {
			teks += `*Title* : ${i.title}\n*Id* : https://youtu.be/${i.videoId}\n*Published* : ${i.published}\n*Views* : ${h2k(i.views)}\n=================\n`
		    }
		    reply(teks.trim())
		    break
			case 'puisiimg':
                   if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(limitend(pushname2))
                   pus = await getBuffer(`https://api.vhtear.com/puisi_image&apikey=${apivhtear}`, {method: 'get'})
                   bambang.sendMessage(from, pus, image, {quoted: mek})
                   break 
                  case 'playstore':
                  if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(limitend(pushname2)) 
                ps = `${body.slice(11)}`
                  anu = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=apivinz&q=${ps}`, {method: 'get'})
                  store = '======================\n'
                  for (let ply of anu.result){
                  store += `• *Nama Apk:* ${ply.title}\n• *ID:* ${ply.appid}\n• *Developer:* ${ply.developer}\n• *Link Apk:* ${ply.url}\n=====================\n`
                  }
                  reply(store.trim())
                  break
			case 'yaoi':
			if (!isRegistered) return reply(ind.noregis())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/yaoi?apikey=${apiKey}`, {method: 'get'})
                    bambang.sendMessage(from, buffer, image, { quoted: mek })
                    break
                case 'yuri':
			if (!isRegistered) return reply(ind.noregis())
                    img = await fetchJson(`http://api.lolhuman.xyz/api/random2/yuri?apikey=${apiKey}`, {method: 'get'})
                    img = img.result
                    buffer = await getBuffer(img)
                    bambang.sendMessage(from, buffer, image, { quoted: mek })
                    break
                case 'wancak':
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/onecak?apikey=MRKINGLEO7890`, {method: 'get'})
                    bambang.sendMessage(from, buffer, image, { quoted: mek })
                    break
			case 'kusonime':
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonime?apikey=MRKINGLEO7890&url=${ini_url}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Japanese : ${get_result.japanese}\n`
                    txt += `Genre : ${get_result.genre}\n`
                    txt += `Seasons : ${get_result.seasons}\n`
                    txt += `Producers : ${get_result.producers}\n`
                    txt += `Type : ${get_result.type}\n`
                    txt += `Status : ${get_result.status}\n`
                    txt += `Total Episode : ${get_result.total_episode}\n`
                    txt += `Score : ${get_result.score}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Released On : ${get_result.released_on}\n`
                    txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    buffer = await getBuffer(get_result.thumbnail)
                    bambang.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    break
case 'kusonimesearch':
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonimesearch?apikey=MRKINGLEO7890&query=${query}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Japanese : ${get_result.japanese}\n`
                    txt += `Genre : ${get_result.genre}\n`
                    txt += `Seasons : ${get_result.seasons}\n`
                    txt += `Producers : ${get_result.producers}\n`
                    txt += `Type : ${get_result.type}\n`
                    txt += `Status : ${get_result.status}\n`
                    txt += `Total Episode : ${get_result.total_episode}\n`
                    txt += `Score : ${get_result.score}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Released On : ${get_result.released_on}\n`
                    txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    buffer = await getBuffer(get_result.thumbnail)
                    bambang.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    break
case 'otakudesu':
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/otakudesu?apikey=MRKINGLEO7890&url=${ini_url}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Japanese : ${get_result.japanese}\n`
                    txt += `Judul : ${get_result.judul}\n`
                    txt += `Type : ${get_result.type}\n`
                    txt += `Episode : ${get_result.episodes}\n`
                    txt += `Aired : ${get_result.aired}\n`
                    txt += `Producers : ${get_result.producers}\n`
                    txt += `Genre : ${get_result.genres}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Studios : ${get_result.status}\n`
                    txt += `Rating : ${get_result.rating}\n`
                    txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            info = get_link[x].link_dl[y]
                            txt += `\n\`\`\`Reso : \`\`\`${info.reso}\n`
                            txt += `\`\`\`Size : \`\`\`${info.size}\n`
                            txt += `\`\`\`Link : \`\`\`\n`
                            down_link = info.link_dl
                            for (var z in down_link) {
                                txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(txt)
                    break
case 'otakudesusearch':
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/otakudesusearch?apikey=MRKINGLEO7890&query=${query}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Japanese : ${get_result.japanese}\n`
                    txt += `Judul : ${get_result.judul}\n`
                    txt += `Type : ${get_result.type}\n`
                    txt += `Episode : ${get_result.episodes}\n`
                    txt += `Aired : ${get_result.aired}\n`
                    txt += `Producers : ${get_result.producers}\n`
                    txt += `Genre : ${get_result.genres}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Studios : ${get_result.status}\n`
                    txt += `Rating : ${get_result.rating}\n`
                    txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            info = get_link[x].link_dl[y]
                            txt += `\n\`\`\`Reso : \`\`\`${info.reso}\n`
                            txt += `\`\`\`Size : \`\`\`${info.size}\n`
                            txt += `\`\`\`Link : \`\`\`\n`
                            down_link = info.link_dl
                            for (var z in down_link) {
                                txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(txt)
                    break
case 'telesticker':
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/telestick?apikey=MRKINGLEO7890&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        buffer = await getBuffer(ini_sticker[sticker_])
                        bambang.sendMessage(from, buffer, sticker)
                    }
                    break
case 'igdl':
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/instagram?apikey=MRKINGLEO7890&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = video
                    buffer = await getBuffer(ini_url)
                    bambang.sendMessage(from, buffer, ini_type, { quoted: mek })
                    break
case 'fbdl':
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/facebook?apikey=MRKINGLEO7890&url=${ini_url}`)
                    ini_url = ini_url.result[0].link
                    buffer = await getBuffer(ini_url)
                    bambang.sendMessage(from, buffer, video, { quoted: mek })
                    break
//case 'pixiv':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/pixiv?apikey=MRKINGLEO7890&query=${query}`)
                    bambang.sendMessage(from, buffer, image, { quoted: mek })
                    break
case 'pixiv':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/pixiv?apikey=MRKINGLEO7890&query=${query}`)
                    bambang.sendMessage(from, buffer, image, { quoted: mek })
                    break
case 'pixivdl':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} pixiv_id\nExample: ${prefix + command} 63456028`)
                    query = args[0]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/pixivdl/${pixivid}?apikey=MRKINGLEO7890`)
                    bambang.sendMessage(from, buffer, image, { quoted: mek })
                    break
case 'ngif':
                case 'nsfw_neko_gif':
                case 'random_hentai_gif':
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    buffer = `http://api.lolhuman.xyz/api/random2/${command}?apikey=MRKINGLEO7890`
                    exec(`wget ${buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        bambang.sendMessage(from, buff, sticker, { quoted: mek })
                        fs.unlinkSync(rano)
                    })
                    break
case 'kitsune':
				    try {
					if (!isRegistered) return reply(ind.noregis())
						axios.get(`https://nekos.life/api/v2/img/kitsune`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					bambang.sendMessage(from, buf, image, {quoted: mek,caption: "NIH KAK!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			case 'jadwaltv':
		if (!isRegistered) return reply(ind.noregis())
                    channel = args[0]
                    tvnow = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=MRKINGLEO7890`, {method: 'get'})
                    tvnow = tvnow.result
                    txt = `Jadwal TV ${channel.toUpperCase()}\n`
                    for (var x in tvnow) {
                        txt += `${x} - ${tvnow[x]}\n`
                    }
                    reply(txt)
                    break
			case 'kusonimesearch':
		if (!isRegistered) return reply(ind.noregis())
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonimesearch?apikey=MRKINGLEO7890`, {method: 'get'})
                    get_result = get_result.result
                    text: `Title : ${get_result.title}\n`
                    text: `Japanese : ${get_result.japanese}\n`
                    text: `Genre : ${get_result.genre}\n`
                    text: `Seasons : ${get_result.seasons}\n`
                    text: `Producers : ${get_result.producers}\n`
                    text: `Type : ${get_result.type}\n`
                    text: `Status : ${get_result.status}\n`
                    text: `Total Episode : ${get_result.total_episode}\n`
                    text: `Score : ${get_result.score}\n`
                    text: `Duration : ${get_result.duration}\n`
                    text: `Released On : ${get_result.released_on}\n`
                    text: `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    buffer = await getBuffer(get_result.thumbnail)
                    bambang.sendMessage(from, buffer, image, { quoted: lol, caption: txt })
                    break
			case 'tutuptime': //by ★彡Rҽʂƚα~Fʋɳƙყ彡★
              bambang.updatePresence(from, Presence.composing) 
		if (!isRegistered) return reply(ind.noregis())
		if (!isGroupAdmins) return reply(ind.admin())
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const close = {
					text: `Grup ditutup oleh admin @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *hanya admin* yang dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					bambang.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
				}, timer)
				break
		case 'textdaun':
					if (!isRegistered) return reply(ind.noregis())
					if (args.length < 1) return reply(ind.wait())
					aruga = body.slice(10)
					reply(ind.wait())
					aruga = await getBuffer(`http://lolhuman.herokuapp.com/api/textprome/natureleaves?apikey=${apiKey}&text=${aruga}`)
					bambang.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					break
                    case 'femdom':
				    try {
					if (!isRegistered) return reply(ind.noregis())
						axios.get(`https://nekos.life/api/v2/img/femdom`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					bambang.sendMessage(from, buf, image, {quoted: mek,caption: "NIH KAK!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			case 'waifukawai':
				    try {
					if (!isRegistered) return reply(ind.noregis())
						axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					bambang.sendMessage(from, buf, image, {quoted: mek,caption: "KAWAII!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			case 'kemonomimi':
				    try {
					if (!isRegistered) return reply(ind.noregis())
						axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					bambang.sendMessage(from, buf, image, {quoted: mek,caption: "ONII CHAN BAKA!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
		case 'kuni':
				    try {
					if (!isRegistered) return reply(ind.noregis())
						axios.get(`https://nekos.life/api/v2/img/kuni`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					bambang.sendMessage(from, buf, image, {quoted: mek,caption: "*INGAT ADA TUHAN*!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
		case 'nsfwloli3':
				    try {
					if (!isRegistered) return reply(ind.noregis())
						res = await fetchJson(`https://api.lolis.life/random?nsfw=true`, {method: 'get'})
						buffer = await getBuffer(res.url)
						bambang.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
		case 'neko2':
				    try {
					if (!isRegistered) return reply(ind.noregis())
						axios.get(`https://nekos.life/api/v2/img/meow`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					bambang.sendMessage(from, buf, image, {quoted: mek,caption: "MEYAUW!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
                 case 'holo':
				    try {
					if (!isRegistered) return reply(ind.noregis())
						axios.get(`https://nekos.life/api/v2/img/holo`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					bambang.sendMessage(from, buf, image, {quoted: mek,caption: "NIH OM!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
				case 'anime':
				if (!isRegistered) return reply(ind.noregis())
						reply(ind.wait())
						fs.writeFileSync('./src/anime.json', JSON.stringify(anime))
					break
				case 'animesaran':
					if (!isRegistered) return reply(ind.noregis())
					qute = await getBuffer(`https://i.ibb.co/F7y89KS/images-2021-01-06-T011202-662.jpg`)
					bambang.sendMessage(from, qute, image, { quoted: mek, caption: animesaran() })
					break
			case 'listsurah':
					if (!isRegistered) return reply(ind.noregis())
					bambang.sendMessage(from, listsurah() , text, tescuk, cr)
					break
			case 'audio':
				bambang.updatePresence(from, Presence.composing) 
 				if (!isRegistered) return reply(ind.noregis())
				 ayam = fs.readFileSync('./src/music.js');
                 jsonData = JSON.parse(ayam);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                bambang.sendMessage(from, ayam, audio, {mimetype: 'audio/mp3', filename: `.mp3`, quoted: mek})
				break
			case 'kdu':
				bambang.updatePresence(from, Presence.composing) 
 			if (!isRegistered) return reply(ind.noregis())
				 data = fs.readFileSync('./src/husbu.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.teks.image)
                bambang.sendMessage(hasil, image, mek, '\`\`\`Husbu\`\`\`')
				break
			case 'ganteng':
					if (!isRegistered) return reply(ind.noregis())
					membr = []
					const nus = groupMembers
					const msl = groupMembers
					const siapss = nus[Math.floor(Math.random() * nus.length)]
					const sipss = pushname2[Math.floor(Math.random() * msl.length)]
					teks = `Yang paling Ganteng disini Adalah : @${siapss.jid.split('@')[0]}`
					membr.push(siapss.jid)
					mentions(teks, membr, true)
					break
                    case 'beban':
					if (!isRegistered) return reply(ind.noregis())
					membr = []
					const met = groupMembers
					const msd = groupMembers
					const siapsa = met[Math.floor(Math.random() * met.length)]
					const sipsd = pushname2[Math.floor(Math.random() * msd.length)]
					teks = `Yang paling Beban disini Adalah : @${siapsa.jid.split('@')[0]}`
					membr.push(siapsa.jid)
					mentions(teks, membr, true)
					break
                    case 'cantik':
					if (!isRegistered) return reply(ind.noregis())
					membr = []
					const meo = groupMembers
					const msk = groupMembers
					const siaps = meo[Math.floor(Math.random() * meo.length)]
					const sips = pushname2[Math.floor(Math.random() * msk.length)]
					teks = `Yang paling Cantik disini Adalah : @${siaps.jid.split('@')[0]}`
					membr.push(siaps.jid)
					mentions(teks, membr, true)
					break
			case 'gecg':
				    try {
					if (!isRegistered) return reply(ind.noregis())
						axios.get(`https://nekos.life/api/v2/img/gecg`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					bambang.sendMessage(from, buf, image, {quoted: mek,caption: "..."})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
                case 'avatar':
				    try {
					if (!isRegistered) return reply(ind.noregis())
						axios.get(`https://nekos.life/api/v2/img/avatar`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					bambang.sendMessage(from, buf, image, {quoted: mek,caption: "..."})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			case 'wallpapernime':
				    try {
					if (!isRegistered) return reply(ind.noregis())
						axios.get(`https://nekos.life/api/v2/img/wallpaper`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					bambang.sendMessage(from, buf, image, {quoted: mek,caption: "Nih om"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			case 'wallpaperty':
					if (!isRegistered) return reply(ind.noregis())
					reply(ind.wait())
					paper = body.slice(7)
					u = await fetchJson(`http://lolhuman.herokuapp.com/api/wallpaper/querty=${paper}?apikey=MRKINGLEO7890`, {method: 'get'})
					var per = JSON.parse(JSON.stringify(u.result));
					var trest =  pin[Math.floor(Math.random() * per.length)];
					pinehg = await getBuffer(trest)
					bambang.sendMessage(from, pinehg, image, { caption: '*Wallpaper*\n\n*Hasil Pencarian : '+paper+'*', quoted: mek })
					break
			case 'amv':
				bambang.updatePresence(from, Presence.composing) 
			 reply(`*Sedang di Prosess...*`)
				if (!isRegistered) return reply(ind.noregis())
				 data = fs.readFileSync('./src/amv.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                buffer = await getBuffer(randKey.result)
                bambang.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
				break
			case 'runtime':
					if (!isRegistered) return reply(ind.noregis())
				bambang.updatePresence(from, Presence.composing, cr) 
				uptime = process.uptime()
				reply(`Bot Telah Aktif Selama\n*${kyun(uptime)}*`)
				break
			case 'husbu2':
				bambang.updatePresence(from, Presence.composing) 
					if (!isRegistered) return reply(ind.noregis())
					 data = fs.readFileSync('./src/husbu.js');
        		         jsonData = JSON.parse(data);
		                 randIndex = Math.floor(Math.random() * jsonData.length);
		                 randKey = jsonData[randIndex];
		                hasil = await getBuffer(randKey.image)
		                sendImage(hasil, mek, randKey.teks)
				break
			case 'animesaran2':
                                        if (!isRegistered) return reply(ind.noregis())
                                        costum( animesaran2(prefix), text, tescuk, vr)
                                        break
				case 'ram':
					//if (!isRegistered) return reply(ind.noregis())
                                //if (isLimit(sender)) return reply(limits.limitend(pushname2))
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=ramrezero&apikey=MRKINGLEO7788`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					onlydev.sendMessage(from, nye, image, { caption: 'ram chan!!', quoted: key })
					await limitAdd(sender)
					break
				case 'xhamster':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} https://xhamster.com/videos/party-with-friends-end-in-awesome-fucking-5798407`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xhamster?apikey=MRKINGLEO7890&url=${query}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Uploader : ${get_result.author}\n`
                    txt += `Upload : ${get_result.upload}\n`
                    txt += `View : ${get_result.views}\n`
                    txt += `Rating : ${get_result.rating}\n`
                    txt += `Like : ${get_result.likes}\n`
                    txt += `Dislike : ${get_result.dislikes}\n`
                    txt += `Comment : ${get_result.comments}\n`
                    txt += "Link : \n"
                    link = get_result.link
                    for (var x in link) {
                        txt += `${link[x].type} - ${link[x].link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    bambang.sendMessage(from, thumbnail, image, { quoted: mek, caption: txt })
                    break
				case 'xhamstersearch':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xhamstersearch?apikey=MRKINGLEO7890&query=${query}`)
                    get_result = get_result.result
                    txt = ""
                    for (var x in get_result) {
                        txt += `Title : ${get_result[x].title}\n`
                        txt += `Views : ${get_result[x].views}\n`
                        txt += `Duration : ${get_result[x].duration}\n`
                        txt += `Link : ${get_result[x].link}\n\n`
                    }
                    reply(txt)
                    break
				case 'api':
		//if (isBanned) return reply(mess.only.benned)    
		//if (!isUser) return reply(mess.only.userB)
		
		    if (args.length < 1) return reply('Teksnya mana um')
		    love = body.slice(10)
		    if (love.length > 12) return reply('Teksnya kepanjangan, maksimal 9 karakter')
		    reply(ind.wait)
		    bufferxcz = await getBuffer(`https://api.vhtear.com/fire_maker?text=${love}&apikey=MRKINGLEO7788`, {method: 'get'})
		    bambang.sendMessage(from, bufferxcz, image, {quoted: mek, caption: ' '+love})
		    break
				case 'pubglogo': // Update By RzkyO & ItsmeikyXSec404
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(9)
				ll1 = ct.split("|")[0];
                ll2 = ct.split("|")[1];
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=pubg&apikey=MRKINGLEO606`)
				buffer = await getBuffer(anu.result.url)
               bambang.sendMessage(from, buffer, image, {quoted: mek})
                 await limitAdd(sender)
                    break
         case 'butterfly':			
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(10)
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/pro11?text=${ct}&theme=butterfly&apikey=MRKINGLEO606`)
				buffer = await getBuffer(anu.result.url)
                bambang.sendMessage(from, buffer, image, {quoted: mek})
                 await limitAdd(sender)
                    break
case 'shine':				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(6)
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/pro10?text=${ct}&theme=shinetext&apikey=MRKINGLEO606`)
				buffer = await getBuffer(anu.result.url)
                 bambang.sendMessage(from, buffer, image, {quoted:mek})
                 await limitAdd(sender)
                 break
case 'hbd':				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(4)
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/pro10?text=${ct}&theme=birthday&apikey=MRKINGLEO606`)
				buffer = await getBuffer(anu.result.url)
                bambang.sendMessage(from, buffer, image, {quoted:mek})
                await limitAdd(sender)
                break
case 'thenight': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(9)
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/pro9?text=${ct}&theme=thenight&apikey=MRKINGLEO606`)
				buffer = await getBuffer(anu.result.url)
				bambang.sendMessage(from, buffer, image, {quoted:mek})
				await limitAdd(sender)
				break
case 'rainbow': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(8)
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/pro9?text=${ct}&theme=rainbow3d&apikey=MRKINGLEO606`)
				buffer = await getBuffer(anu.result.url)
                bambang.sendMessage(from, buffer, image, {quoted:mek})
                await limitAdd(sender)
                break
case 'textonecup': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(11)
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev3?text=${ct}&theme=textonecup&apikey=MRKINGLEO606`)
				buffer = await getBuffer(anu.result.url)
                 bambang.sendMessage(from, buffer, image, {quoted:mek})
                 await limitAdd(sender)
                 break
case 'nature': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(7)
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev2?text=${ct}&theme=nature&apikey=MRKINGLEO606`)
				buffer = await getBuffer(anu.result.url)
                bambang.sendMessage(from, buffer, image, {quoted:mek})
                await limitAdd(sender)
                break
                 case 'rosegold': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(7)
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev2?text=${ct}&theme=rosegold&apikey=MRKINGLEO606`)
				buffer = await getBuffer(anu.result.url)
                bambang.sendMessage(from, buffer, image, {quoted:mek})
                await limitAdd(sender)
                break
                case 'nature3d': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(9)
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev1?text=${ct}&theme=nature3d&apikey=MRKINGLEO606`)
				buffer = await getBuffer(anu.result.url)
                 bambang.sendMessage(from, buffer, image, {quoted:mek})
                 await limitAdd(sender)
                 break
case 'summer': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(7)
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/alam?text=${ct}&theme=summer&apikey=MRKINGLEO606`)
				buffer = await getBuffer(anu.result.url)
                bambang.sendMessage(from, buffer, image, {quoted:mek})
                await limitAdd(sender)
                break
case 'smoke': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(6)
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro3?text=${ct}&theme=smoke&apikey=MRKINGLEO606`)
				buffer = await getBuffer(anu.result.url)
                bambang.sendMessage(from, buffer, image, {quoted:mek})
                await limitAdd(sender)
                break
case 'ytplay':
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=MRKINGLEO7890&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    txt = `Title : ${get_info.title}\n`
                    txt += `Uploader : ${get_info.uploader}\n`
                    txt += `Duration : ${get_info.duration}\n`
                    txt += `View : ${get_info.view}\n`
                    txt += `Like : ${get_info.like}\n`
                    txt += `Dislike : ${get_info.dislike}\n`
                    txt += `Description :\n ${get_info.description}\n`
                    buffer = await getBuffer(get_info.thumbnail)
                    bambang.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    get_audio = await getBuffer(get_result.audio[3].link)
                    bambang.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`, quoted: mek })
                    break
case 'pinterestdl':
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://lolhuman.herokuapp.com/api/pinterestdl?apikey=MRKINGLEO7890&url=${ini_url}`)
                    ini_url = ini_url.result["736x"]
                    buffer = await getBuffer(ini_url)
                    bambang.sendMessage(from, buffer, image, { quoted: mek })
                    break
case 'ssweb':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
					if (args.length < 1) return reply('Urlnya mana gan?')
					teks = `${body.slice(7)}`
					reply(ind.wait())
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
					ssweb = await getBuffer(anu.gambar)
					bambang.sendMessage(from, ssweb, image, {quoted: mek})
					await limitAdd(sender)
					break 
				case 'afk':
                                        tels = body.slice(4)
                                        if (args.length < 1) return reply('kakak afk karena apa?')
                                        if (!isRegistered) return reply(ind.noregis())
                                        var num = mek.participant
                                        const fku = {
                                                text: `@${num.split("@s.whatsapp.net")[0]} *SEDANG AFK ${tels} JANGAN GANGGU YA*`,
                                                contextInfo: { mentionedJid: [num] }
                                        }
                                        bambang.sendMessage(from, fku, text, {quoted: mek})
				const afk = fs.readFileSync('./assets/afk');
                bambang.sendMessage(from, afk, MessageType.image, {quoted: mek, caption: '*KAKA INI  SEDANG AFK  JANGAN DI GANGGU YA!!*'})
                 break 
                                       break
				case 'unafk':
                                        tels = body.slice(4)
                                        if (args.length < 1) return reply('sukess!!?')
                                        var num = mek.participant
                                        const kl7 = {
                                                text: `@${numm.split("@s.whatsapp.net")[0]} *TELAH KEMBALI DARI AFK ${tels}*`,
                                                contextInfo: { mentionedJid: [num] }
                                        }
                                        bambang.sendMessage(from, kl7, text, {quoted: mek})
                                        break
				case 'buylimit':
				if (!isRegistered) return reply(ind.noregis())
				payout = body.slice(10)
				const koinPerlimit = 1000
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*pengirim* : Admin\n*penerima* : ${pushname}\n*nominal pembelian* : ${payout} \n *harga limit* : ${koinPerlimit}/limit\n *sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
				} 
				break
//CASE BADWORD
                 case 'addbadword':
                    if (!isRegistered) return reply(ind.noregis())
                                        if (!isOwner) return reply(ind.ownerb())
                                        if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    break
                case 'delbadword':
                    if (!isRegistered) return reply(ind.noregis())
                                        if (!isOwner) return reply(ind.ownerb())
                                        if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus BAD WORD!')
                    break 
                case 'listbadword':
                    let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break 
		case 'katakatadilan':
			if (!isRegistered) return reply(ind.noregis())
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katakatadilan.php?apikey=xptn3` , {method: 'get'})
					reply(anu.result)
					break
					case 'katadoi':
			if (!isRegistered) return reply(ind.noregis())
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katadoi.php?apikey=xptn3` , {method: 'get'})
					reply(anu.result)
					break
					case 'hemkel':
			if (!isRegistered) return reply(ind.noregis())
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katakatahacker.php?apikey=xptn3`, {method: 'get'})
					reply(anu.result)
					break
					case 'pantun':
			if (!isRegistered) return reply(ind.noregis())
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/Pantun.php?apikey=xptn3`, {method: 'get'})
					reply(anu.result)
					break
					case 'quoterandom':
			if (!isRegistered) return reply(ind.noregis())
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katastory.php?apikey=xptn3`, {method: 'get'})
					reply(anu.result)
					break
                  case 'nobadword':
                  if (!isRegistered) return reply(ind.noregis())
					if (!isOwner) return reply(ind.ownerb())
					if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('lel🗿')
                if (args[0] === 'enable') {
                if (isBadWord) return reply('*fitur BadWord sudah aktif tadi!!*')
                 	   badword.push(from)
                 	   fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                  	   reply(`badword is enable`)
              	  } else if (args[0] === 'disable') {
                  	  badword.splice(from, 1)
                 	   fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                 	    reply(`badword is disable`)
             	   } else {
                 	   reply(ind.satukos())
                	}
                    break
		//rules
		case 'rules':
                    if (!isRegistered) return reply(ind.noregis())
                   costum( rules(prefix), text, tescuk, cr)
                    break
			//randommenu
		case 'spambrutal':
					if (isLimit(sender)) return reply(limits.limitend(pushname2))
					if (!isRegistered) return reply(ind.noregis())
                reply('Otw.....')
                                       if (args[0].startsWith('08')) return reply('Gunakan nomor awalan 8/n ex : *8796662*')
                                       if (args[0].startsWith('82255123081')) return reply('Gagal tidak dapat menelpon nomer bot')
                                       if (args[0].startsWith('82387804410')) return reply('Gagal tidak dapat menelpon nomer owner')
                                       var data = body.slice(10)
                                       await fetchJson(`https://core.ktbs.io/v2/user/registration/otp/62`+data, {method: 'get'})
                                       await fetchJson(`https://arugaz.herokuapp.com/api/spamcall?no=`+data, {method: 'get'})
                                       await fetchJson(`https://api.danacita.co.id/users/send_otp/?mobile_phone=62`+data, {method: 'get'})
                                       await fetchJson(`https://account-api-v1.klikindomaret.com/api/PreRegistration/SendOTPSMS?NoHP=0`+data, {method: 'get'})
                                       await fetchJson(`https://zeksapi.herokuapp.com/api/spamcall?no=`+data+`&apikey=apivinz`, {method: 'get'})
                                       break
					case 'spamcall':
					if (!isRegistered) return reply(ind.noregis())
					if (!isRegistered) return reply(ind.noregis())
          reply('Wait..')
                                       if (args[0].startsWith('08')) return reply('Gunakan nomor awalan 8/n ex : *8796662*')
                                       if (args[0].startsWith('82255123081')) return reply('Gagal tidak dapat menelpon nomer bot')
                                       if (args[0].startsWith('82387804410')) return reply('Gagal tidak dapat menelpon nomer owner')
                                       var data = body.slice(10)
                                       await fetchJson(`https://core.ktbs.io/v2/user/registration/otp/62`+data, {method: 'get'})
                                       await fetchJson(`https://arugaz.herokuapp.com/api/spamcall?no=`+data, {method: 'get'})
                                       await fetchJson(`https://api.danacita.co.id/users/send_otp/?mobile_phone=62`+data, {method: 'get'})
                                       await fetchJson(`https://account-api-v1.klikindomaret.com/api/PreRegistration/SendOTPSMS?NoHP=0`+data, {method: 'get'})
                                       await fetchJson(`https://api-zeks.harispoppy.com/api/spamcall?no=`+data+`&apikey=apivinz`, {method: 'get'})
                                       break
		case 'googleimage':
				   bambang.updatePresence(from, Presence.composing) 
 				if (!isRegistered) return reply(ind.noregis())
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
				   if (args.length < 1) return reply('Apa yang mau dicari kak?')
					goo = body.slice(7)
					anu = await fetchJson(`https://api.vhtear.com/googleimg?query=${goo}&apikey=${apivhtear}`, {method: 'get'})
					reply(`Harap Sabar Jangan Spam,Jika Ketahuan Spam Banned Balasannya`)
				    var pol = JSON.parse(JSON.stringify(anu.result.result_search));
                    var tes2 =  pol[Math.floor(Math.random() * pol.length)];
					pint = await getBuffer(tes2)
					bambang.sendMessage(from, pint, image, {caption: '*Pencarian : '+goo+'*', quoted: mek })
					await limitAdd(sender)
					break
		case 'nsfwblowjob':
				    try {
					if (!isRegistered) return reply(ind.noregis())
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        reply(ind.wait())
						if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA`, {method: 'get'})
						buffervv = await getBuffer(res.result)
						bambang.sendMessage(from, buffervv, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					await limitAdd(sender)
					break
		  case 'avatarwolf':
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		var gh = body.slice(11)
		var avatar = gh.split("&")[0];
		var wolf = gh.split("&")[1];
		if (args.length < 1) return reply('ã€Œâ—ã€Contoh : ${prefix}avatarwolf Leo & Gans')
		reply(ind.wait())
		buffer = await getBuffer(`https://api.vhtear.com/avatarwolf?text1=${avatar}&text2=${wolf}&apikey=MRKINGLEO7788`)
		bambang.sendMessage(from, buffer, image, {quoted: mek})
		await limitAdd(sender)
		break
		case 'avatarwolf2':
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		var gh = body.slice(11)
		var avatar = gh.split("&")[0];
		var wolf = gh.split("&")[1];
		if (args.length < 1) return reply('ã€Œâ—ã€Contoh : ${prefix}avatarwolf Leo & Gans')
		reply(ind.wait())
		buffer = await getBuffer(`https://api.xteam.xyz/textpro/wolflogoblackwhite?text=${avatar}&text2=${wolf}&APIKEY=MRKINGLEO7890`)
		bambang.sendMessage(from, buffer, image, {quoted: mek})
		await limitAdd(sender)
		break
      case 'mgalax':
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		var gh = body.slice(8)
		var avatar = gh.split("&")[0];
		var wolf = gh.split("&")[1];
		if (args.length < 1) return reply('ã€Œâ—ã€Contoh : ${prefix}avatarwolf Leo & Gans')
		reply(ind.wait())
		buffer = await getBuffer(`https://api.xteam.xyz/textpro/3dmetalgalaxy?text=${avatar}&text2=${wolf}&APIKEY=MRKINGLEO7890`)
		bambang.sendMessage(from, buffer, image, {quoted: mek})
		await limitAdd(sender)
		break
        case 'codwarzone':
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		var gh = body.slice(11)
		var codwar = gh.split("&")[0];
		var zone = gh.split("&")[1];
		if (args.length < 1) return reply('ã€Œâ—ã€Contoh : ${prefix}avatarwolf Leo & Gans')
		reply(ind.wait())
		buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto2/codwarzone?apikey=MRKINGLEO7890&text1=${codwar}&text2=${zone}`)
		bambang.sendMessage(from, buffer, image, {quoted: mek})
		await limitAdd(sender)
		break
		case 'valorantbanner':
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		var gh = body.slice(15)
		var valo = gh.split("&")[0];
		var rant = gh.split("&")[1];
		var banner = gh.split("&")[2];
                 if (args.length < 1) return reply('ã€Œâ—ã€Contoh : ${prefix}valorantbanner Leo & Gans')
		reply(ind.wait())
		buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto3/valorantbanner?apikey=MRKINGLEO7890&text1=${valo}&text2=${rant}&text3=${banner}`)
		bambang.sendMessage(from, buffer, image, {quoted: mek})
		await limitAdd(sender)
		break
		case 'juventusshirt':
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		var gh = body.slice(14)
		var nama = gh.split("&")[0];
		var angka = gh.split("&")[1];
                 if (args.length < 1) return reply('ã€Œâ—ã€Contoh : ${prefix}valorantbanner Leo & Gans')
		reply(ind.wait())
		buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto2/juventusshirt?apikey=MRKINGLEO7890&text1=${nama}&text2=${angka}`)
		bambang.sendMessage(from, buffer, image, {quoted: mek})
		await limitAdd(sender)
		break
		case 'vintage':
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (args.length < 1) return reply('Contoh : ${prefix}vintage onlydevcity')
		har = body.slice(8)
		    reply('*sabar kak*')
		    anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/pro6?text=${har}&theme=vintage&apikey=MRKINGLEO606`, {method: 'get'})
		    buffer = await getBuffer(anu.result.url)
             bambang.sendMessage(from, buffer, image, {quoted: mek})
		    await limitAdd(sender)
		    break
      case 'steel':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}wetglass vhtear`)
gol = body.slice(6)
buffer = await getBuffer(`https://api.xteam.xyz/textpro/steel?text=${gol}&APIKEY=MRKINGLEO7890` )
reply('sabar gan')
bambang.sendMessage(from, buffer, image, {quoted: mek})
await limitAdd(sender)
break
         case 'balon':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}wetglass vhtear`)
gol = body.slice(6)
buffer = await getBuffer(`https://api.xteam.xyz/textpro/cyanfoilballon?text=${gol}&APIKEY=MRKINGLEO7890` )
reply('sabar gan')
bambang.sendMessage(from, buffer, image, {quoted: mek})
await limitAdd(sender)
break
       case 'sklet':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}wetglass vhtear`)
gol = body.slice(6)
buffer = await getBuffer(`https://api.xteam.xyz/textpro/skeleton?text=${gol}&APIKEY=MRKINGLEO7890` )
reply('sabar gan')
bambang.sendMessage(from, buffer, image, {quoted: mek})
await limitAdd(sender)
break
        case 'grandi':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}wetglass vhtear`)
gol = body.slice(7)
buffer = await getBuffer(`https://api.xteam.xyz/photooxy/gradientavatar?text=${gol}&APIKEY=MRKINGLEO7890` )
reply('sabar gan')
bambang.sendMessage(from, buffer, image, {quoted: mek})
await limitAdd(sender)
break
case 'metal':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}wetglass vhtear`)
gol = body.slice(6)
buffer = await getBuffer(`https://api.xteam.xyz/photooxy/metalicglow?text=${gol}&APIKEY=MRKINGLEO7890` )
reply('sabar gan')
bambang.sendMessage(from, buffer, image, {quoted: mek})
await limitAdd(sender)
break
case 'kopi':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}wetglass vhtear`)
gol = body.slice(6)
buffer = await getBuffer(`https://api.xteam.xyz/photooxy/kopi2?text=${gol}&APIKEY=MRKINGLEO7890` )
reply('sabar gan')
bambang.sendMessage(from, buffer, image, {quoted: mek})
await limitAdd(sender)
break
case 'pagar':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}wetglass vhtear`)
gol = body.slice(6)
buffer = await getBuffer(`https://api.xteam.xyz/photooxy/gerbang?text=${gol}&APIKEY=MRKINGLEO7890` )
reply('sabar gan')
bambang.sendMessage(from, buffer, image, {quoted: mek})
await limitAdd(sender)
break
case 'luyal':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}wetglass vhtear`)
gol = body.slice(6)
buffer = await getBuffer(`https://api.xteam.xyz/photooxy/luxuryroyal?text=${gol}&APIKEY=MRKINGLEO7890` )
reply('sabar gan')
bambang.sendMessage(from, buffer, image, {quoted: mek})
await limitAdd(sender)
break
case 'hapyn':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}wetglass vhtear`)
gol = body.slice(6)
buffer = await getBuffer(`https://api.xteam.xyz/textpro/happnewyearfirework?text=${gol}&APIKEY=MRKINGLEO7890` )
reply('sabar gan')
bambang.sendMessage(from, buffer, image, {quoted: mek})
await limitAdd(sender)
break
case 'flage':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}wetglass vhtear`)
gol = body.slice(6)
buffer = await getBuffer(`https://api.xteam.xyz/photooxy/camuflage?text=${gol}&APIKEY=MRKINGLEO7890` )
reply('sabar gan')
bambang.sendMessage(from, buffer, image, {quoted: mek})
await limitAdd(sender)
break
       case 'matrix':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}wetglass vhtear`)
gol = body.slice(7)
buffer = await getBuffer(`https://api.zeks.xyz/api/matrix?apikey=apivinz&text=${gol}` )
reply('sabar gan')
bambang.sendMessage(from, buffer, image, {quoted: mek})
await limitAdd(sender)
break

          case 'wetglass':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}wetglass vhtear`)
gol = body.slice(5)
buffer = await getBuffer(`https://api.vhtear.com/wetglass?text=${gol}&apikey=MRKINGLEO7788` )
reply('「❗」sabar gan')
bambang.sendMessage(from, buffer, image, {quoted: mek})
await limitAdd(sender)
break
		case 'paperonglass':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}wetglass vhtear`)
gol = body.slice(14)
buffer = await getBuffer(`https://videfikri.com/api/textmaker/paperonglass/?text=${gol}`)
reply('「❗」sabar gan')
bambang.sendMessage(from, buffer, image, {quoted: mek})
await limitAdd(sender)
break
		case 'air':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}wetglass vhtear`)
air = body.slice(5)
buffer = await getBuffer(`https://api.vhtear.com/water_maker?text=${air}&apikey=MRKINGLEO7788` )
reply('「❗」sabar gan')
bambang.sendMessage(from, buffer, image, {quoted: mek})
await limitAdd(sender)
break
		case 'cml':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}logoml logoml`)
ml = body.slice(5)
buffer = await getBuffer(`https://api.vhtear.com/logoml?hero=miya&text=${ml}&apikey=MRKINGLEO7788` )
reply('Harap bersabar gan')
bambang.sendMessage(from, buffer, image, {quoted: mek})
await limitAdd(sender)
break
		//case 'cml':
                                if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(limitend(pushname2))
		if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
		    cml = `${body.slice(5)}`
		    buffer = await getBuffer(`https://api.vhtear.com/logoml?hero=ling&text=${cml}&apikey=${apivhtear}`, {method: 'get'})
		    bambang.sendMessage(from, buffer, image, {quoted: mek})
		    await limitAdd(sender) 
		    break  
		case 'quran':
			if (!isRegistered) return reply(ind.noregis())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
				anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
				quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
				bambang.sendMessage(from, quran, text, {quoted: mek})
				await limitAdd(sender)
				break
		case 'delete':
		case 'del':
		case 'd':
			if (!isRegistered) return reply(ind.noregis())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isGroup)return reply(mess.only.group)
			if (!isGroupAdmins)return reply(mess.only.admin)
			bambang.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
			break
		case 'dxd':
				try {
				 if (!isRegistered) return reply(ind.noregis())
						res = await fetchJson(`https://mnazria.herokuapp.com/api/anime?query=dxd`, {method: 'get'})
						bufferqq = await getBuffer(res.result)
						bambang.sendMessage(from, bufferqq, image, {quoted: mek, caption: 'ezzzz'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						bambang.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					break
		case 'loli3':
	if (!isRegistered) return reply(ind.noregis())
                                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
                                        reply(ind.wait())
           res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=BotWeA`, {method: 'get'})
           buffer = await getBuffer(res.result)
           bambang.sendMessage(from, buffer, image, {quoted: mek, caption: '*LOLI IS LIFE*'})
		await limitAdd(sender)
           break
		case 'waifu':
                        if (!isRegistered) return reply(ind.noregis())
                                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
                                        reply(ind.wait())
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/waifu?apikey=BotWeA`, {method: 'get'})
                                        if (anu.error) return reply(anu.error)
                                        buffer = await getBuffer(anu.image)
                                        waifu = `*${anu.desc}`
                                        bambang.sendMessage(from, buffer, image, {quoted: mek, caption: waifu})
                                        break
		case 'dadu':
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			ranp = getRandom('.png')
			rano = getRandom('.webp')
		        random = `${Math.floor(Math.random() * 6)}`
                    hasil = 'https://www.random.org/dice/dice' + random + '.png'
			exec(`wget ${hasil} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			fs.unlinkSync(ranp)
			if (err) return reply(ind.wait())
			buffer = fs.readFileSync(rano)
			bambang.sendMessage(from, buffer, sticker, {quoted: mek})
			fs.unlinkSync(rano)
			})
			break
				case 'jadwaltv':
			        	       bambang.updatePresence(from, Presence.composing) 
		        	               data = await fetchJson(`https://mhankbarbars.herokuapp.com/api/jdtv?ch=${body.slice(10)}&apiKey=${apiKey}`)
					       if (data.error) return reply(data.error)
					       reply(data.result)
					       break
				case 'darkjoke':
				bambang.updatePresence(from, Presence.composing) 
				 if (!isRegistered) return reply(ind.noregis())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				 data = fs.readFileSync('./src/drak.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 darkjokes = await getBuffer(randKey.result)
                 bambang.sendMessage(from, darkjokes, image, {quoted: mek, caption: '\`\`\`GELAP NI BOSS\`\`\`'})
				await limitAdd(sender)
				break
			case 'asupan3': //FIX BY.LEO
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                reply(ind.wait())
                    anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/asupanrana?apikey=MRKINGLEO7890`, {method: 'get'})
                    buffer = await getBuffer(anu.result.url)
                    bambang.sendMessage(from, buffer, video, {quoted: mek, caption: 'Nih kak'})
                    break
             case 'asupan2':
			//if (!isGroup) return reply(ind.groupo())
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                reply(ind.wait())
                    anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/asupan?apikey=MRKINGLEO606`, {method: 'get'})
                    buffer = await getBuffer(anu.result.url)
                    bambang.sendMessage(from, buffer, video, {quoted: mek, caption: 'Nih kak'})
                    break
				case 'asupan':
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asupan?apikey=MRKINGLEO7890`)
                    buffer = await getBuffer(get_result.result)
                    bambang.sendMessage(from, buffer, video, { quoted: mek, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    break
				case 'ninjalogo':
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		var gh = body.slice(11)
		var nin = gh.split("&")[0];
		var ja = gh.split("&")[1];
		if (args.length < 1) return reply('ã€Œâ—ã€Contoh : ${prefix}ninjalogo Rama & Gans')
		reply(ind.wait())
		buffer = await getBuffer(`https://api.xteam.xyz/textpro/ninjalogo?text=${nin}&text2=${ja}&APIKEY=MRKINGLEO7890`)
		bambang.sendMessage(from, buffer, image, {quoted: mek})
		await limitAdd(sender)
		break
				case 'tupai':
		    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await bambang.downloadAndSaveMediaMessage(encmedia)
		    ran = getRandom('.mp3')
		    exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
			fs.unlinkSync(media)
			if (err) return reply('Error!')
			hah = fs.readFileSync(ran)
			bambang.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
			fs.unlinkSync(ran)
		    })
		break
				case 'nangis':
		ranp = getRandom('.gif')
		    rano = getRandom('.webp')
		    anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA', {method: 'get'})
		    if (anu.error) return reply(anu.error)
		    exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			fs.unlinkSync(ranp)
			if (err) return reply(mess.error.stick)
			buffer = fs.readFileSync(rano)
			bambang.sendMessage(from, buffer, sticker, {quoted: mek})
			fs.unlinkSync(rano)
		    })
		    await limitAdd(sender)
		    break
				case 'cium':
		ranp = getRandom('.gif')
		    rano = getRandom('.webp')
		    anu = await fetchJson('https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA', {method: 'get'})
		    if (anu.error) return reply(anu.error)
		    exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			fs.unlinkSync(ranp)
			if (err) return reply(mess.error.stick)
			buffer = fs.readFileSync(rano)
			bambang.sendMessage(from, buffer, sticker, {quoted: mek})
			fs.unlinkSync(rano)
		    })
		    await limitAdd(sender)
		    break
				case 'peluk':
		ranp = getRandom('.gif')
		    rano = getRandom('.webp')
		    anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA', {method: 'get'})
		    if (anu.error) return reply(anu.error)
		    exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			fs.unlinkSync(ranp)
			if (err) return reply(mess.error.stick)
			buffer = fs.readFileSync(rano)
			bambang.sendMessage(from, buffer, sticker, {quoted: mek})
			fs.unlinkSync(rano)
		    })
		    await limitAdd(sender)
		    break		
				case 'slow':
		    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await bambang.downloadAndSaveMediaMessage(encmedia)
		    ran = getRandom('.mp3')
		    exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
			fs.unlinkSync(media)
			if (err) return reply('Error!')
			hah = fs.readFileSync(ran)
			bambang.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
			fs.unlinkSync(ran)
		    })
		break
				case 'gemuk':
		    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await bambang.downloadAndSaveMediaMessage(encmedia)
		    ran = getRandom('.mp3')
		    exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
			fs.unlinkSync(media)
			if (err) return reply('Error!')
			hah = fs.readFileSync(ran)
			bambang.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
			fs.unlinkSync(ran)
		    })
		break
				case 'fast':
		encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		media = await bambang.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.mp3')
		exec(`ffmpeg -i ${media} -filter:a "atempo=1.63,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
		fs.unlinkSync(media)
		if (err) return reply('Error!')
		uhh = fs.readFileSync(ran)
		bambang.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
		fs.unlinkSync(ran)
		})
		break
				case 'pornhub':
                  //if (isBanned) return reply(ind.baned())
		if (!isRegistered) return reply(ind.noregis())
		//if (!isPrem) return reply(ind.premium())
		var gh = body.slice(9)
		var porn = gh.split("&")[0];
		var hub = gh.split("&")[1];
		if (args.length < 1) return reply(`「❗」Contoh : ${prefix}pornhub Leo & Hub`)
		reply(ind.wait())
		buffer = await getBuffer(`https://api.xteam.xyz/textpro/ph?text=${porn}&text2=${hub}&APIKEY=MRKINGLEO7890`)
		bambang.sendMessage(from, buffer, image, {quoted: mek})
		await limitAdd(sender)
		break
				case 'metalteks':
		if (isLimit(sender)) return reply(limits.limitend(pushname2))
		    if (args.length < 1) return reply('Teksnya mana um')
		    love = body.slice(10)
		    if (love.length > 12) return reply('Teksnya kepanjangan, maksimal 9 karakter')
		    reply(ind.wait())
		    bufferxcz = await getBuffer(`https://api.vhtear.com/metal_maker?text=${love}&apikey=MRKINGLEO7788`, {method: 'get'})
		    bambang.sendMessage(from, bufferxcz, image, {quoted: mek, caption: ' '+love})
		    break
				case 'cerpen': // Update By ItsmeikyXSec404 & RzkyO
		     // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    anu = await fetchJson(`http://lolhuman.herokuapp.com/api/cerpen?apikey=MRKINGLEO7890`, {method: 'get'})
		    reply(anu.result.cerpen)
		    await limitAdd(sender)
		    break
				case 'cloudtext':
                  //if (isBanned) return reply(ind.baned())
		if (!isRegistered) return reply(ind.noregis())
		//if (!isPrem) return reply(ind.premium())
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}cloudtext NakanoMiku`)
cloud = body.slice(11)
reply('「❗」Bentar Bro Gw Terbang dumlu yakan')
buffer = await getBuffer(`https://api.xteam.xyz/textpro/cloudtext?text=${cloud}&APIKEY=MRKINGLEO7890`)
bambang.sendMessage(from, buffer, image, {quoted: mek})
break
				case 'transfer':
				if (!isRegistered) return reply(ind.noregis())
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                if (jumblah < 100 ) return reply(`minimal transfer 100`)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('6282313021398@s.whatsapp.net', fee)
                reply(`*「 SUKSES 」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : ${fee}`)
                break
				case 'limit':
				   if (!isRegistered) return reply(ind.noregis())
				   checkLimit(sender)
					break
			//ANIME
			case 'kurumi':
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					bambang.sendMessage(from, nye, image, { caption: 'KURUMI-CHAN', quoted: mek })
					await limitAdd(sender) 
					break 
			case 'miku':
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+miku`, {method: 'get'})
					mi = JSON.parse(JSON.stringify(anu));
					ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					bambang.sendMessage(from, nye, image, { caption: '*I LOVE MIKUâ™¥*', quoted: mek })
					await limitAdd(sender) 
					break 
			case 'naruto':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Naruto`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					bambang.sendMessage(from, nye, image, { caption: '**UZUMAKI NARUTO*', quoted: mek })
					await limitAdd(sender)
					break 
				case 'minato':
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Minato`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					bambang.sendMessage(from, nye, image, { caption: '*MINATO NAMIKAZE*', quoted: mek })
					await limitAdd(sender)
					break 
				case 'boruto':
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Boruto`, {method: 'get'})
					bor = JSON.parse(JSON.stringify(anu));
					uto =  bor[Math.floor(Math.random() * bor.length)];
					nye = await getBuffer(uto)
					bambang.sendMessage(from, nye, image, { caption: '*UZUMAKI BORUTO*', quoted: mek })
					await limitAdd(sender)
					break 
				case 'hinata':
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Hinata`, {method: 'get'})
					hina = JSON.parse(JSON.stringify(anu));
					ta =  hina[Math.floor(Math.random() * hina.length)];
					nye = await getBuffer(ta)
					bambang.sendMessage(from, nye, image, { caption: '*HINATA HYOUGA*', quoted: mek })
					await limitAdd(sender)
					break 
				case 'sasuke':
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sasuke`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					bambang.sendMessage(from, nye, image, { caption: '*SASUKE UCIHA', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'sakura':
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sakura`, {method: 'get'})
					sak = JSON.parse(JSON.stringify(anu));
					kura =  sak[Math.floor(Math.random() * sak.length)];
					nye = await getBuffer(kura)
					bambang.sendMessage(from, nye, image, { caption: '*SAKURA*', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'rem':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=rem`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					bambang.sendMessage(from, nye, image, { caption: '*REM-CHAN*', quoted: mek })
					await limitAdd(sender) 
					break
				case 'chika':
                                if (!isRegistered) return reply(ind.noregis())
                                if (isLimit(sender)) return reply(limits.limitend(pushname2))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=FujiwaraChika`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					bambang.sendMessage(from, nye, image, { caption: '*CHIKA-SAN*', quoted: mek })
					await limitAdd(sender) 
					break
				case 'kurumi2':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					bambang.sendMessage(from, nye, image, { caption: '*kurumi-chan*', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'kaneki':
				if (!isRegistered) return reply(ind.noregis())  
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kaneki`, {method: 'get'})
					kan = JSON.parse(JSON.stringify(anu));
					eki =  kan[Math.floor(Math.random() * kan.length)];
					nye = await getBuffer(eki)
					bambang.sendMessage(from, nye, image, { caption: '*KANEKI-KUN*', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'touka':
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+touka`, {method: 'get'})
					tou = JSON.parse(JSON.stringify(anu));
					ka =  tou[Math.floor(Math.random() * tou.length)];
					nye = await getBuffer(ka)
					bambang.sendMessage(from, nye, image, { caption: '*TOUKA-CHAN*', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'rize':
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+rize`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					bambang.sendMessage(from, nye, image, { caption: '*RIZE-CHAN*', quoted: mek })
					await limitAdd(sender) 	
					break 
				case 'akira':
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+akira`, {method: 'get'})
					ak = JSON.parse(JSON.stringify(anu));
					ara =  ak[Math.floor(Math.random() * ak.length)];
					nye = await getBuffer(ara)
					bambang.sendMessage(from, nye, image, { caption: 'AKIRA-CHAN', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'itori':
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+itori`, {method: 'get'})
					it = JSON.parse(JSON.stringify(anu));
					ori =  it[Math.floor(Math.random() * it.length)];
					nye = await getBuffer(ori)
					bambang.sendMessage(from, nye, image, { caption: 'ITORI-CHAN', quoted: mek })
					await limitAdd(sender) 
					break
			//MAKER
			case 'lovemake':
	    //if (isBanned) return reply(mess.only.benned)    
		//if (!isUser) return reply(mess.only.userB)
                    if (args.length < 1) return reply('teksnya mana kak?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return bambang.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: mek})
                    buffer6 = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${teks}&apikey=${apivhtear}`, {method: 'get'})
                    bambang.sendMessage(from, buffer6, image, {quoted: mek, caption: `${teks}`})
	            break
			case 'airtext':
	    //if (isBanned) return reply(mess.only.benned)    
		//if (!isUser) return reply(mess.only.userB)
                    if (args.length < 1) return reply('teksnya mana kak?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return bambang.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: mek})
                    buffer6 = await getBuffer(`https://api.vhtear.com/water_maker?text=${teks}&apikey=${apivhtear}`, {method: 'get'})
                    bambang.sendMessage(from, buffer6, image, {quoted: mek, caption: `${teks}`})
	            break
			case 'ffbaner':
		//if (isBanned) return reply(ind.baned())
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(limitend(pushname2))
		var gh = body.slice(12)
		var porn = gh.split("&")[0];
		var hub = gh.split("&")[1];
		if (args.length < 1) return reply('Teksnya mana um')
		love = body.slice(10)
		if (love.length > 12) return reply('Teksnya kepanjangan, maksimal 9 karakter')
		reply(ind.wait())
		bufferxcz = await getBuffer(`https://api.vhtear.com/bannerff?title=${love}&text=${porn}&apikey=${apivhtear}`, {method: 'get'})
		bambang.sendMessage(from, bufferxcz, image, {quoted: mek, caption: ' '+love})
		break
          case 'crosslogo6':
                case 'naruto6':
                case 'flowertext6':
                case 'silktext6':
                case 'flametext6':
                case 'glowtext6':
                case 'skytext6':
                case 'cslogo2':
                case 'lithgtext6':
                case 'crismes':
                if (!isRegistered) return reply( ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} yogi`)
                    txt = args.join(" ")
                    reply('[❕] Loading')
                    anu = await fetchJson(`https://api.zeks.xyz/api/${command}?text=${txt}&apikey=apivinz`, {method: 'get'})
                    tod = await getBuffer(anu.result)
                    bambang.sendMessage(from, tod, image, {caption: 'Nih kak..*', quoted: mek})
                     break
					case 'qoutesnime':
                 if (!isRegistered) return reply(ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    anu = await fetchJson(`http://api.lolhuman.xyz/api/qoutesnime?apikey=MRKINGLEO7890`)
		    reply(anu.data.quote)
		    await limitAdd(sender)
		    break
					case 'summer':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(8)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandsummer?text=${aruga}`)
					bambang.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'sandwrite':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(11)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandwrite?text=${aruga}`)
					bambang.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					//case 'metaldark':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(11)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/metaldark?text=${aruga}`)
					bambang.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
            case 'dropwater':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(11)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/dropwater?text=${aruga}`)
					bambang.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'grenneon':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(10)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/greenneon?text=${aruga}`)
					bambang.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'neontext':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(10)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/neontext?text=${aruga}`)
					bambang.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'cersex':
               // if (isBanned) return reply(mess.only.benned)    
                //if (!isUser) return reply(mess.only.userB)
        		
                if (isLimit(sender)) return reply(limitend(pushname2))
                   anu = await fetchJson(`https://api.vhtear.com/cerita_sex&apikey=${apivhtear}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   sex = await getBuffer(anu.result.image)
                   reply (ind.wait)
                   cerita = `• *Judul:* ${anu.result.judul}\n\n${anu.result.cerita}`
                   bambang.sendMessage(from, sex, image, {quoted: mek, caption: cerita})
                   await limitAdd(sender) 
                   break 
					case 'film':
		//if (isBanned) return reply(mess.only.benned)
		//if (!isUser) return reply(mess.only.userB)
				
		if (isLimit(sender)) return reply(limitend(pushname2))
		if (args.length < 1) return reply('Mau Cari Film Apa?')
		reply(ind.wait)
		anu = await fetchJson(`http://www.omdbapi.com/?s=${body.slice(6)}&plot=full&apikey=56b1b6f0&r=json`, {method: 'get'})
		hasil = '=========================\n'
		for(let film of anu.Search) {
		hasil += `• *Title:* ${film.Title}\n• *Rilis Tahun:* ${film.Year}\n• *Type:* ${film.Type}\n• *Link:* https://m.imdb.com/title/${film.imdbID}\n=========================\n`
		}
		reply(hasil.trim())
		await limitAdd(sender) 
		    break 
					case 'toxic':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(7)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/toxictext?text=${aruga}`)
					bambang.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'sumery':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(8)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandsummery?text=${aruga}`)
					bambang.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'narutobanner':
//if (isBanned) return reply(mess.only.benned)    
//if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}narutobanner leo`)
nar = body.slice(14)
reply(ind.wait())
narba = await getBuffer(`https://videfikri.com/api/textmaker/narutobanner/?text=${nar}`)
bambang.sendMessage(from, narba, image, {quoted: mek})
await limitAdd(sender)
break
					case 'shadow':
//if (isBanned) return reply(mess.only.benned)    
//if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}shadow dns`)
sdow = body.slice(8)
reply(ind.wait)
shan = await getBuffer(`https://videfikri.com/api/textmaker/shadowtext/?text=${sdow}`)
bambang.sendMessage(from, shan, image, {quoted: mek})
await limitAdd(sender)
break
					case 'coffe':
//if (isBanned) return reply(mess.only.benned)    
//if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}coffe dns`)
kop = body.slice(7)
reply(ind.wait)
ppi = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup/?text=${kop}`)
bambang.sendMessage(from, ppi, image, {quoted: mek})
await limitAdd(sender)
break
					case 'candy':
//if (isBanned) return reply(mess.only.benned)    
//if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}candy dns`)
cndy = body.slice(7)
reply(ind.wait)
prmen = await getBuffer(`https://videfikri.com/api/textmaker/sweetcandy/?text=${cndy}`)
bambang.sendMessage(from, prmen, image, {quoted: mek})
await limitAdd(sender)
break
					case 'woodblock':
//if (isBanned) return reply(mess.only.benned)    
//if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}woodblock dns`)
woblk = body.slice(11)
reply(ind.wait)
gblok = await getBuffer(`https://videfikri.com/api/textmaker/woodblock/?text=${woblk}`)
bambang.sendMessage(from, gblok, image, {quoted: mek})
await limitAdd(sender)
break
					case 'pupycute':
//if (isBanned) return reply(mess.only.benned)    
//if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}pupycute dns`)
puki = body.slice(10)
reply(ind.wait)
cute = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/puppycute?apikey=MRKINGLEO7890&text=${puki}`)
bambang.sendMessage(from, cute, image, {quoted: mek})
await limitAdd(sender)
break
					case 'romance':
//if (isBanned) return reply(mess.only.benned)    
//if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}romance dns`)
roce = body.slice(9)
reply(ind.wait)
roma = await getBuffer(`https://videfikri.com/api/textmaker/romancetext/?text=${roce}`)
bambang.sendMessage(from, roma, image, {quoted: mek})
await limitAdd(sender)
break
					case 'mugflower':
//if (isBanned) return reply(mess.only.benned)    
//if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}mugflower dns`)
mug = body.slice(11)
reply(ind.wait)
mflowg = await getBuffer(`https://videfikri.com/api/textmaker/mugflower/?text=${mug}`)
bambang.sendMessage(from, mflowg, image, {quoted: mek})
await limitAdd(sender)
break
					case 'glowneon':
//if (isBanned) return reply(mess.only.benned)    
//if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}glowneon dns`)
tekas = body.slice(10)
reply(ind.wait)
glown = await getBuffer(`https://videfikri.com/api/textmaker/glowingneon/?text=${tekas}`)
bambang.sendMessage(from, glown, image, {quoted: mek})
await limitAdd(sender)
break
					case 'candlemug':
//if (isBanned) return reply(mess.only.benned)    
//if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}candlemug dns`)
ddu = body.slice(11)
reply(ind.wait)
clmug = await getBuffer(`https://videfikri.com/api/textmaker/candlemug/?text=${ddu}`)
bambang.sendMessage(from, clmug, image, {quoted: mek})
await limitAdd(sender)
break
					case 'burnpaper':
//if (isBanned) return reply(mess.only.benned)    
//if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}burnpaper dns`)
todi = body.slice(11)
reply(ind.wait)
pper = await getBuffer(`https://videfikri.com/api/textmaker/burnpaper/?text=${todi}`)
bambang.sendMessage(from, pper, image, {quoted: mek})
await limitAdd(sender)
break
					case 'gay':
//if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait)
  owgi = await bambang.downloadAndSaveMediaMessage(ger)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  teks = `${anu.display_url}`
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(ind.error.stick)
nobg = fs.readFileSync(rano)
bambang.sendMessage(from, nobg, sticker, {
  quoted: mek
})
fs.unlinkSync(rano)
  })

} else {
  reply('Gunakan foto!')
}
break
					case 'blood':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(7)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/bloodtext?text=${aruga}`)
					bambang.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'firework':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					arugazzz = body.slice(10)
					reply(ind.wait())
					arugazzz = await getBuffer(`https://arugaz.my.id/api/textpro/firework?text=${arugazzz}`)
					bambang.sendMessage(from, arugazzz, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'lava':
		    if (!isRegistered) return reply(ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    if (args.length < 1) return reply(ind.wrongf())
		    aruga = body.slice(6)
		    reply(ind.wait())
		    aruga = await getBuffer(`https://arugaz.my.id/api/textpro/lavatext?text=${aruga}`)
		    bambang.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
		    await limitAdd(sender)
		    break
					//case 'lava':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(6)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/lavatext?text=${aruga}`)
					bambang.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'randomexo':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					shizukaa = await fetchJson(`https://api-shizuka.herokuapp.com/randomexo?apikey=itsmeiky633`)
					shizuka = await getBuffer(shizukaa.result)
					bambang.sendMessage(from, shizuka, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'blackpink':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					shizuka = await fetchJson(`https://api-shizuka.herokuapp.com/blackpink?apikey=${shizukaapi}`)
					shizukaa = await getBuffer(shizuka.result)
					bambang.sendMessage(from, shizukaa, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'randomanime':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					shizuka = await fetchJson(`https://api-shizuka.herokuapp.com/randomanime?apikey=${shizukaapi}`)
					shizukaa = await getBuffer(shizuka.result)
					bambang.sendMessage(from, shizukaa, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'randomhusbu':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					shizuka = await fetchJson(`https://api-shizuka.herokuapp.com/husbu?apikey=${shizukaapi}`)
					shizukaa = await getBuffer(shizuka.result)
					bambang.sendMessage(from, shizukaa, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'randomislamic':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					shizuka = await fetchJson(`https://api-shizuka.herokuapp.com/wpislamic?apikey=${shizukaapi}`)
					shizukaa = await getBuffer(shizuka.result)
					bambang.sendMessage(from, shizukaa, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'randomcyberspace':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					shizuka = await fetchJson(`https://api-shizuka.herokuapp.com/wpcyberspace?apikey=${shizukaapi}`)
					shizukaa = await getBuffer(shizuka.result)
					bambang.sendMessage(from, shizukaa, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'randomgame':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					shizuka = await fetchJson(`https://api-shizuka.herokuapp.com/wpgame?apikey=${shizukaapi}`)
					shizukaa = await getBuffer(shizuka.result)
					bambang.sendMessage(from, shizukaa, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'neko':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=${TobzKey}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						bambang.sendMessage(from, buffer, image, {quoted: mek, caption: '*Nih neko mu*'})
					await limitAdd(sender)
					break
					case 'randommountain':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					shizuka = await fetchJson(`https://api-shizuka.herokuapp.com/wpmountain?apikey=${shizukaapi}`)
					shizukaa = await getBuffer(shizuka.result)
					bambang.sendMessage(from, shizukaa, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'randomloli':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					shizuka = await fetchJson(`https://api-shizuka.herokuapp.com/randomloli?apikey=${shizukaapi}`)
					shizukaa = await getBuffer(shizuka.result)
					bambang.sendMessage(from, shizukaa, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'randomprogramer':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					shizuka = await fetchJson(`https://api-shizuka.herokuapp.com/wpprogramer?apikey=${shizukaapi}`)
					shizukaa = await getBuffer(shizuka.result)
					bambang.sendMessage(from, shizukaa, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'silktext':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))				
					if (args.length < 1) return reply(ind.wrongf())
					silk = body.slice(10)
					if (silk.length > 7) return reply('Teksnya kepanjangan Tod, maksimal 6 karakter')
					buffer = await getBuffer(`https://api.vhtear.com/silktext?text=${silk}&apikey=${apivhtear}`)
					reply(ind.wait())
		    			bambang.sendMessage(from, buffer, image, {quoted: mek})
		    			await limitAdd(sender)	
		    			break
					case 'slide':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('*Textnya mana Tod?*')
					teks = `${body.slice(7)}`
					atytyd = await getBuffer(`https://api.vhtear.com/slidingtext?text=${teks}&apikey=${apivhtear}`, {method: 'get'})
					reply(ind.wait)
					bambang.sendMessage(from, atytyd, video, {quoted: mek})
					await limitAdd(sender) 
					break  
					case 'cpubg':
					case 'pubg':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya mana gan??')
				 	if (args.length > 10) return reply('karakter minimal 10')
					cpubg = `${body.slice(7)}`
					cpubg1 = cpubg.split("/")[0];
					cpubg2 = cpubg.split("/")[1];
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=pubg&text1=${cpubg1}&text2=${cpubg2}&apikey=${TobzKey}`, {method: 'get'})
					cpubg = await getBuffer(anu.result)
					bambang.sendMessage(from, cpubg, image, {quoted: mek})
					await limitAdd(sender) 
					break  
					case 'cml':
					case 'ml':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya mana gan??')
                     			if (args.length > 10) return reply('karakter minimal 10')
					cml = `${body.slice(5)}`
					cml1 = cml.split("/")[0];
					cml2 = cml.split("/")[1];
					buffer = await getBuffer(`https://api.vhtear.com/logoml?hero=${cml1}&text=${cml2}&apikey=${apivhtear}`, {method: 'get'})
					bambang.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender) 
					break  
					case 'glitch':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
              	   			 if (args.length < 1) return reply('teksnya mana gan?')
                    			hm = `${body.slice(8)}`
                    			text1 = hm.split("&")[0];
                    			text2 = hm.split("&")[1];                    
                    			glitch = await getBuffer(`https://api.vhtear.com/glitchtext?text1=${text1}&text2=${text2}&apikey=${apivhtear}`, {method: 'get'})
                    			bambang.sendMessage(from, glitch, image, {quoted: mek, caption: 'nih gan'})
			     		await limitAdd(sender) 
			     		break 
case 'hartatahta':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}hartatahta botwea`)
har = body.slice(12)
buffer = await getBuffer(`https://api.vhtear.com/hartatahta?text=${har}&apikey=${apivhtear}` )
reply('「❗」Hirti Tihti Tai Anjg :v')
bambang.sendMessage(from, buffer, image, {quoted: mek})
await limitAdd(sender)
break
			case 'kunci':   
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
              	    if (args.length < 1) return reply('teksnya mana kak?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return bambang.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: mek})
                    buffer6 = await getBuffer(`https://api.vhtear.com/padlock?text1=${teks}&text2=${teks}&apikey=${apivhtear}`, {method: 'get'})
                    bambang.sendMessage(from, buffer6, image, {quoted: mek, caption: `${teks}`})
		await limitAdd(sender)
		break
				case 'trigger':
		    //if (!isUser) return reply(mess.only.userB)
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           reply(ind.wait)
         owgi = await bambang.downloadAndSaveMediaMessage(ger)
           anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
        teks = `${anu.display_url}`
         ranp = getRandom('.gif')
        rano = getRandom('.webp')
        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
       exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(ind.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                bambang.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break
				case 'cparty':
		    //if (isBanned) return reply(mess.only.benned)    
		//if (!isUser) return reply(mess.only.userB)
		//if (!isPublic) return reply(mess.only.publikG)
		if (isLimit(sender)) return reply(limitend(pushname2))
		    part = `${body.slice(8)}`
		    reply(ind.wait)
		    bufferu = await getBuffer(`https://api.vhtear.com/partytext?text=${part}&apikey=${apivhtear}`, {method: 'get'})
		    bambang.sendMessage(from, bufferu, image, {caption: 'Nih kak', quoted: mek})
		    await limitAdd(sender) 
		    break
	case 'antidelete':
        	const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
        	const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
        	const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
        	const isRevoke = dataRevoke.includes(from)
        	const isCtRevoke = dataCtRevoke.data
        	const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
        	const argz = body.split(' ')
        	if (argz.length === 1) return bambang.sendMessage(from, `Penggunaan fitur antidelete :\n\n_${prefix}antidelete [aktif/mati]* (Untuk grup)\n_${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n_${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
        	if (argz[1] == 'aktif') {
          	if (isGroup) {
            if (isRevoke) return bambang.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
            dataRevoke.push(from)
            fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
            bambang.sendMessage(from, `*Sukses mengaktifkan Antidelete Grup!*`, MessageType.text)
          	} else if (!isGroup) {
            bambang.sendMessage(from, `Untuk kontak penggunaan _${prefix}antidelete ctaktif*`, MessageType.text)
          	}
        	} else if (argz[1] == 'ctaktif') {
          	if (!isOwner) return 
          	if (!isGroup) {
            if (isCtRevoke) return bambang.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
            dataCtRevoke.data = true
            fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
            bambang.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
          	} else if (isGroup) {
            bambang.sendMessage(from, `Untuk grup penggunaan _${prefix}antidelete aktif*`, MessageType.text)
          	}
        	} else if (argz[1] == 'banct') {
          	if (isBanCtRevoke) return bambang.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
          	if (argz.length === 2 || argz[2].startsWith('0')) return bambang.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
          	dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
          	fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
          	bambang.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
        	} else if (argz[1] == 'mati') {
          	if (isGroup) {
            const index = dataRevoke.indexOf(from)
            dataRevoke.splice(index, 1)
            fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
            bambang.sendMessage(from, `*Sukses mematikan Antidelete Grup!*`, MessageType.text)
          	} else if (!isGroup) {
            bambang.sendMessage(from, `Untuk kontak penggunaan _${prefix}antidelete ctmati*`, MessageType.text)
          	}
        	} else if (argz[1] == 'ctmati') {
          	if (!isOwner) return
          	if (!isGroup) {
            dataCtRevoke.data = false
            fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
            bambang.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
          	} else if (isGroup) {
            bambang.sendMessage(from, `Untuk grup penggunaan _${prefix}antidelete mati*`, MessageType.text)
          	}
        	}
        	break
      case 'asupan':
		bambang.updatePresence(from, Presence.composing) 
		 //if (isBanned) return reply(mess.only.benned)    
		 if (isLimit(sender)) return reply(limitend(pushname2))
		//if (!isUser) return reply(mess.only.userB)
		//if (!isPublic) return reply(mess.only.publikG)
		reply(ind.wait)
		 data = fs.readFileSync('./bambangGans/asupan.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 asupan = await getBuffer(randKey.result)
                 bambang.sendMessage(from, asupan, video, {quoted: mek, caption: '\`\`\`ASUPAN GAN:V\`\`\`'})
		await limitAdd(sender) 
		break
				//case 'trigger':
				case 'tg':
                                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         reply(ind.wait)
                                         owgi = await  bambang.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.gif')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                if (err) return reply(ind.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                 bambang.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break
                case '1cak':
				    try {
					    if (!isRegistered) return reply(ind.noregis())
					    if (isLimit(sender)) return reply(ind.limitend(pusname))
					    if (!isGroup) return reply(ind.groupo())
					    if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`https://st4rz.herokuapp.com/api/1cak`, {method: 'get'})
						buffer = await getBuffer(res.result)
						bambang.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(ind.wrongf())
					}
					await limitAdd(sender)
					break
					case 'antilinkgrup':
                 case 'antilinkgc':
		    if (!isGroup) return reply(ind.groupo())
		    if (!isGroupAdmins) return reply(ind.admin())
		    if (!isBotGroupAdmins) return reply(ind.badmin())					
		    if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
		    if (Number(args[0]) === 1) {
			if (isAntilink) return reply('UDAH NYALA KAK')
			antilink.push(from)
			fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
			reply('SUKSES MENGAKTIFKAN ANTI LINK DI GROUP')
			bambang.sendMessage(from,`ALLERT!!! Jika bukan admin jangan kirim link grup`, text)
		    } else if (Number(args[0]) === 0) {
			if (!isAntiLink) return reply('EMANG AKTIF?')
			var ini = anti.botLangsexOf(from)
			antilink.splice(ini, 1)
			fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
			reply('SUKSES MEMATIKAN ANTI LINK DI GROUP')
		    } else {
			reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
		    }
		    break
                case 'fdeface':
            ge = args.join('')         
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await bambang.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
	    var anu = {
    	detectLinks: false
	    }
	    var mat = await bambang.generateLinkPreview(url)
	    mat.title = title;
	    mat.description = desc;
	    mat.jpegThumbnail = bufer;
	    mat.canonicalUrl = buu; 
	    bambang.sendMessage(from, mat, MessageType.extendedText, anu)
            break
                case 'pemandangan':
		    // Fix Case By Yogi/Hans⛔
                 if (!isRegistered) return reply( ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    bambang.updatePresence(from, Presence.composing) 
		    data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic%20pemandangan%20alam`, {method: 'get'})
		    reply(ind.wait())
		    n = JSON.parse(JSON.stringify(data));
		    nimek =  n[Math.floor(Math.random() * n.length)];
		    pok = await getBuffer(nimek)
		    bambang.sendMessage(from, pok, image, { quoted: mek })
		    await limitAdd(sender)
		    break
                case 'kelinci':
		    // Fix Case By Leo⛔
                 if (!isRegistered) return reply( ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    bambang.updatePresence(from, Presence.composing) 
		    data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-rabbit`, {method: 'get'})
		    reply(ind.wait())
		    n = JSON.parse(JSON.stringify(data));
		    nimek =  n[Math.floor(Math.random() * n.length)];
		    pok = await getBuffer(nimek)
		    bambang.sendMessage(from, pok, image, { quoted: mek })
		    await limitAdd(sender)
		    break
                case 'doraemon':
		    // Fix Case By Leo
                 if (!isRegistered) return reply( ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    data = await fetchJson(`https://api.fdci.se/rep.php?gambar=doraemon`, {method: 'get'})
		    reply(ind.wait())
		    n = JSON.parse(JSON.stringify(data));
		    nimek =  n[Math.floor(Math.random() * n.length)];
		    pok = await getBuffer(nimek)
		    bambang.sendMessage(from, pok, image, { quoted: mek })
		    await limitAdd(sender)
		    break
                case 'ww2':
                 if (!isRegistered) return reply( ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=ww2`, {method: 'get'})
		    reply(ind.wait())
		    var n = JSON.parse(JSON.stringify(anu));
		    var nimek =  n[Math.floor(Math.random() * n.length)];
		    pok = await getBuffer(nimek)
		    bambang.sendMessage(from, pok, image, { quoted: mek })
		    await limitAdd(sender)
		    break
                case 'freefireimg':
                 if (!isRegistered) return reply( ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=freefire`, {method: 'get'})
		    reply(ind.wait())
		    var n = JSON.parse(JSON.stringify(anu));
		    var nimek =  n[Math.floor(Math.random() * n.length)];
		    pok = await getBuffer(nimek)
		    bambang.sendMessage(from, pok, image, { quoted: mek })
		    await limitAdd(sender)
		    break
                //case 'quotes':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/quotesnime/random`, {method: 'get'})
					reply(anu.quotes)
					await limitAdd(sender)
					break		
					case 'quotes':
//if (isBanned) return reply(ind.baned())
if (!isRegistered) return reply(ind.noregis())
//if (isLimit(sender)) return reply(ind.limitend(pusname))
quotes = body.slice(1)
const quo =['Lebih baik mengerti sedikit daripada salah mengerti.','Hampir semua pria memang mampu bertahan menghadapi kesulitan. Namun, jika Anda ingin menguji karakter sejati pria, beri dia kekuasaan.','Bila tekad seseorang kuat dan teguh, Tuhan akan bergabung dalam usahanya.','Penderitaan adalah pelajaran.','Ilmu pengetahuan tanpa agama adalah pincang.','Hidup itu seperti sebuah sepeda, agar tetap seimbang kita harus tetap bergerak.','Perbedaan masa lalu, sekarang, dan masa depan tak lebih dari ilusi yang keras kepala.','Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?','Belas kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri.','Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri.','Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama.','Manusia akan bahagia selama ia memilih untuk bahagia.','Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang.','Apabila sempurna akal seseorang, maka sedikit perkataannya.','Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya.','Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang.','Yang paling melelahkan dalam hidup adalah menjadi orang yang tidak tulus.','Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup.','Penundaan adalah kuburan dimana peluang dikuburkan.','Cinta bukan saling menatap mata, namun melihat ke arah yang sama bersama-sama.','Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tindakan, tetapi kebiasaan.','Jangan pernah mencoba menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja.','Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan.','Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi.','Kita tak bisa melakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan.','Kesabaran adalah teman dari kebijaksanaan.','Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain.','Dimanapun engkau berada selalulah menjadi yang terbaik dan berikan yang terbaik dari yang bisa kita berikan.','Kebencian seperti halnya cinta, berkobar karena hal-hal kecil.','Anda tidak perlu harus berhasil pada kali pertama.','Satu jam yang intensif, jauh lebih baik dan menguntungkan daripada bertahun-tahun bermimpi dan merenung-renung.','Hal terbaik yang bisa Anda lakukan untuk orang lain bukanlah membagikan kekayaan Anda, tetapi membantu dia untuk memiliki kekayaannya sendiri.','Tidak ada jaminan keberhasilan, tetapi tidak berusaha adalah jaminan kegagalan.','Aku tidak tahu kunci sukses itu apa, tapi kunci menuju kegagalan adalah mencoba membuat semua orang senang.']
const tes = quo[Math.floor(Math.random() * quo.length)]
bambang.sendMessage(from, ''+tes+'\n\n_By : ⸸MrKing⸸Panutanque._', text, { quoted: mek })
await limitAdd(sender)
break
					case 'wanted':
//if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait)
  owgi = await bambang.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hsehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`)
 bambang.sendMessage(from, hsehe, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break
					case 'gtav':
//if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait)
  owgi = await bambang.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hedhe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
 bambang.sendMessage(from, hedhe, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break
					case 'crossgun':
//if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait)
  owgi = await bambang.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  haehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
 bambang.sendMessage(from, haehe, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break
					case 'raindrop':
//if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait)
  owgi = await bambang.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehre = await getBuffer(`https://videfikri.com/api/textmaker/raindrop/?urlgbr=${anu.display_url}`)
 bambang.sendMessage(from, hehre, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break
					case 'infonomor':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
                if (data.error) return reply(data.error)
                if (data.result) return reply(data.result)
                hasil = `╠➥ internasional : ${data.international}\n╠➥ nomor : ${data.nomor}\n╠➥ operator : ${data.op}`
                reply(hasil)
                await limitAdd(sender)
					break 
                case 'slap':
                    kapankah = body.slice(1)
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
					const slap =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','memek lu semua','lihat anak anjing lagi baca','ngentot lu ya?','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak dajjal','puki lu','anjing ngajak gelud?','sama hantu takut cupu ngentod','cupu cupu aja gausah bacot','kontol lu semua','bocah lu semua kontol','3 Hari Lagi','Ngontol Amat']
					const ple = slap[Math.floor(Math.random() * slap.length)]
					pod = await getBuffer(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`)
					bambang.sendMessage(from, pod, image, { quoted: mek, caption: '*Toxic*\n\n'+ ple })
					await limitAdd(sender)
					break
					case 'tampar':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer('https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif', {method: 'get'})
					exec(`wget ${buffer.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						bambang.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                case 'beritahoax':
                     if (!isRegistered) return reply(ind.noregis())
                     if (isLimit(sender)) return reply(ind.limitend(pusname))
                    bambang.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Gambar* : ${i.image}\n*Title* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break 
					case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
				    bambang.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await bambang.downloadAndSaveMediaMessage(enmedia)
					await bambang.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya,Wangy sekali😗')
					break 
					case 'brainly':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					bambang.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
					await limitAdd(sender)
					break 
				case 'bcgc':
				     if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await bambang.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							bambang.sendMessage(_.jid, buff, image, {caption: `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
						}
						reply('Sukses broadcast group')
					}
					break 
				case 'pinterest': 
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Mau Nyari Foto Apa???')
					pinte = body.slice(11)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=${pinte}&apikey=${apivhtear}`, {method: 'get'})
					reply(ind.wait())
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pinehg = await getBuffer(trest)
					bambang.sendMessage(from, pinehg, image, { caption: '*Pinterest*\n\n*Hasil Pencarian : '+pinte+'*', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'husbu':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			   	if (!isGroup) return reply(ind.groupo())
					res = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu?apikey=${TobzKey}`)
					reply(ind.wait())
					buffer = await getBuffer(res.image)
					bambang.sendMessage(from, buffer, image, {quoted: mek, caption: '>_<'})
					await limitAdd(sender)
					break
				case 'loli':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(6)
					anu = await fetchJson(`https://api.vhtear.com/randomloli&apikey=${apivhtear}`, {method: 'get'})
					reply(ind.wait())
					buffer = await getBuffer(anu.result.result)
					bambang.sendMessage(from, buffer, image, { caption: 'kyaa >_< o... onii - chan >///<', quoted: mek})
					await limitAdd(sender)
					break		
				case 'nekonime':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(10)
					anu = await fetchJson(`https://api.vhtear.com/randomnekonime&apikey=${apivhtear}`, {method: 'get'})
					reply(ind.wait())
					buffer = await getBuffer(anu.result.result)
					bambang.sendMessage(from, buffer, image, { caption: 'Save loli, Pukul furry', quoted: mek})
					await limitAdd(sender)
					break
				case 'neko':
                		if (!isRegistered) return reply(ind.noregis())
               			if (isLimit(sender)) return reply(ind.limitend(pusname))
					res = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=${TobzKey}`, {method: 'get'})
					reply(ind.wait())
					buffer = await getBuffer(res.result)
					bambang.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih nekonime mu >_<'})
					await limitAdd(sender)
					break
				case 'ranime':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isNsfw) return reply(ind.nsfwoff())
					gatauda = body.slice(8)
					reply(ind.wait())
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=${TobzKey}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					bambang.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
				case 'nsfwloli':
				try {   
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isNsfw) return reply(ind.nsfwoff())
				if (!isGroup) return reply(ind.groupo()) 
				res = await fetchJson(`https://api.vhtear.com/randomloli&apikey=${apivhtear}`, {method: 'get'})
					reply(ind.wait())
					buffer = await getBuffer(res.result.result)
					bambang.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
				} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
				}
					await limitAdd(sender)
					break 
				case 'ero':
				    try {
                        if (!isRegistered) return reply(ind.noregis())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                        if (!isNsfw) return reply(ind.nsfwoff())
						axios.get(`https://nekos.life/api/v2/img/ero`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					bambang.sendMessage(from, buf, image, {quoted: mek,caption: "*INGAT ADA TUHAN KAK*"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*ERROR*')
					}
					break
			case 'nsfwpussy':
				    try {
					if (!isRegistered) return reply(ind.noregis())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                        if (!isNsfw) return reply(ind.nsfwoff())
						axios.get(`https://nekos.life/api/v2/img/pussy_jpg`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					bambang.sendMessage(from, buf, image, {quoted: mek,caption: "*INGAT ADA TUHAN KAK*"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*ERROR*')
					}
					break
			case 'nsfwyuri':
				    try {
					if (!isRegistered) return reply(ind.noregis())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                        if (!isNsfw) return reply(ind.nsfwoff())
						axios.get(`https://nekos.life/api/v2/img/yuri`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					bambang.sendMessage(from, buf, image, {quoted: mek,caption: "*INGAT ADA TUHAN KAK*"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*ERROR*')
					}
					break
			case 'nsfwtrap':
				    try {
					if (!isRegistered) return reply(ind.noregis())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                        if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=${apikey}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						bambang.sendMessage(from, buffer, image, {quoted: mek, caption: '*INGAT ADA TUHAN KAK*'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*ERROR*')
					}
					break
			case 'nsfwloli2':
				    try {
					if (!isRegistered) return reply(ind.noregis())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                        if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`https://api.lolis.life/random?nsfw=true`, {method: 'get'})
						buffer = await getBuffer(res.url)
						bambang.sendMessage(from, buffer, image, {quoted: mek, caption: '*INGAT ADA TUHAN KAK*'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*ERROR*')
					}
					break
			case 'sideoppai':

				    try {
					if (!isRegistered) return reply(ind.noregis())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                        if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`http://lolhuman.herokuapp.com/api/random/nsfw/sideoppai?apikey=${apiKey}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						bambang.sendMessage(from, buffer, image, {quoted: mek, caption: '*INGAT ADA TUHAN KAK*'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					break
			case 'nsfwwaifu':
				    try {
				 if (!isRegistered) return reply(ind.noregis())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                        if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`http://lolhuman.herokuapp.com/api/random/nsfw/waifu?apikey=${apiKey}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						bambang.sendMessage(from, buffer, image, {quoted: mek, caption: '*INGAT ADA TUHAN KAK*'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
					case 'ecchi':
				    try {
				 if (!isRegistered) return reply(ind.noregis())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                        if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`http://lolhuman.herokuapp.com/api/random/nsfw/ecchi?apikey=${apiKey}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						bambang.sendMessage(from, buffer, image, {quoted: mek, caption: '*INGAT ADA TUHAN KAK*'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
			case 'solo':
				    try {
					if (!isRegistered) return reply(ind.noregis())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                        if (!isNsfw) return reply(ind.nsfwoff())
						axios.get(`https://nekos.life/api/v2/img/solo`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					bambang.sendMessage(from, buf, image, {quoted: mek,caption: "*INGAT ADA TUHAN KAK*"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			case 'waifu2':
				    try {
					if (!isRegistered) return reply(ind.noregis())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                        if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/waifu?apikey=${apiKey}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						bambang.sendMessage(from, buffer, image, {quoted: mek, caption: '*:)*'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
				case 'nsfwneko':
				try {  
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=${TobzKey}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						bambang.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
				case 'wibu':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					data = await fetchJson(`https://api.vhtear.com/randomwibu&apikey=${apivhtear}`)
					reply(ind.wait())
					buffer = await getBuffer(data.result.foto)
					bambang.sendMessage(from, buffer, image, {quoted: mek, caption: '^W^'})
					await limitAdd(sender)
					break
			case 'nekopoi':
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isNsfw) return reply(ind.nsfwoff())
			if (!isGroup) return reply(ind.groupo()) 
              	    if (args.length < 1) return reply('teksnya mana gan?')
                    teks = body.slice(9)
                    anu = await fetchJson(`https://api.vhtear.com/nekosearch?query=${teks}&apikey=${apivhtear}`, {method: 'get'})
			reply(ind.wait())
                    teks = `===============\n`
                    for (let neko of anu.result) {
                    teks += `Title: ${neko.title}\nDeskripsi: ${neko.detail}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break  
			case 'sewabot':
		    if (!isRegistered) return reply(ind.noregis())
		    bambang.sendMessage(from, sewabot(prefix) , text, { quoted: mek })
		    break 
			case 'wasted':
	    if (!isRegistered) return reply(ind.noregis())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await bambang.downloadAndSaveMediaMessage(ger)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  teks = `${anu.display_url}`
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
nobg = fs.readFileSync(rano)
bambang.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
  })

} else {
  reply('Gunakan foto!')
}
break
			case 'nekopoi2':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nekopoi?apikey=MRKINGLEO7890&url=${ini_url}`)
                    get_result = get_result.result
                    console.log(get_result)
                    txt = `Title : ${get_result.anime}\n`
                    txt += `Porducers : ${get_result.producers}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Size : ${get_result.size}\n`
                    txt += `Sinopsis : ${get_result.sinopsis}\n`
                    link = get_result.link
                    for (var x in link) {
                        txt += `\n${link[x].name}\n`
                        link_dl = link[x].link
                        for (var y in link_dl) {
                            txt += `${y} - ${link_dl[y]}\n`
                        }
                    }
                    buffer = await getBuffer(get_result.thumb)
                    bambang.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    break
			//case 'hentai':
				    try {
				    if (!isNsfw) return reply(ind.nsfwoff())
				if (!isRegistered) return reply(ind.noregis())
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=${TobzApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						bambang.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
			case 'randomhentong':
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isNsfw) return reply(ind.nsfwoff())
					gatauda = body.slice(15)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=${TobzKey}`)
					reply(ind.wait())
					buffer = await getBuffer(anu.result)
					bambang.sendMessage(from, buffer, image, { caption: 'Comli teross', quoted: mek})
					await limitAdd(sender)
					break			
			//case 'blowjob':
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isNsfw) return reply(ind.nsfwoff())
				ranp = getRandom('.gif')
				rano = getRandom('.webp')
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${TobzKey}`, {method: 'get'})
				if (anu.error) return reply(anu.error)
				exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
				fs.unlinkSync(ranp)
				if (err) return reply(ind.stikga())
				buffer = fs.readFileSync(rano)
				bambang.sendMessage(from, buffer, sticker, {quoted: mek})
				fs.unlinkSync(rano)
				
				})
				break
			case 'nangis':
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=${TobzKey}`, {method: 'get'})
					reply('「❗」KASIH JEDA 1 MENIT HABIS INI YA KAK')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(ind.stikga())
					buffer = fs.readFileSync(rano)
					bambang.sendMessage(from, buffer, sticker, {quoted: mek})
					fs.unlinkSync(rano)
					
					})
					break
		case 'resepmasakan':  
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
                reply(ind.wait)
                   anu = await fetchJson(`https://api.vhtear.com/resepmasakan?query=${body.slice(12)}&apikey=${apivhtear}`, {method: 'get'})
                   buff = await getBuffer(anu.result.image)
                   resep = `*${anu.result.title}*\n${anu.result.desc}\n\n*BAHAN² YG DIPERLUKAN*\n${anu.result.bahan}\n\n*CARA MASAKNYA*\n${anu.result.cara}`
                   bambang.sendMessage(from, buff, image, {quoted: mek, caption: resep})
                   await limitAdd(sender) 
                   break 
                   case 'stalkig':
                   if (!isRegistered) return reply(ind.noregis())
                   if (isLimit(sender)) return reply(ind.limitend(pusname))
                     teks = body.slice(9)
                     anu = await fetchJson(`https://api.vhtear.com/igprofile?query=${teks}&apikey=${apivhtear}`, {method: 'get'})
                     reply('「❗」Sabar Lagi Stalking IG nya kak')
                     buffer = await getBuffer(anu.result.picture)
                     hasil = `YAHAHA TELAH DI STALK BOS KU UNTUK USERNAME ${teks} \n\n *Username?* : _${anu.result.username}_ \n *Nama??* : _${anu.result.full_name}_ \n *Jumlah Follower??﹦?* : _${anu.result.follower}_ \n *Jumlah Following?* : _${anu.result.follow}_ \n *Jumlah Post?* : _${anu.result.post_count}_ \n *Biografi?? :* _${anu.result.biography}`
                    bambang.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                    await limitAdd(sender)
			       break 
                    case 'kickall':
                    if (!isOwner) return reply(ind.ownerb())
			if (!isGroupAdmins) return reply(ind.admin())
			        members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					bambang.groupRemove(from, members_id)
					break 
					case 'setreply':
					if (!isOwner) return reply(ind.ownerb())
                    			bambang.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break 
					case 'grouplist':
					if (!isRegistered) return reply(ind.noregis())
					bambang.updatePresence(from, Presence.composing) 
					teks = `\`\`\`Ini adalah list group RBOT :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
					bambang.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
					break
					case 'blocklist':
					teks = 'List Beban Kontak :\n'
					for (let block of blocked) {
						teks += `➢ @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					bambang.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
		case 'daftar':
                if (isRegistered) return  reply(ind.rediregis())
                if (!q.includes('|')) return  reply(ind.wrongf())
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return await reply('*Umur harus berupa angka!*')       
                if (namaUser.length >= 30) return reply(`*why is your name so long it's a name or a train*`)
                if (umurUser > 30) return reply(`*UMUR KAMU TERLALU TUA*`)
                if (umurUser < 10) return reply(`*UMUR KAMU TERLALU MUDA*`)
		try {
		ppimg = await bambang.getProfilePicture(`${sender.split('@')[0]}@c.us`)
		} catch {
		ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		}
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await bambang.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    reply('Terima Kasih Sudah Absen')
		    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await bambang.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
		    reply('Terima Kasih Sudah Daftar')
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
					break
            	case 'mining':
                      if (!isRegistered) return reply(ind.noregis())
                      if (isLimit(sender)) return reply(ind.limitend(pushname))
                      if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)
                      if (isOwner) {
                      const one = 999999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`Nih Untukmu Owner♥ ${one}Xp `)
                      }else{
                      const mining = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, mining)
                      await reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
                      }
                    await limitAdd(sender)
					break
				case 'bisakah':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					bambang.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'kapankah':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Tidak Akan Pernah']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					bambang.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
         			  case 'apakah':
         			  if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','Tanyakan Ayam']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					bambang.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'rate':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					bambang.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'babi':
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (!isGroup) return reply(ind.groupo())
                    const gmek = await bambang.getGroupMembersId(groupId)
                    let gmik = gmek[Math.floor(Math.random() * gmek.length)]
                    const mmkk = `YANG PALING BABI DISINI ADALAH @${gmik.replace(/@c.us/g, '')}`
                    bambang.sendTextWithMentions(dari, mmkk, id)
                    break
                    case 'nulis2':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`${name} Harus Nulis Apa Kak??`)
				buffer = body.slice(6)
				reply(ind.wait())
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/nulis?apikey=MRKINGLEO7890&text=${buffer}`)
				bambang.sendMessage(from, buffer, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
	case 'nulis':
	case 'tulis':
	bambang.updatePresence(from, Presence.composing)
	if (!isRegistered) return reply(ind.noregis())
           if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (args.length < 1) return reply(`${name} Harus Nulis Apa Kak??`)
			reply(ind.wait)
					tulis = body.slice(7)
				  nama = tulis.split("&")[0];
					kelas = tulis.split("&")[1];
					isi = tulis.split("&")[2];
					nulis = await getBuffer(`https://api.zeks.xyz/api/magernulis?nama=${nama}&kelas=${kelas}&text=${isi}&tinta=4`, {method: 'get'})
					bambang.sendMessage(from, nulis, image, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'quran':
			if (!isRegistered) return reply(ind.noregis())
           		if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
					bambang.sendMessage(from, quran, text, {quoted: mek})
					await limitAdd(sender) 
					break 
			case 'pasangan':
			if (!isRegistered) return reply(ind.noregis())
           		if (isLimit(sender)) return reply(ind.limitend(pusname))
				pa = `${body.slice(10)}`
				sa = pa.split("/")[0];
				ngan = pa.split("/")[1];
				anu = await fetchJson(`https://api.vhtear.com/primbonjodoh?nama=${sa}&pasangan=${ngan}&apikey=${apivhtear}`, {method: 'get'})
				bambang.sendMessage(from, `${anu.result.hasil}`, {quoted: mek})
				await limitAdd(sender) 
				break 
	  case 'seberapagay':
           if (!isRegistered) return reply(ind.noregis())
           if (isLimit(sender)) return reply(ind.limitend(pusname))
		teks = body.slice(1)
		   anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
		   hasil = `Nih Liat Data Gay Si ${teks}\n\n\nPersentase Gay : ${anu.persen}%\nAlert!!! : ${anu.desc}`
		   reply(hasil)
		   await limitAdd(sender)
		   break
				case 'pbucin':
				if (!isRegistered) return reply(ind.noregis())
           			if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Mana Nama?')
				rate = body.slice(8)
				const pbucin = persenbucin[Math.floor(Math.random() * persenbucin.length)]
				bambang.sendMessage(from, 'Persen Bucin Kak: *'+rate+'*\n\nJawaban : '+ pbucin +'', text, { quoted: mek })
				await limitAdd(sender) 
				break 
			case 'pantun':
			if (!isRegistered) return reply(ind.noregis())
           		if (isLimit(sender)) return reply(ind.limitend(pusname))
			anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/pantun`, {method: 'get'})
			bambang.sendMessage(from, `${anu.result}`, text, {quoted: mek})
			await limitAdd(sender) 
			break  
		case 'anime':
                if (!isRegistered) return reply(ind.noregis())
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=${TobzApi}`, {method: 'get'})
					reply(ind.wait())
					pok = await getBuffer(anu.result)
					bambang.sendMessage(from, pok, image, { quoted: mek , caption: 'nihhh'})
					await limitAdd(sender) 
					break  
                case 'kucing':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kucing`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(anu));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					bambang.sendMessage(from, pok, image, { quoted: mek , caption: '*nyang🐈*'})
					await limitAdd(sender) 
					break 
		case 'fitnah':
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))				
		if (!isGroup) return reply(ind.groupo())                 
				if (args.length < 1) return reply(`Gini kak : ${prefix}fitnah [@tag&pesan&balasanbot]\n\nContoh : ${prefix}fitnah @tagmember&hai&hai juga`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("&")[0];
					var target = gh.split("&")[1];
					var bot = gh.split("&")[2];
					bambang.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
					case 'ntahlah':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query={body.slice(11)}&apikey=${apivhtear}`, {method: 'get'})
					var inu = JSON.parse(JSON.stringify(anu.result));
					var uni =  inu[Math.floor(Math.random() * inu.length)];
					nye = await getBuffer(uni)
					bambang.sendMessage(from, nye, image, { caption: 'Inu!!', quoted: mek })
					break
	case 'hobby':
           if (!isRegistered) return reply(ind.noregis())
           if (isLimit(sender)) return reply(ind.limitend(pusname))
					hobby = body.slice(1)
					const hob =['Desah Di Game','Ngocokin Doi','Stalking sosmed nya mantan','Kau kan gak punya hobby awokawok','Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri','Nonton Wibu']
					const by = hob[Math.floor(Math.random() * hob.length)]
					bambang.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'meme':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					meme = await kagApi.memes()
					buffer = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
					bambang.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				case 'memeindo':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(ind.wait())
					memein = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${ZeksApi}`)
					buffer = await getBuffer(memein.result)
					bambang.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					await limitAdd(sender)
					break 
		case 'liputan6':
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname)) 
		reply(`[❕] Loading`)
		asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/liputan6?apikey=MRKINGLEO606`)
		teks = '=================\n'
		for (let i of asu.hasil.result) {
		    teks += `*Title:* : ${i.title}\n*Link* : ${i.link}\n*Date* : ${i.isoDate}\n*Description* : ${i.description}\n=================\n`
		}
		reply(teks)
		break
		case 'caklontong':
                if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`https://api.vhtear.com/funkuis&apikey=${apivhtear}`, {method: 'get'})
					caklontong = `*${anu.result.soal}*`
					setTimeout( () => {
					bambang.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban+ '\n\n• Penjelasan: *'+ anu.result.desk+'*', text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					bambang.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					bambang.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					bambang.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					bambang.sendMessage(from, caklontong, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
			case 'family100':
                if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`https://api.vhtear.com/family100&apikey=${apivhtear}`, {method: 'get'})
					family = `*${anu.result.soal}*`
					setTimeout( () => {
					bambang.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					bambang.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					bambang.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					bambang.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					bambang.sendMessage(from, family, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
				case 'tebakin':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.vhtear.com/tebakgambar&apikey=${apivhtear}`, {method: 'get'})
					ngebuff = await getBuffer(anu.result.soalImg)
					tebak = `➸ Jawaban : *${anu.result.jawaban}*`
					setTimeout( () => {
					bambang.sendMessage(from, tebak, text, {quoted: mek})
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					bambang.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					bambang.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					bambang.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					bambang.sendMessage(from, ngebuff, image, { caption: '_Tebak bro!!! gak bisa jawab donasi ya:v_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
         	case 'ping':
          	if (!isRegistered) return reply(ind.noregis())
           	await bambang.sendMessage(from, `Pong!!!!\nSpeed: ${processTime(time, moment())} _Second_`)
		break
               			case 'wa.me':
	case 'wame':
      case 'me':
    	    // Fix Case By Leo⛔
                 if (!isRegistered) return reply( ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    bambang.updatePresence(from, Presence.composing) 
		    options = {
		    text :`「 *LEO BOT WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
		    contextInfo: { mentionedJid: [sender] }
		    }
		    bambang.sendMessage(from, options, text, { quoted: mek } )
		    break
		    if (data.error) return reply(data.error)
		    reply(data.result)
		    await limitAdd(sender)
		    break
               			case 'animegirl':
		    // Fix Case By Yogi/Hans⛔
                 if (!isRegistered) return reply( ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    bambang.updatePresence(from, Presence.composing) 
		    data = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime-girl`, {method: 'get'})
		    reply(ind.wait())
		    n = JSON.parse(JSON.stringify(data));
		    nimek =  n[Math.floor(Math.random() * n.length)];
		    pok = await getBuffer(nimek)
		    bambang.sendMessage(from, pok, image, { quoted: mek })
		    await limitAdd(sender)
		    break
               			case 'animeboy':
		    // Fix Case By Leo⛔
                 if (!isRegistered) return reply( ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    bambang.updatePresence(from, Presence.composing) 
		    data = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime-boy`, {method: 'get'})
		    reply(ind.wait())
		    n = JSON.parse(JSON.stringify(data));
		    nimek =  n[Math.floor(Math.random() * n.length)];
		    pok = await getBuffer(nimek)
		    bambang.sendMessage(from, pok, image, { quoted: mek })
		    await limitAdd(sender)
		    break
               			case 'menherachan':
		    // Fix Case By Yogi/Hans⛔
                 if (!isRegistered) return reply( ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    bambang.updatePresence(from, Presence.composing) 
		    data = await fetchJson(`https://api.fdci.se/rep.php?gambar=menhera-chan`, {method: 'get'})
		    reply(ind.wait())
		    n = JSON.parse(JSON.stringify(data));
		    nimek =  n[Math.floor(Math.random() * n.length)];
		    pok = await getBuffer(nimek)
		    bambang.sendMessage(from, pok, image, { quoted: mek })
		    await limitAdd(sender)
		    break
               			case 'osakana':
		    // Fix Case By Yogi/Hans⛔
                 if (!isRegistered) return reply( ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    bambang.updatePresence(from, Presence.composing) 
		    data = await fetchJson(`https://api.fdci.se/rep.php?gambar=osakana`, {method: 'get'})
		    reply(ind.wait())
		    n = JSON.parse(JSON.stringify(data));
		    nimek =  n[Math.floor(Math.random() * n.length)];
		    pok = await getBuffer(nimek)
		    bambang.sendMessage(from, pok, image, { quoted: mek })
		    await limitAdd(sender)
		    break
               			case 'help':
                                case 'menu':
                             case 'openmenu':
if (sender == undefined) sender = botNumber
if (prefix == '') prefix = '#'
l = 1
try {
					ppimg = await bambang.getProfilePicture(sender)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
	var itsme = `${numbernye}@s.whatsapp.net`
	spek = await bambang.user.phone
	mymom = []
	for (let o of _level) {
		mymom.push(o.jid, sender)
	}
const ini_xp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
        const ini_uangku = checkATMuser(sender)
                   var bulanpuasa = new Date('2021','03','12').valueOf()
                  tungmun = moment(bulanpuasa - Date.now()).format('DD [Hari], HH [Jam], mm [Menit], ss [Detik]')
                   var punya_wa = "0@s.whatsapp.net"
                    var ini_text = "MR.KINGLEOBOT"
                    var buffer = await getBuffer("https://i.ibb.co/fYLmd2t/20210326-173357.jpg")
benny.sendMessage(from, {text: ind.menu(pushname, prefix, getLevelingLevel, getLevelingXp, sender, ini_xp, _registered, ini_uangku), matchedText: `https://api-self.herokuapp.com`, canonicalUrl: `https://api-self.herokuapp.com`, description: `${menunye}`, title: `Rest APIs`, jpegThumbnail: buffer}, 'extendedTextMessage', {contextInfo: {mentionedJid: [sender, botNumber], isForwarded: true, forwardingScore: 999}, detectLinks: true, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream", "title": `${fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
                    break
                               case 'donasi':
				case 'donate':
				if (!isRegistered) return reply(ind.noregis())
					bambang.sendMessage(from, donasi(), text)
					break
                case 'level':
		case 'lvl':
                if (!isRegistered) return reply(ind.noregis())
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `┏━━❉ *LEVEL* ❉━━\n┣⊱ *Nama* : ${pushname}\n┣⊱ Nomor : wa.me/${sender.split("@")[0]}\n┣⊱ User XP :  ${userXp}/${requiredXp}\n┣⊱ User Level : ${userLevel}\n┗━━━━━━━━━━━━`
               bambang.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
					break
				case 'leaderboard':
				case 'lb':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
                let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom++
                        leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                        leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n┣⊱ *Uang*: _Rp${uang[i].uang}_\n┗⊱ *Limit*: ${limitawal - _limit[i].limit}\n`
                    }
                    await reply(leaderboardlvl)
                    await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`minimal 10 user untuk bisa mengakses database`)
                }
					break
					case 'info':
					case 'ingfo':
					case 'ingfokan':
					me = bambang.user
					uptime = process.uptime()
					teks = `*Nama bot* : ${me.name}\n*OWNER* : *Mr.Three Four One*\n*AUTHOR* : bambang Tri Raharjo\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block* : ${blocked.length}\n*Bot aktif selama* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					bambang.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'blocklist': 
					teks = '𝗕𝗟𝗢𝗖𝗞 𝗟𝗜𝗦𝗧 :\n'
					for (let block of blocked) {
						teks += `┣➢ @${block.split('@')[0]}\n`
					}
					teks += `𝗧𝗼𝘁𝗮𝗹 : ${blocked.length}`
					bambang.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
                case 'hidetag':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(9)
					var group = await bambang.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					bambang.sendMessage(from, options, text)
					await limitAdd(sender)
					break
                case 'quotemaker':
		case 'makequote':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                var gh = body.slice(12)
					var quote = gh.split("|")[0];
					var wm = gh.split("|")[1];
					const pref = `Usage: \n${prefix}quotemaker teks|watermark\n\nEx :\n${prefix}quotemaker ini contoh|bicit`
					if (args.length < 1) return reply(pref)
					reply(ind.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					bambang.sendMessage(from, buffer, image, {caption: 'Nih anjim', quoted: mek})
					await limitAdd(sender)
					break
                    case 'truth':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					bambang.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					await limitAdd(sender)
					break
				case 'dare':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					bambang.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					await limitAdd(sender)
					break	
		case 'ssweb':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                
					if (args.length < 1) return reply('Urlnya mana om')
					teks = body.slice(7)
					reply(ind.wait())
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
					buff = await getBuffer(anu.gambar)
					bambang.sendMessage(from, buff, image, {quoted: mek})
					await limitAdd(sender)
					break
                case 'pokemon':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					bambang.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
                case 'anjing':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					bambang.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		//MUSIC & MEDIA
		case 'chord':
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pushname))
                anu = await fetchJson(`https://tobz-api.herokuapp.com/api/chord?q=${body.slice(7)}&apikey=${TobzKey}`)
                bambang.sendMessage(from, anu.result, text, {quoted:mek})
                break
		case 'tomp3':
                if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pushname))
                	bambang.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('_*Reply Video nya Gan!*_')
					reply(ind.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await bambang.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
						bufferlkj = fs.readFileSync(ran)
						bambang.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender) 
					break 
		case 'fb':
		bambang.updatePresence(from, Presence.composing)    
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pushname))
		reply(ind.wait)
					if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('www.facebook.com')) return reply(ind.error.Iv)
					reply(ind.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/epbe?url=${args[0]}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					bambang.sendMessage(from, '[ WAIT ] Sedang Diproses\n\nLinknya Only Google Gan Biar Bisa Didownload', text, {quoted: mek})
					efbe = `Title: *${anu.title}*\nSize: *${anu.filesize}\nDipublikasikan Pada: *${anu.published}*`
					tefbe = await getBuffer(anu.thumb)
					bambang.sendMessage(from, tefbe, image, {quoted: mek, caption: efbe})
					buffer = await getBuffer(anu.result)
					bambang.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: 'Nih Gan'})
					await limitAdd(sender) 
					break 
                case 'ytmp3':
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio?apikey=MRKINGLEO7890&url=${ini_link}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Uploader : ${get_result.uploader}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `View : ${get_result.view}\n`
                    txt += `Like : ${get_result.like}\n`
                    txt += `Dislike : ${get_result.dislike}\n`
                    txt += `Description :\n ${get_result.description}`
                    buffer = await getBuffer(get_result.thumbnail)
                    bambang.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    get_audio = await getBuffer(get_result.link[0].link)
                    bambang.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`,quoted: mek })
                    break
                case 'ytmp4':
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=MRKINGLEO7890&url=${ini_link}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Uploader : ${get_result.uploader}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `View : ${get_result.view}\n`
                    txt += `Like : ${get_result.like}\n`
                    txt += `Dislike : ${get_result.dislike}\n`
                    txt += `Description :\n ${get_result.description}`
                    buffer = await getBuffer(get_result.thumbnail)
                    bambang.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    get_audio = await getBuffer(get_result.link[0].link)
                    bambang.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek })
                    break
             case 'jooxplay':
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jooxplay?apikey=MRKINGLEO7890&query=${query}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.info.song}\n`
                    txt += `Artists : ${get_result.info.singer}\n`
                    txt += `Duration : ${get_result.info.duration}\n`
                    txt += `Album : ${get_result.info.album}\n`
                    txt += `Uploaded : ${get_result.info.date}\n`
                    txt += `Lirik :\n ${get_result.lirik}\n`
                    thumbnail = await getBuffer(get_result.image)
                    bambang.sendMessage(from, thumbnail, image, { quoted: mek, caption: txt })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    bambang.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: mek })
                    break
             case 'spotify':
                    url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotify?apikey=MRKINGLEO7890&url=${url}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Artists : ${get_result.artists}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Popularity : ${get_result.popularity}\n`
                    txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    bambang.sendMessage(from, thumbnail, image, { quoted: mek, caption: txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    bambang.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
             case 'pikachu':
                 if (!isRegistered) return reply( ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    anu = await fetchJson(`https://some-random-api.ml/img/pikachu`, {method: 'get'})
		    reply(ind.wait())
		    var n = JSON.parse(JSON.stringify(anu));
		    var nimek =  n[Math.floor(Math.random() * n.length)];
		    pok = await getBuffer(nimek)
		    bambang.sendMessage(from, pok, image, { quoted: mek })
		    await limitAdd(sender)
		    break
             case 'glit':
                if (isLimit(sender)) return reply(limits.limitend(pushname))
                      if (args.length < 1) return reply('Teks nya mana?')
                      var jgh = body.slice(8)
                      gol = jgh.split("&")[0];
                      gol2 = jgh.split("&")[1];
                      reply(ind.wait())
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=glitch&text1=${gol}&text2=${gol2}&apikey=BotWeA`, {method: 'get'})
                      buffer = await getBuffer(anu.result)
                      bambang.sendMessage(from, buffer, image, {quoted: mek})
                      break
             case 'hrm':
                 if (!isRegistered) return reply( ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (args.length < 1) return reply('Teks nya mana kak?')
		ct = body.slice(5)
		reply(ind.wait())
		ct = await getBuffer(`https://onlydevcity.xyz/AnakHaramSerti/img.php?nama=${ct}`)
		bambang.sendMessage(from, ct, image, {quoted: mek})
		await limitAdd(sender)
		break
             case 'epep':
                 if (!isRegistered) return reply( ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (args.length < 1) return reply('Teks nya mana kak?')
		ct = body.slice(5)
		reply(ind.wait())
		ct = await getBuffer(`https://onlydevcity.xyz/CilEpepSerti/img.php?nama=${ct}`)
		bambang.sendMessage(from, ct, image, {quoted: mek})
		await limitAdd(sender)
		break
             case 'spotifysearch':
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotifysearch?apikey=MRKINGLEO7890&query=${query}`)
                    get_result = get_result.result
                    txt = ""
                    for (var x in get_result) {
                        txt += `Title : ${get_result[x].title}\n`
                        txt += `Artists : ${get_result[x].artists}\n`
                        txt += `Duration : ${get_result[x].duration}\n`
                        txt += `Link : ${get_result[x].link}\n`
                        txt += `Preview : ${get_result[x].preview_url}\n\n\n`
                    }
                    reply(txt)
                    break
             case 'ballonmaker':
		    if (!isRegistered) return reply(ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
                	     if (args.length < 1) return reply('teksnya mana gan?')
                		hm = `${body.slice(13)}`
                		teks1 = hm.split("&")[0];
                		teks2 = hm.split("&")[1];                    
                		glitch = await getBuffer(`https://api.vhtear.com/balloonmaker?text1=${teks1}&text2=${teks2}&apikey=MRKINGLEO7788`, {method: 'get'})
                		bambang.sendMessage(from, glitch, image, {quoted: mek, caption: 'nih gan'})
	        	await limitAdd(sender) 
	        	break 
             case 'genmeme':
		    if (!isRegistered) return reply(ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
                	     if (args.length < 1) return reply('teksnya mana gan?')
                		hm = `${body.slice(8)}`
                		teks1 = hm.split("&")[0];
                		teks2 = hm.split("&")[1];                    
                		glitch = await getBuffer(`https://api.vhtear.com/genmeme?text1=${teks1}&text2=${teks2}&url=https://i.pinimg.com/originals/d5/66/f4/d566f4dbe3be3f1ac2fca7253430c014.jpg&apikey=MRKINGLEO7788`, {method: 'get'})
                		bambang.sendMessage(from, glitch, image, {quoted: mek, caption: 'nih gan'})
	        	await limitAdd(sender) 
	        	break 
             //case 'joox':
	if (!isRegistered) return reply(ind.noregis())
	if (isLimit(sender)) return reply(ind.limitend(pusname)) 
                reply(ind.wait())
                anu = await fetchJson(`https://api.vhtear.com/music?query=${body.slice(6)}&apikey=MRKINGLEO7788`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*уАМтЭЧуАНLagu Ditemukan*\nтЮ╕ Judul : ${anu.result.title}\nтЮ╕ Durasi : ${anu.result.duration}\nтЮ╕ Size : ${anu.result.size}\n\n*[WAIT] Proses Dumlu Yakan*`
                buffer = await getBuffer(anu.result.image)
                lagu = await getBuffer(anu.result.mp3)
                bambang.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                bambang.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: mek})
                break
          case 'goodgirl':		
		if (args.length < 1) return reply(`textnya mana om?`)	
		ct = body.slice(9)
		reply(`[â•] Loading`)
		buffer = await getBuffer(`http://rzky.net/docs/api/GoodGirlSerti/img.php?nama=${ct}`)
		bambang.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
		break
          case 'goodboy': 				
		if (args.length < 1) return reply(`textnya mana om?`)	
		ct = body.slice(8)
		reply(`[â•] Loading`)
		buffer = await getBuffer(`http://rzky.net/docs/api/GoodBoySerti/img.php?nama=${ct}`)
		bambang.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
		break
          case 'editorberkelas': 			
		if (args.length < 1) return reply(`textnya mana om?`)	
		ct = body.slice(15)
		reply(`[â•] Loading`)
		buffer = await getBuffer(`http://rzky.net/docs/api/EditorBerkelasSerti/img.php?nama=${ct}`)
		bambang.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
		break
          case 'goodlooking': 	
		if (args.length < 1) return reply(`textnya mana om?`)	
		ct = body.slice(12)
		reply(`[â•] Loading`)
		buffer = await getBuffer(`http://rzky.net/docs/api/GoodLookingSerti/img.php?nama=${ct}`)
		bambang.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
		break   
          case 'heart':		
		if (args.length < 1) return reply(`textnya mana om?`)
		ct = body.slice(6)
		reply(`[â•] Loading`)
		anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro?text=${ct}&theme=heart&apikey=MRKINGLEO606`)
		buffer = await getBuffer(anu.result.url)
		bambang.sendMessage(from, buffer, image, {quoted: mek, caption:'Nih hasilnya kak...'})
		break
          case 'splaybutton':
                if (!isRegistered) return reply( ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} yogi`)
                    txt = args.join(" ")
                    reply('[❕] Loading kak')
                    buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?text=${txt}&apikey=apivinz`)
                    bambang.sendMessage(from, buffer, image, {caption: 'Nih kak.*', quoted: mek})
         break
          case 'bass':                 
		
		    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await bambang.downloadAndSaveMediaMessage(encmedia)
		    ran = getRandom('.mp3')
		    exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
			fs.unlinkSync(media)
			if (err) return reply('Error!')
			hah = fs.readFileSync(ran)
			bambang.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
			fs.unlinkSync(ran)
		    })
		break
          case 'tolol': 
                 if (!isRegistered) return reply( ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (args.length < 1) return reply('Teks nya mana ?')
		gatauda = body.slice(6)
		reply(ind.wait())
		buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/toloserti?apikey=MRKINGLEO7890&name=${gatauda}`, {method: 'get'})
		bambang.sendMessage(from, buffer, image, {quoted: mek})
		await limitAdd(sender)
		break
          case 'aesthetic':
		gatauda = body.slice(9)
		// Fix Case By Yogi/Hans⛔
                 if (!isRegistered) return reply( ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		reply(ind.wait())
		anu = await fetchJson(`https://api.zeks.xyz/api/estetikpic?apikey=apivinz`, {method: 'get'})
		buffer = await getBuffer(anu.result.result)
		bambang.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih aestheticnya kak...'})
		await limitAdd(sender)
		break
          case 'infocuaca':
		    tels = body.slice(11)
		    // Fix Case By Yogi/Hans⛔
                 if (!isRegistered) return reply( ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cuaca?wilayah=${tels}&apikey=BotWeA`, {method: 'get'})
		    if (anu.error) return reply(anu.error)
		    hasil = `*Tempat* : ${anu.result.tempat}\n*Cuaca* : ${anu.result.cuaca}\n*Angin* : ${anu.result.angin}\n*Suhu* : ${anu.result.suhu}\n*Kelembapan* : ${anu.result.kelembapan}`
		    bambang.sendMessage(from, hasil, text, {quoted: mek})
		    await limitAdd(sender)
		    break
          case 'imageislamic':
	            // Fix Case By Yogi/Hans⛔
                 if (!isRegistered) return reply( ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    anu = await fetchJson(`https://api.shizukaa.xyz/api/wpislamic?apikey=itsmeiky633`, {method: 'get'})
		    buffer = await getBuffer(anu.result)
		    bambang.sendMessage(from, buffer, image, {quoted: mek })
		    await limitAdd(sender) 
		    break
          case 'katabijak':
	            // Fix Case By Yogi/Hans⛔
                 if (!isRegistered) return reply( ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    anu = await fetchJson(`https://api.shizukaa.xyz/api/bijak?apikey=itsmeiky633`, {method: 'get'})
		    katabijak = `Kata Bijak: *${anu.result}*`
		    bambang.sendMessage(from, katabijak, text, {quoted: mek })
		    await limitAdd(sender) 
		    break
          case 'katailham':
	            // Fix Case By Yogi/Hans⛔
                 if (!isRegistered) return reply( ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		anu = await fetchJson(`https://api.shizukaa.xyz/api/bacotanilham?apikey=itsmeiky633`, {method: 'get'})
		kata = anu.result
		bambang.sendMessage(from, kata, text, {quoted: mek })
		await limitAdd(sender)
		break
          case 'katacinta':
		    // Fix Case By Yogi/Hans⛔
                 if (!isRegistered) return reply( ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    gatauda = body.slice(8)
		    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`, {method: 'get'})
		    reply(anu.result)
		    await limitAdd(sender)
		    break
          case 'katabucin': 
		    // Fix Case By Yogi/Hans⛔
                 if (!isRegistered) return reply( ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    anu = await fetchJson(`https://api.shizukaa.xyz/api/bucin?apikey=itsmeiky633`, {method: 'get'})
		    reply(anu.result)
		    await limitAdd(sender)
		    break
          case 'katabucin2': 
		    // Fix Case By Yogi/Hans⛔
                 if (!isRegistered) return reply( ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    anu = await fetchJson(`https://api.shizukaa.xyz/api/bucin?apikey=itsmeiky633`, {method: 'get'})
		    reply(anu.result)
		    await limitAdd(sender)
		    break
          case 'quotedoraemon': 
		    // Fix Case By Yogi/Hans⛔
                 if (!isRegistered) return reply( ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    anu = await fetchJson(`https://api.shizukaa.xyz/api/quotedoraemon?apikey=itsmeiky633`, {method: 'get'})
		    reply(anu.result.quote)
		    await limitAdd(sender)
		    break
          case 'ceritahorror': 
		    if (!isRegistered) return reply( ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
                   reply(`_[❕] Loading_`)
		   anu = await fetchJson(`https://naufalhoster.xyz/tools/story_horror?apikey=IgygEb-7vT4iB-h2zOyi`, {method:'get'})
		   teks = `*Hasil Cerita*\n*Nama Cerita*: ${anu.result.title}\n*Cerita*: ${anu.result.story}`
		   bambang.sendMessage(from, teks, text, {quoted: mek})
		   await limitAdd(sender)
		   break
          case 'infogempa':
		    // Fix Case By Yogi/Hans⛔
                 if (!isRegistered) return reply( ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/infogempa?apikey=BotWeA`, {method: 'get'})
		    if (anu.error) return reply(anu.error)
		    buffer= await getBuffer(anu.map)
		    hasil = `*Potensi*\n${anu.potensi}\n*Lokasi*\n${anu.lokasi}\n*Magnitude*\n${anu.magnitude}\n*Koordinat*\n${anu.koordinat}\n*Kedalaman*\n${anu.kedalaman}\n*Waktu*\n${anu.waktu}\n*Map*\n${anu.map}`
		    bambang.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
		    await limitAdd(sender)
		    break
          case 'bakar':
    if (!isRegistered) return reply( ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
    var imgbb = require('imgbb-uploader')
    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
      ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
      reply(ind.wait())
      owgi = await bambang.downloadAndSaveMediaMessage(ted)
      tels = body.slice(7)
      anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
      hehe = await getBuffer(`https://videfikri.com/api/textmaker/burneffect/?urlgbr=${anu.display_url}`)
     bambang.sendMessage(from, hehe, image, {quoted:mek})
    } else {
      reply('Jangan tambah kan apapun pada command')
    }
    break
                 case 'nulis3':
		case 'tulis3':
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (args.length < 1) return reply('Teksnya mana kak? Contoh : ${prefix}nulis2 LEO baik hati')
		laysha = body.slice(8)
		reply('「❗」WAIT BRO GUE NULIS DUMLU YAKAN')
		buffer = await getBuffer(`https://api.xteam.xyz/magernulis5?text=${laysha}&APIKEY=MRKINGLEO7890`)
		bambang.sendMessage(from, buffer, image, {quoted: mek, caption: 'Lebih baik nulis sendiri ya kak :*'})
		await limitAdd(sender)
		break
                 //case 'nhentai':
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentai/${henid}?apikey=MRKINGLEO7890`)
                    get_result = get_result.result
                    txt = `Title Romaji : ${get_result.title_romaji}\n`
                    txt += `Title Native : ${get_result.title_native}\n`
                    txt += `Read Online : ${get_result.read}\n`
                    get_info = get_result.info
                    txt += `Parodies : ${get_info.parodies}\n`
                    txt += `Character : ${get_info.characters.join(", ")}\n`
                    txt += `Tags : ${get_info.tags.join(", ")}\n`
                    txt += `Artist : ${get_info.artists}\n`
                    txt += `Group : ${get_info.groups}\n`
                    txt += `Languager : ${get_info.languages.join(", ")}\n`
                    txt += `Categories : ${get_info.categories}\n`
                    txt += `Pages : ${get_info.pages}\n`
                    txt += `Uploaded : ${get_info.uploaded}\n`
                    reply(txt)
                    break
case 'attp':
	    if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}attp Wajahku Ganteng*`)
		attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
		bambang.sendMessage(from, attp2, sticker, {quoted: mek})
		break
case 'nhentaipdf':
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=MRKINGLEO7890`)
                    get_result = get_result.result
                    buffer = await getBuffer(get_result)
                    bambang.sendMessage(from, buffer, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    break
case 'jadwaltv':
                    channel = args[0]
                    tvnow = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=MRKINGLEO7890`)
                    tvnow = tvnow.result
                    txt = `Jadwal TV ${channel.toUpperCase()}\n`
                    for (var x in tvnow) {
                        txt += `${x} - ${tvnow[x]}\n`
                    }
                    reply(txt)
                    break
//case 'alquranaudio':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=MRKINGLEO7890`)
                    bambang.sendMessage(from, buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
                    break
case 'alquranaudio':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=MRKINGLEO7890`)
                    bambang.sendMessage(from, buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
                    break
case 'lirik':    
               			if (!isRegistered) return reply(ind.noregis())
              			if (isLimit(sender)) return reply(ind.limitend(pusname))
                		reply(ind.wait)
					teks = body.slice(7)
					anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${teks}`, {method: 'get'})
					reply('Lirik dari lagu '+teks+' adalah :\n\n'+anu.result.lirik)
					await limitAdd(sender) 
					break 
				case 'nightbeach':
if (!isRegistered) return reply(ind.noregis())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await bambang.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehpe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
 bambang.sendMessage(from, hehpe, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break
				case 'laptop':
if (!isRegistered) return reply(ind.noregis())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await bambang.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  dhehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
 bambang.sendMessage(from, dhehe, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break
				case 'wallnime2':
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/wallpaper?apikey=MRKINGLEO7890`)
                    bambang.sendMessage(from, buffer, image, { quoted: mek })
                    break
				case 'linephoto':
if (!isRegistered) return reply(ind.noregis())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await bambang.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehet = await getBuffer(`https://videfikri.com/api/textmaker/3dlinephoto/?urlgbr=${anu.display_url}`)
 bambang.sendMessage(from, hehet, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break
				case 'sketch':
if (!isRegistered) return reply(ind.noregis())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await bambang.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehae = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
 bambang.sendMessage(from, hehae, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break
				case 'yutubdl':
					if (args.length < 1) return reply('Urlnya mana um?')
					if (!isRegistered) return reply(ind.noregis())
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('URL NYA TIDAK VALID KAK')				
					anu = await fetchJson(`https://api.vhtear.com/ytdl?link=${args[0]}&apikey=${apivhtear}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*➸ JUDUL* : ${anu.result.title}\n\n*[WAIT] Proses Dumlu Yakan*`
					thumb = await getBuffer(anu.result.imgUrl)
					baby.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result.UrlVideo)
					baby.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
					break

		case 'joox':
		case 'play':
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname)) 
                reply(ind.wait())
                anu = await fetchJson(`https://api.vhtear.com/ytmp3?query=${body.slice(6)}&apikey=${apivhtear}`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*「❗」Lagu Ditemukan*\n➸ Judul : ${anu.result.title}\n➸ Durasi : ${anu.result.duration}\n➸ Size : ${anu.result.size}\n\n*[WAIT] Proses Dumlu Yakan*`
                buffer = await getBuffer(anu.result.image)
                lagu = await getBuffer(anu.result.mp3)
                bambang.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                bambang.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: mek})
                break		
                case 'text3d':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
              	    if (args.length < 1) return reply('teksnya mana Tod?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return bambang.sendMessage(from, 'Teksnya kepanjangan Bambank', text, {quoted: mek})
                    buff = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
                    bambang.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
			     	await limitAdd(sender)
					break
			    case 'fototiktok':
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
                    gatauda = body.slice(12)
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktokpp?user=${gatauda}` , {method: 'get'})
			        buff = await getBuffer(anu.result)
                    reply(buff)
			        await limitAdd(sender)
					break
			    case 'map':
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
                buffer = await getBuffer(anu.gambar)
                bambang.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
				await limitAdd(sender)
					break
                case 'kbbi':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+anu.result)
					await limitAdd(sender)
					break
                case 'artinama':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(10)}`, {method: 'get'})
					reply('Menurut nama:\n\n'+anu.result)
					await limitAdd(sender)
					break
			//tools
			case 'qrcode':
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			const tex = encodeURIComponent(body.slice(8))
			if (!tex) return bambang.sendMessage(from, 'MASUKAN URL/TEKS UNTUK DI JADIKAN QR', text, {quoted: mek})
			const buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
			bambang.sendMessage(from, buff, image, {quoted: mek})
			await limitAdd(sender)
			break
				case 'moddroid':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=${TobzKey}`)
			hepi = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*publisher*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*latest version*: ${hepi.latest_version}\n*genre*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			bambang.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
				case 'happymod':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=${TobzKey}`)
			hupo = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*version*: ${hupo.version}\n*size:* ${hupo.size}\n*root*: ${hupo.root}\n*purchase*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			bambang.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
				case 'ocr': 
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await bambang.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('kirim foto dengan caption ${prefix}𝗼𝗰𝗿')
					}
					await limitAdd(sender)
					break
				case 'stiker': 
				case 'sticker':
				case 's':
				    if (!isRegistered) return reply(ind.noregis())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    await limitAdd(sender)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await bambang.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								bambang.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await bambang.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								bambang.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
					}
					break
				case 'tts':
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (args.length < 1) return bambang.sendMessage(from, 'Kode bahasanya mana kak? contoh : ${prefix}Nakano Miku', text, {quoted: mek})
		const gtts = require('./lib/gtts')(args[0])
		if (args.length < 2) return bambang.sendMessage(from, `Teksnya mana kak | contoh : ${prefix}tts id ah yamate kudasai`, text, {quoted: mek})
		dtt = body.slice(8)
		ranm = getRandom('.mp3')
		rano = getRandom('.ogg')
		dtt.length > 300
		? reply('Teks nya terlalu panjang kak')
		: gtts.save(ranm, dtt, function() {
			exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
			fs.unlinkSync(ranm)
			buffer = fs.readFileSync(rano)
			if (err) return reply(ind.stikga())
			bambang.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
			fs.unlinkSync(rano)
			})
		    })
		    await limitAdd(sender)
		    break
				case 'artinama':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
	        if (!isRegistered) return reply(ind.noregis())
		    if (args.length < 1) return reply('Apa yang mau dicari um?')
		    anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(10)}`, {method: 'get'})
		    reply('Menurut nama:\n\n'+anu.result)
		    await limitAdd(sender)
		    break
				
				//case 'tts':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return bambang.sendMessage(from, 'Diperlukan kode bahasa!!', text, {quoted: mek})
					const tts = require('./lib/gtts')(args[0])
					if (args.length < 2) return bambang.sendMessage(from, 'Mana teks yang ma di jadiin suara? suara saya kah:v?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply('lah teks nya kepanjangan bambang😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							bambang.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
					break
				case 'imagetext':
		case 'itext':
		case 'itxt':
		    if (!isRegistered) return reply(ind.noregis())
                  if (args.length < 1) return reply(`Masukan Teks\nContoh : ${prefix}MR KING TEAM`)
                imageToBase64(`https://api.vhtear.com/textxgif?text=${args[0]}&apikey=MRKINGLEO7788`).then((response) => {var buf = Buffer.from(response, 'base64');
                bambang.sendMessage(from, buf, image, {quoted: mek, caption: "DONE BOS✓"})})
                break
				case 'smile':				
                 if (!isRegistered) return reply(ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/smile?apikey=MRKINGLEO7890`, {method: 'get'})
		    bambang.sendMessage(from, buffer, image, {quoted: mek })
		    await limitAdd(sender) 
		    break
				case 'happy':				
                 if (!isRegistered) return reply(ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/happy?apikey=MRKINGLEO7890`, {method: 'get'})
		    bambang.sendMessage(from, buffer, image, {quoted: mek })
		    await limitAdd(sender) 
		    break
				case 'slapnime':				
                 if (!isRegistered) return reply(ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/slap?apikey=MRKINGLEO7890`, {method: 'get'})
		    bambang.sendMessage(from, buffer, image, {quoted: mek })
		    await limitAdd(sender) 
		    break
				case 'say':
				if (!isRegistered) return reply(ind.noregis())
			 	if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://anuz.herokuapp.com/api/bapakfont?kata=${body.slice(6)}`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender) 
					break 
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					prefix = args[0]
					reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
					break 
				case 'tiktokstalk':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				try {
						if (args.length < 1) return bambang.sendMessage(from, '𝘂𝘀𝗲𝗿𝗻𝗮𝗺𝗲 𝗺𝗮𝗻𝗮 ?', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(ind.wait())
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						bambang.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('[𝗘𝗥𝗥𝗢𝗥] 𝗸𝗲𝗺𝘂𝗻𝗴𝗸𝗶𝗻𝗮𝗻 𝘂𝘀𝗲𝗿𝗻𝗮𝗺𝗲 𝘁𝗶𝗱𝗮𝗸 𝘃𝗮𝗹𝗶𝗱')
					}
					await limitAdd(sender)
					break
                 case 'linkgc':
				    if (!isGroup) return reply(ind.groupo())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await bambang.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    bambang.sendMessage(from, yeh, text, {quoted: mek})
			        await limitAdd(sender)
					break
				case 'tagall':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `┣➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
				case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await bambang.chats.all()
					bambang.setMaxListeners(25)
					for (let _ of anu) {
						bambang.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
			       case 'block':
				 bambang.updatePresence(from, Presence.composing) 
				 bambang.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					bambang.blockUser (`${body.slice(7)}@c.us`, "add")
					bambang.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
                    case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    bambang.blockUser (`${body.slice(9)}@c.us`, "remove")
					bambang.sendMessage(from, `Perintah diterima, Membuka ${body.slice(9)}@c.us`, text)
					break
				case 'leave': 
				if (!isGroup) return reply(ind.groupo())
				if (!isOwner) return reply(ind.ownerb())
				await reply(from, 'bye').then(() => bambang.groupLeave(from))
					break 
			case 'delete':
			case 'del':
			case 'd':
			if (!isGroup) return reply(ind.groupo())
                       if (!isGroupAdmins) return reply(ind.admin())
                        if (!isBotGroupAdmins) return reply(ind.badmin())
					bambang.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
					case 'leave': 
				if (!isGroup) return reply(ind.groupo())
				if (!isOwner) return reply(ind.ownerb())
				await reply(from, 'bye').then(() => bambang.groupLeave(from))
					break 
				case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await bambang.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await bambang.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							bambang.sendMessage(_.jid, buff, image, {caption: `❮ 𝙋𝙀𝙎𝘼?? 𝘽??𝙊𝘼𝘿𝘾𝘼𝙎𝙏 ❯\n\n${body.slice(4)}`})
						}
						reply('*_succes broadcast_* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST BOT 」*\n\n${body.slice(4)}`)
						}
						reply('*_succes broadcast_* ')
					}
					break
			   	case 'setpp': 
                        if (!isGroup) return reply(ind.groupo())
                       if (!isGroupAdmins) return reply(ind.admin())
                        if (!isBotGroupAdmins) return reply(ind.badmin())
                       media = await bambang.downloadAndSaveMediaMessage(mek)
                         await bambang.updateProfilePicture (from, media)
                        reply('[SUKSES] Mengganti icon grub')
					break						
				case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						bambang.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
					case 'grup':
					case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						bambang.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP`)
						bambang.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break      
            case 'admin':
            case 'owner':
            case 'creator':
                  bambang.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                  bambang.sendMessage(from, 'Tuh kontak Mr.A43G <•_•> ,Jangan Diubah Ya Kontaknya (*>*)',MessageType.text, { quoted: mek} )
		const RIUGANTENG = fs.readFileSync('./sticker/LEO');
                bambang.sendMessage(from, RIUGANTENG, MessageType.image, {quoted: mek, caption: '*INI OWNER GW LEO*'})
                 break
		break    
           	case 'setname':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                bambang.groupUpdateSubject(from, `${body.slice(9)}`)
                bambang.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: mek})
					break
                case 'setdesc':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                bambang.groupUpdateDescription(from, `${body.slice(9)}`)
                bambang.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: mek})
					break
           				case 'demote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Status adminmu dicopot. Makanya jan jadi sider🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						bambang.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`YA YAHYA WAHYU @${mentioned[0].split('@')[0]} Jabatan adminmu di copt, Makanya jan jadi sider🏃`, mentioned, true)
						bambang.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Selamat🥳 anda naik menjadi admin grub (+_+) :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						bambang.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`selamat🥳 @${mentioned[0].split('@')[0]} anda naik menjadi admin grub (+_+)`, mentioned, true)
						bambang.groupMakeAdmin(from, mentioned)
					}
					break	
				case 'kick':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `asek dapat makanan,otw mengkickmu, 🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						bambang.groupRemove(from, mentioned)
					} else {
						mentions(`asek dapat makanan,otw mengkickmu, @${mentioned[0].split('@')[0]} 🏃`, mentioned, true)
						bambang.groupRemove(from, mentioned)
					}
					break
				case 'listadmin':
					if (!isGroup) return reply(ind.groupo())
					teks = `List admin of group *${groupMetadata.subject}*\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
		//no group feature
		case 'mutual':
                if (!isRegistered) return reply( ind.noregis())
                if (isGroup) return reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
           	break
		case 'next':
                if (!isRegistered) return reply( ind.noregis())
                if (isGroup) return reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
        	break
				case 'toimg':
				if (!isRegistered) return reply(ind.noregis())
				if (!isQuotedSticker) return reply('Reply/tag sticker !')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await bambang.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						bambang.sendMessage(from, buffer, image, {quoted: mek, caption: 'tuh dh jadi '})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
                			 case 'simi':
					if (args.length < 1) return reply('Textnya mana um?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau yank')
					reply(anu)
					break
				case 'simih':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('SUDAH AKTIF !!!')
						samih.push(from)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('❬ SUKSES ❭ MENGAKTIFKAN FITUR SIMI DI GRUB INI')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('❬ SUKSES ❭ MENONAKTIFKAN FITUR SIMI DI GRUB INI')
					} else {
						reply(ind.satukos())
					}
					break
				case 'nsfw':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply(' *sudah aktif*  !!')
						nsfw.push(from)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ SUKSES ❭ Mengaktifkan NSFW di grub ini')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ SUKSES ❭ Menonaktifkan NSFW di grub ini')
					} else {
						reply(ind.satukos())
					}
					break
                case 'leveling':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('Boo :𝘃')
                if (args[0] === 'enable') {
                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                    _leveling.push(from)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvlon())
                } else if (args[0] === 'disable') {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvloff())
                } else {
                    reply(ind.satukos())
                }
					break
				case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*SUDAH AKTIF* !!!')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUKSES ❭ Mengaktifkan fitur Welcome/Left di grub ini')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUKSES ❭ Menonaktifkan Welcome/Left di grub ini')
					} else {
						reply(ind.satukos())
					}
					break
                			case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*SUDAH AKTIF* !!!')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ SUKSES ❭ MENGAKTIFKAN EVENT DI GRUB INI*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ SUKSES ❭ MENONAKTIFKAN EVENT DI GRUB INI*')
					} else {
						reply(ind.satukos())
					}
					break
					
				case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await bambang.getProfilePicture(id)
						buffer = await getBuffer(pp)
						bambang.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					await limitAdd(sender)
					break
					
				case 'wait':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const filePath = await bambang.downloadAndSaveMediaMessage(encmedia);
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/wait?apikey=MRKINGLEO7890`, {...options })
                        get_result = get_result.result
                        console.log(get_result)
                        ini_video = await getBuffer(get_result.video)
                        txt = `Anilist id : ${get_result.anilist_id}\n`
                        txt += `MAL id : ${get_result.mal_id}\n`
                        txt += `Title Romaji : ${get_result.title_romaji}\n`
                        txt += `Title Native : ${get_result.title_native}\n`
                        txt += `Title English : ${get_result.title_english}\n`
                        txt += `at : ${get_result.at}\n`
                        txt += `Episode : ${get_result.episode}\n`
                        txt += `Eimilarity : ${get_result.similarity}`
                        bambang.sendMessage(from, ini_video, video, { quoted: mek, caption: txt })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
				case 'iri':
const irimp3 = fs.readFileSync('./assets/iri.mp3');
bambang.sendMessage(from, irimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'pale':
const pa = fs.readFileSync('./assets/pale.mp3')
bambang.sendMessage(from, pa, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'dj1':
const dj1mp3 = fs.readFileSync('./assets/dj1.m4a')
bambang.sendMessage(from, dj1mp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'dj2':
const dj2mp3 = fs.readFileSync('./assets/dj2.m4a')
bambang.sendMessage(from, dj2mp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'dj3':
const dj3mp3 = fs.readFileSync('./assets/dj3.m4a')
bambang.sendMessage(from, dj3mp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'dj4':
const dj4mp3 = fs.readFileSync('./assets/dj4.m4a')
bambang.sendMessage(from, dj4mp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'dj5':
const dj5mp3 = fs.readFileSync('./assets/dj5.m4a')
bambang.sendMessage(from, dj5mp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'dj6':
const dj6mp3 = fs.readFileSync('./assets/dj6.m4a')
bambang.sendMessage(from, dj6mp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'dj7':
const dj7mp3 = fs.readFileSync('./assets/dj7.m4a')
bambang.sendMessage(from, dj7mp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'baka':
case 'bodoh':
case 'onichan':
const bakamp3 = fs.readFileSync('./assets/baka.mp3');
bambang.sendMessage(from, bakamp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'bangjago':
const bangjagomp3 = fs.readFileSync('./assets/bangjago.m4a')
bambang.sendMessage(from, bangjagomp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'bangjago2':
const bangjago2mp3 = fs.readFileSync('./assets/bangjago2.m4a')
bambang.sendMessage(from, bangjago2mp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
break
case 'sound':
const soun = fs.readFileSync('./assets/sound.mp3')
bambang.sendMessage(from, soun, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound1':
satu = fs.readFileSync('./assets/sound1.mp3');
bambang.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

break
case 'sound2':
dua = fs.readFileSync('./assets/sound2.mp3');
bambang.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

break
case 'sound3':
tiga = fs.readFileSync('./assets/sound3.mp3');
bambang.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

break
case 'sound4':
empat = fs.readFileSync('./assets/sound4.mp3');
bambang.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

break
case 'sound5':
lima = fs.readFileSync('./assets/sound5.mp3');
bambang.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

break
case 'sound6':
enam = fs.readFileSync('./assets/sound6.mp3');
bambang.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

break
case 'sound7':
tujuh = fs.readFileSync('./assets/sound7.mp3');
bambang.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

break
case 'yamate':
tujuh = fs.readFileSync('./assets/yamete');
bambang.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
            default:
			if (budy.includes(`assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }

		if (budy.includes(`Assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }

		if (budy.includes(`Ngentod`)) {
                  reply(`Jaga Omongan😡`)
                  }

		if (budy.includes(`Sayang`)) {
                  reply(`Aku Juga Sayang Kamu Kak😍😘`)
                  }

		if (budy.includes(`sayang`)) {
                  reply(`Aku Juga Sayang Kamu Kak😍😘`)
                  }

		if (budy.includes(`Hai`)) {
                  reply(`Hai Juga`)
                  }


		if (budy.includes(`Hallo`)) {
                  reply(`Hallo Juga`)
                  }

		if (budy.includes(`Thanks`)) {
                  reply(`Sama Sama Kak😁`)
                  }

		if (budy.includes(`Makasih`)) {
                  reply(`Sama Sama Kak😁`)
                  }

		if (budy.includes(`sendsticker`)) {
                const darkbot = fs.readFileSync('./sticker/darkbot');
                bambang.sendMessage(from, darkbot, MessageType.sticker, {quoted: mek})
                  }
                  
		if (budy.includes(`bot`)) {
                  reply(`Iya KINGBOT disini ketik ,help ya kak`)
		const bot = fs.readFileSync('./assets/bot');
                bambang.sendMessage(from, bot, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
		if (budy.includes(`Bot`)) {
                const bot = fs.readFileSync('./assets/bot');
                bambang.sendMessage(from, bot, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
			if (body.startsWith(`${prefix}${command}`)) {

                  reply(`*${pushname}*, Command *${prefix}${command}* Tidak Ada Di Dalam *${prefix}menu KINGBOTLEO👑!*`)
		const none = fs.readFileSync('./assets/none');
		bambang.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

			  }
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
