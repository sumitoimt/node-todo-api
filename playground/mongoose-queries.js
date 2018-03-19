const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*var id = '5aaf859c15b46c4c1ca1bd63';
if(!ObjectID.isValid(id)){
	console.log('Id not valid');
}
Todo.find({
	_id: id
}).then((todos)=>{
	console.log('Todos', todos);
});

Todo.findOne({
	_id: id
}).then((todo)=>{
	console.log('Todos', todo);
});

Todo.findById(id).then((todo)=>{
	if(!todo)
	{
		return console.log('Id not found');
	}
	console.log('Todo by Id', todo);
}).catch((e)=>console.log(e));*/


User.findById('5aaf59491d57a608182d50ad').then((user)=>{
	if(!user)
	{

	}
	console.log(JSON.stringify(user,undefined,2));
},(e)=>{
	console.log(e);
});