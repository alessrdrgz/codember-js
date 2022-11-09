const usersFile = await fetch('https://codember.dev/users.txt').then(async (r) => await r.text())
const users = usersFile.replace(/(^.+)(\n)?/gm, '$1 ').split('\n')

let validUsers = 0
let lastValidUser = ''

const checkUser = (userKeys) => {
  const validKeys = ['usr', 'eme', 'psw', 'age', 'loc', 'fll']

  for (const key of validKeys) {
    if (!userKeys.includes(key)) return false
  }

  return true
}

users.forEach(user => {
  const keyValueRegex = /(?:(?<key>\w+):(?<value>([^\s]+))?)/g
  let currentUser
  const currentKeys = []

  let match
  while ((match = keyValueRegex.exec(user)) !== null) {
    const { key, value } = match.groups
    if (key === 'usr') currentUser = value
    currentKeys.push(key)
  }

  if (checkUser(currentKeys)) {
    validUsers++
    lastValidUser = currentUser
  }
})

console.log(`Valid users: ${validUsers}`)
console.log(`Last valid user: ${lastValidUser}`)
