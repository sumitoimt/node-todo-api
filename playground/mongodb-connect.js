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

	/*db.collection('Todos').insertOne({
		text:'Something to do',
		completed: false
	},(err,result)=>{
		if(err)
		{
			return console.log('Unable to insert todo', err);
		}
		console.log(JSON.stringify(result.ops,undefined,2));
	});*/
	// Insert new doc into Users (name ,age ,location)
	/*db.collection('Users').insertOne({
		name: 'sumit',
		age: 27,
		location: 'Delhi'
	},(err,result)=>{
		if(err)
		{
			return console.log('Unable to insert User', err);
		}
		console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
	});*/
	db.close();

});