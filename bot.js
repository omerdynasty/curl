const mineflayer = require('mineflayer')
console.log("\x1b[35m", "By IgnoreReality!")
console.log('\x1b[36m%s\x1b[0m', "=========================")
console.log("\x1b[33m", "Holivent Bot çalıştırılıyor...")
const bot = mineflayer.createBot({
  host: 'dragonxteam.aternos.me',
  port: '39910',
  username: 'dragon_bot',
  auth: 'offline',              
  version: 1.12
})
console.log("\x1b[32m", "Bot ayarlayı yapıldı!")
console.log("\x1b[33m", "Fonksiyonlar çalıştırılıyor...")
console.log("\x1b[32m", "Fonksiyonlar çalıştırıldı!")
console.log('\x1b[36m%s\x1b[0m', "=========================")
bot.on('chat', (username, message) => {
  if (username === bot.username) return
  bot.chat(message)
})
function lookAtNearestPlayer () {
  const playerFilter = (entity) => entity.type === 'player'
  const playerEntity = bot.nearestEntity(playerFilter)
  
  if (!playerEntity) return
  
  const pos = playerEntity.position.offset(0, playerEntity.height, 0)
  bot.lookAt(pos)
}

bot.on('physicTick', lookAtNearestPlayer)
bot.on("kicked", reason => console.log("\x1b[31m", "Bot sunucudan atıldı!"));