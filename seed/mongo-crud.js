const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://blog-app:bl0g-@pp@cluster0.rocff.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'; 

class MongoCrud {

    constructor(database, collectionName) {
        this.database = database;
        this.collectionName = collectionName;
    }

    async addOne(data) {
        const client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        await client.connect();
        const db = client.db(this.database);
        const result = await db.collection(this.collectionName).insertOne(data);
        client.close();

        return result;
    }

    async find(filter) {
        const client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        await client.connect();
        const db = client.db(this.database);
        const result = db.collection(this.collectionName).find(filter || {});
        const data = await result.toArray();
        client.close();

        return data;
    }
}

module.exports = MongoCrud;