const grpc  = require('grpc');
const petsProto = grpc.load('./proto/pets.proto');
const pets = [
  {id: '1', name: 'Alaska', description: 'Des 1'},
  {id: '2', name: 'Husky', description: 'Des 2'},
];


function List (_, callback) {
  return callback(null, pets)
}

function FindOne ({ request: { id } }, callback) {
  return callback(null, pets.find((note) => note.id === id))
}

function Insert (call, callback){
  let pet = call.request;
  pets.push(pet);
  callback(null, pet);
}

function Delete({request: { id }}, callback) {
  let pet = pets.find(pet => pet.id == id);
  if(pet) {
    pets.splice(pet, 1);
    console.log('aaaa', pet)
    callback(null, pet);
  }else {
    callback({
      code: grpc.status.NOT_FOUND,
      details: "Not found"
    })
  }
}


const server = new grpc.Server();
server.addService(petsProto.PetService.service, {List, FindOne, Insert, Delete})
server.bind('0.0.0.0:5050', grpc.ServerCredentials.createInsecure());
console.log('Server running at http://0.0.0.0:5050');
server.start();