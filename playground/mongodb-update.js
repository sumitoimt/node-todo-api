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

	/*db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID("5aab7907c8c06db1b5c45af8") 
	},{
		$set:{
			completed:true
		}
	},{
		returnOriginal:false
	}).then((result)=>{
		console.log(result);
	});*/

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID("5aa27ddae9b04a31d0117bd9")
	},{
	$set:{
		name:'Sumit'
	}},{
		$inc:{
			age:1
		}
	},{
		returnOriginal:false
	}).then((result)=>{
		console.log(result);
	})

	
	//db.close();

});