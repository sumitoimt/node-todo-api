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
	/*db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result)=>{
		console.log(result);
	})*/
	/*db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result)=>{
		console.log(result);
	})*/
	/*db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
		console.log(result);
	})*/

	db.collection('Users').deleteMany({name:'sumit'});

	db.collection('Users').findOneAndDelete({_id: new ObjectID("5aa281597107782660cdea4c")}).then((results)=>{
		console.log(JSON.stringify(results,undefined,2));
	});

	
	//db.close();

});