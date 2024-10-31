const products = require("../data/products");

// this is to insert all the data from the file to the database
const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://neoGStudent:StzUj8ju3Bfl6v8i@neog.dxxm2ci.mongodb.net/?retryWrites=true&w=majority&appName=neoG";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    // database and collection code goes here
    const db = client.db("e-commerce");
    const coll = db.collection("products");
    // insert code goes here
    const result = await coll.insertMany(products);
    // display the results of your operation
    console.log(result.insertedIds);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
