//client.js

const grpc = require('grpc');
const PROTO_PATH = './proto/pets.proto';
const PetService = grpc.load(PROTO_PATH).PetService;
const client = new PetService('0.0.0.0:5050', grpc.credentials.createInsecure());
module.exports = client;

// client.Insert({}, (err, pets) => {
//   if(err) throw err
//   console.log('pets', pets);
// })

