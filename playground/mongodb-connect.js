// const MongoClient = require('mongodb').MongoClient;


// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
//     if (err){
//         return console.log('Unable to connect.')
    
//     }
//     console.log('Connected to Mongo');
//     // db.collection('Todos').insertOne({
//     //     text: 'Something to do',
//     //     completed: false

//     // }, (err,result) => {
//     //    if(err) {
//     //        return console.log('Error', err)
//     //    } 
//     //    console.log(JSON.stringify(result.ops, undefined, 2))
//     // })

//     db.collection('Users').insertOne({
//         name: 'Michal Niemiec',
//         age: 25,
//         location: 'Poland'

//     }, (err,result) => {
//        if(err) {
//            return console.log('Error', err)
//        } 
//        console.log(JSON.stringify(result.ops, undefined, 2))
//     })

//     db.close();
// })

var wiktoria =  {a:1, b:2};
var {a, b} = wiktoria
console.log(a); // 1
console.log(b);
