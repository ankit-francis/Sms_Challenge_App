var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var TendorsSchema=new Schema({
    city:String,
    start_date:{type:Date, default:(Date.now)},
    end_date:{type:Date, default:(Date.now()+ 1)},
    price:String,
    status:String,
    color:String
 } , {collection: 'tendors'}
)
const Tendor=mongoose.model('tendors',TendorsSchema);
module.exports=Tendor