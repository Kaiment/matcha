let mongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017";
let urlParser = { useNewUrlParser: true };


exports.createUser = (data) => {
    getDB().then((db_client) => {
        db = db_client.db("Matcha_db")
        let users = (db.collection('users'));
        users.insertOne(create_user_doc(data), (err, result) => {
            if (err) throw err;
            let user_id = result.ops[0]._id;
            create_confirm(db, user_id);
            db_client.close();
        });
    });
}

function create_confirm(db, user_id) {
    let confirm = {
        'user_id': user_id,
        'hash': user_id
    }
    let confirms = db.collection('confirms');
    confirms.insertOne(confirm, (err, result) => {
        if (err) throw err;
        console.log(result);
    })
}

function create_user_doc(data) {
    return {
        'email': data.email,
        'name': data.name,
        'surname': data.surname,
        'login': data.login,
        'password': data.password,
    }
}

async function getDB() {
    db = await mongoClient.connect(url, urlParser);
    return (db);
}