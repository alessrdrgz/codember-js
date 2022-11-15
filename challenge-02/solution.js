const encryptedMsg = '11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101'
const min = 97 // ascii code of a
const max = 122 // ascii code of z

const phrase = []

encryptedMsg.split(' ').forEach(encryptedWord => {
  const letters = []
  let currentLetter = ''
  encryptedWord.split('').forEach(n => {
    currentLetter += n
    if (currentLetter >= min && currentLetter <= max) {
      letters.push(currentLetter)
      currentLetter = ''
    }
  })

  let word = ''
  for (const l of letters) word += String.fromCharCode(l)
  phrase.push(word)
})

console.log(phrase.join(' '))
