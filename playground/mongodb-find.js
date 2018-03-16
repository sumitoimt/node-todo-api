//const  MongoClient = require('mongodb').MongoClient;
const  {MongoClient, ObjectID} = require('mongodb');

/*var user = {name:'sumit', age: 27};
var {name} = user;
console.log(name)*/

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log('Unable to connect Mongodb server');
	}
	console.log('Connected to mongodb server');

	/*db.collection('Todos').find({
		_id:new ObjectID('5aa27cd0f8890803a4945375')
	}).toArray().then((docs)=>{
		console.log('Todos');
		console.log(JSON.stringify(docs,undefined,2));
	},(err)=>{
		console.log('Unable to fetch todos',err);
	});*/
	/*db.collection('Todos').find().count().then((count)=>{
		console.log(`Todos count: ${count}`);
		
	},(err)=>{
		console.log('Unable to fetch todos',err);
	});*/
	db.collection('Users').find({name:'sumit'}).toArray().then((docs)=>{
		console.log(JSON.stringify(docs,undefined,2));
	})

	//db.close();

});