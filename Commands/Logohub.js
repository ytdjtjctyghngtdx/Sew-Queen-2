/* 
 Sew Queen Whatsapp Bot                       
                       
 Telegram: t.me/RavinduManoj
 Facebook: https://www.facebook.com/ravindu.manoj.79
 Licensed under the  GPL-3.0 License;
 
 Coded By Ravindu Manoj
*/ 
let DataPack = require('sew-queen-pro');
let SewQueen = require('sew-queen-pro/sources/dc/handler');
let Details = require('sew-queen-pro/sources/dc/Details');
let axios = require('axios');
let {sendMessagettp, sendMessageEmojiToPng, sendMessageAboutUs} = require('sew-queen-pro/sources/dc/cmd/ttp')
let { SendMessageImage } = require('sew-queen-pro/sources/dc/cmd/dl')
let {sendMessagelogolist} = require('sew-queen-pro/sources/dc/cmd/TextList')
let {sendMessagelogores, sendMessagepngres} = require('sew-queen-pro/sources/dc/cmd/textmaker')
let WorkType = Details.WORKTYPE == 'public' ? false : true
var { FancyText, fancyList } = require("fancy-sew-amdi")
let { MessageType, Mimetype } = require('@ravindu01manoj/sew-queen-web');
SewQueen['IntroduceCMD']({
        pattern: 'attp ?(.*)', 
        fromMe: WorkType, 
        dontAdCommandList: true
       }, 
(async (QueenSew, input) => {
 await sendMessagettp(QueenSew, input)
}));
SewQueen['IntroduceCMD']({
        pattern: 'png ?(.*)', 
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageEmojiToPng(QueenSew, input)
})); 
SewQueen['IntroduceCMD']({
        pattern: 'textlogo ?(.*)', 
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessagelogolist(QueenSew, input)
await sendMessagelogores(QueenSew, input)
})); 
SewQueen['IntroduceCMD']({
        pattern: 'fancy ?(.*)', 
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
if(input[1].includes('//--//')) {
var text = input[1].split('//--//')[1]
var type = input[1].split('//--//')[0]
var fancy = await FancyText(text)
await QueenSew.client.sendMessage(QueenSew.jid, fancy[type], MessageType.text)
} else {
var list = await fancyList(input[1])
await QueenSew.client.sendMessage(QueenSew.jid, list, MessageType.listMessage)
}
}));
// about me
SewQueen['IntroduceCMD']({
            pattern: 'about', 
            fromMe: true, 
            dontAdCommandList: true
            },
 (async (QueenSew, input) => {
 await sendMessageAboutUs(QueenSew, input)
}));


