const fs = require('fs')

global.namabot = "SamXCODE v2"
global.namaowner = "SamXCODE"
global.footer_text = "© " + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['6285955039797','6285955039797']
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = `𝘼𝙇𝙇 𝙋𝘼𝙔𝙈𝙀𝙉𝙏 𝙏𝙄𝙉𝙂𝙂𝘼𝙇 𝙎𝘾𝘼𝙉.
𝙎𝙀𝙇𝘼𝙂𝙄 𝘽𝙀𝙇𝙐𝙈 𝙐𝙋𝘿𝘼𝙏𝙀 𝙋𝘼𝙔𝙈𝙀𝙉𝙏
𝘽𝙀𝘼𝙍𝙏𝙄 𝙈𝘼𝙎𝙄 𝙎𝘼𝙈𝘼, 𝙏𝙄𝙉𝙂𝙂𝘼𝙇 𝙏𝙁.
`
module.exports.helpMenu = (pushname) =>{
  return `Hello ${pushname}

*☬ 𝐁𝐎𝐓 𝐌𝐄𝐍𝐔 ☬*

\`\`\`
★ 𝐏𝐔𝐁𝐋𝐈𝐂 𝐌𝐄𝐍𝐔 ★
(Maintenance)

★ 𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔 ★
• setlist
• list
• pay
• setpay
• add
• kick
• done
• open
• close
• linkgc
• proses
• setpay
• addlist
• setleft
• delsetleft
• welcome
• goodbay
• setdone
• updatelist
• renamelist
• setproses
• hidetag
• antilink
• setdesgc
• setnamegc
• delsetbot 
• delsetwelcome
• changesetwelcome
• changesetdone
• changesetproses
• delsetbot
• demote
• setbot

\`\`\`
`
}