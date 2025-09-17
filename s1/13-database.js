const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://akshithg01:yXoaqg2W6qKWHgPI@cluster0.vgg8sag.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB successfully!");

    const database = client.db("HelloWorld");
    const collection = database.collection("User");

    const data = {
      firstName: "Anushka",
      lastName: "Gunasheelan",
      city: "Bengaluru",
      phoneNumber: "1234567891",
    };

    // const result = await collection.insertOne(data); // inserting data into collection
    // console.log("Inserted document with id :", result.insertedId);

    const documents = await collection.find({}).toArray(); // finding everything and converting it to array

    const count = await collection.countDocuments({}); // counting documents in a collection

    // Find all documents with a filter of firstName
    const result = await collection.find({ firstName: "Anushka" }).toArray();
    console.log("Result with given name is: ", result);

    console.log("Documents in collection:", documents);
    console.log("Number of documents in the collection is: ", count);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  } finally {
    await client.close();
  }
}

connectDB();
