const client = require("../client");

client.Delete(Math.floor(Math.random() * 2 + 1).toString(), (err, pet) => {
  if (err) {
    console.log('Delete pet failed!', err)
  }
  return console.log('Delete success',pet)
})
