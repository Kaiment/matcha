let mongoClient = require('mongodb').MongoClient;

exports.create_db = function(db_name) {
    mongoClient.connect('mongodb://localhost:27017/' + db_name, { useNewUrlParser: true }, function (err, client) {
        if (err) throw err;
        console.log('Connected to db');
        let db = client.db(db_name);
        collections = [
            'users',
            'confirms'
        ]
        instantiate_collections(db, collections);
    });
}

function instantiate_collections(db, collections) {
    collections.forEach( e => {
        db.createCollection(e, (err, collection) => {
           if (err) throw err;
           console.log(collection.collectionName + " created.");
       }) 
    });
}