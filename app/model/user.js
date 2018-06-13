/**
 * 
 * @param {user model} app 
 */
module.exports = app => {
    const mongoose = app.mongoose;
    // console.log(app.mongoose,888);
    // const Schema = mongoose.Schema;
  
    const UserSchema = new mongoose.Schema({
      username: { type: String, unique: true, required: true },
      password: { type: String ,required: true},
      // access: { type: String, required: true, default: 'user' },
      // extra: { type: mongoose.Schema.Types.Mixed },
      // createdAt: { type: Date, default: Date.now }
    });
  
    return mongoose.model('User', UserSchema);
  }
  