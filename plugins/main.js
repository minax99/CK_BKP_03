const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const config = require('../settings');

cmd({
    pattern: "alive",
   // alias: ["status2", "online2"],
    desc: "Check bot is alive or not",
    category: "main",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, sender, reply, pushname }) => {
    try {
        const status = `👋 *🅷🅴🅻🅻🅾 ${pushname} 𝘸𝘦𝘭𝘤𝘰𝘮𝘦 𝘵𝘰 ᴄʜᴇᴛʜᴍɪɴᴀ ᴍᴅ 😗*

*╭─「 ʙᴏᴛ ꜱᴛᴀᴛᴜꜱ ᴅᴇᴛᴀɪʟꜱ 」*
*│*👾 *Bot*= *ᴄʜᴇᴛʜᴍɪɴᴀ-ᴍᴅ*
*│*⏰ *Uptime*= ${runtime(process.uptime())}
*│*📂 *Ram*= ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
*│*✒️ *Prefix*= . 
*│*🌀 *Host* = ${os.hostname()}
*│*⚡ *Version* = 1.0.0
*│*💨 *Mode* = [${config.MODE}]
*╰──────────●●►*

> 👨🏻‍💻 ᴍᴀᴅᴇ ʙʏ *ᴄʜᴇᴛʜᴍɪɴᴀ ᴋᴀᴠɪꜱʜᴀɴ*`;

        await conn.sendMessage(from, {
            image: { url: config.MENU_IMAGE_URL },
            caption: status,          
        }, { quoted: mek });

    } catch (e) {
        console.error("Alive Error:", e);
        reply(`An error occurred: ${e.message}`);
    }
});

cmd(
  {
    pattern: "ping",
    alias: ["speed","pong"],
    use: '.ping',
    desc: "Check bot's response time.",
    category: "main",
    react: "🚀",
    filename: __filename
  }, async (
    conn,
    mek,
    m, {
      from,
      reply
    }
  ) => {
    try {
      const start = new Date().getTime();
      
      const end = new Date().getTime();
      const responseTime = (end - start) / 1000;
      
      const text = `*📍 ρσηg : ${responseTime.toFixed(2)}мѕ*`;
      
      await conn.sendMessage(from, {
            text
        });
      
    } catch (e) {
      console.log(e)
    }
  }
);