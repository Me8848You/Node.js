

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url="mongodb+srv://node321:node321@nodecluster.4ybqagf.mongodb.net/test"; 
const client = new MongoClient(url);

// Database Name
const dbName = 'Youtube';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');

  const db = client.db(dbName);
  const collection = db.collection('videos');
  
  const result= await collection.find({}).toArray(); 

  console.log(result);  

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());