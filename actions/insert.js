const client = require("../client");

const newPet = {
  id: '3',
  name: 'Khanh thia',
  description: 'hihi'
}

client.insert(newPet, (err, pet) => {
  if (err) throw err;
  console.log('New pet created successfully', pet)
})