var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose.js');

var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
	var todo = new Todo({
		text:req.body.text
	});
	todo.save().then((doc)=>{
	res.send(doc);
	},(e)=>{
		res.status(400).send(e);
	});
});


app.get('/todos/',(req,res)=>{
	Todo.find().then((todos)=>{
		res.send({todos});
	},(e)=>{
		res.status(400).send(e);
	});
})
//Get /todos/123

app.get('/todos/:id',(req,res)=>{
	var id = req.params.id;
	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}
	Todo.findById(id).then((todo)=>{
		if(!todo)
		{
			return res.status(404).send();
		}
		res.send({todo});

	}).catch((e)=>{
		res.status(404).send();
	})
	//res.send(req.params);
});

app.listen(3000, ()=>{
	console.log('Started on port 3000');
});

module.exports = {app};

/*var newTodo = new Todo({
	text:'Cook dinner'
});

newTodo.save().then((doc)=>{
	console.log('Save todo',doc);
},(e)=>{
	console.log('Unable to save');
});*/

/*var otherTodo = new Todo({
	text:'something to do'
});

otherTodo.save().then((doc)=>{
	console.log(JSON.stringify(doc,undefined,2));
},(e)=>{
	console.log('Unable to save');
});*/

// user model

//Email Property



/*var user = new User({
email:'sumitoimt@gmail.com'
});

user.save().then((doc)=>{
	console.log('User Saved',doc);
},(e)=>{
	console.log('Unable to Save');
});*/