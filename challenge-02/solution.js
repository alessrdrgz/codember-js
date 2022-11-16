const encryptedMsg = '11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101'
const ASCII_REGEX = /9[7-9]|1[0-1][0-9]|12[0-2]/g

const msg = encryptedMsg.split(' ').map(encryptedWord => {
  return encryptedWord.match(ASCII_REGEX).map(l => String.fromCharCode(l)).join('')
}).join(' ')

console.log(`submit ${msg}`)
