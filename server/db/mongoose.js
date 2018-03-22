var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.PROD_MONGODB || 'mongodb://localhost:27017/TodoApp');
//mongoose.connect(process.env.PROD_MONGODB);

module.exports = {mongoose};

