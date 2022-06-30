const client = require("../client");

client.FindOne(Math.floor(Math.random() * 2 + 1).toString(), (err, pet) => {
  if (err) throw err
  if (!pet.id) return console.log('pet not found')
  return console.log(pet)
})
