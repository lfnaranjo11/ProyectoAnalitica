const fs = require ('fs');
var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://leonel:ckAFEK84uu6h57V9@cluster0-1vqi1.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
const ObjectID = require("mongodb").ObjectID;
let collection =null;

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });




const promise1=client.connect();
    promise1.then(() => {
        const db = client.db("parcialDB");
        const collection2 = db.collection("test");
        let promise2 = collection2.find({}).toArray();
        promise2.then((TESTS) => {
        client.close();
        collection =TESTS;
        console.log("la coleccion es la siguiente",collection);
    });
        promise2.catch((err) => console.log(err));
    });

promise1.catch((err) => console.log(err));






router.get('/', function(req, res, next) {

    let formateado =JSON.stringify(collection);
    res.render('database', { title: formateado});

  });





module.exports = router;