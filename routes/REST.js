const fs = require ('fs');
var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://leonel:ckAFEK84uu6h57V9@cluster0-1vqi1.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

const ObjectID = require("mongodb").ObjectID;

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

router.use(express.json());

const app = express();

function getCalback(resolve,reject){

    const promise1=client.connect();
    promise1.then(() => {
        const db = client.db("parcialDB");
        const collection = db.collection("test");
        let promise2 = collection.find({}).toArray();
        promise2.then((TESTS) => {
        client.close();
        console.log("la coleccion BISTA EN CRUD",TESTS);
        resolve(TESTS);
    });
        promise2.catch((err) => reject(err));
    });

    promise1.catch((err) => console.log(err));

}




router.get('/', (req, res) => {
    getCalback(
        (coleccionTEST) => res.json(coleccionTEST),
    (err) => res.json(err)
    )
  });





module.exports = router;