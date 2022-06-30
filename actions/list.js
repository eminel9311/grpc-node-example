const client = require("../client");


client.List({}, (err, pets) => {
  if(err) throw err
  console.log('pets', pets);
})