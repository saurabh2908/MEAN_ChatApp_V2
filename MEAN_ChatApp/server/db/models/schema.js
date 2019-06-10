const connection = require("./connection");
const Schema = connection.Schema;
// const userSchema = new Schema({
//          'creator':{type:String, require:true},
//          'joiner':{type:String},
//          'messanger':{type:String}
// });
// const UserModel = connection.model('USER',userSchema);

const RegisterSchema = new Schema({
         'name':{type:String, require:true,},
         'middleName':{type:String},
         'lastName':{type:String, require:true,},
         'email':{type:String, require:true, unique:true},
         'city':{type:String, require:true,},
         'state':{type:String, require:true,},
         'phone':{type:Number, require:true, unique:true, min:10, max:10},
         'password':{type:Number, require:true, unique:true}
        });
       
        const RegisterModel = connection.model('Register',RegisterSchema);



module.exports= RegisterModel;
    
