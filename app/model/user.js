/**
 * 
 * @param {user model} app 
 */
module.exports = (app) => {
  
	const mongoose = app.mongoose;

	const UserSchema = new mongoose.Schema({
		username: { type: String, unique: true, required: true },
		password: { type: String, required: true },
		name: { type: String, required: true },
		sex: { type: String, required: true },
		duties: { type: String, required: true },
		city: { type: String, required: false },
		role: { type: String, required: false },
		flag: { type: String, required: true },
		tel: { type: String, required: false },
		email: { type: String, required: false },
		addr: { type: String, required: false }
	});

	return mongoose.model('User', UserSchema);
};
