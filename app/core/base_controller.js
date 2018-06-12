/**
 * base controller
 */

 const { Controller} = require('egg');

 class BaseController extends Controller{
     constructor(){
         super();
     }

     get user(){
         return this.ctx.session.user;
     }

     success(data){
        this.ctx.body={
            success:true,
            data:data
        }
     }

     notFound(msg = 'not found'){
        msg = msg;
        this.ctx.throw(404,msg);
     }
 }

 module.exports = BaseController;