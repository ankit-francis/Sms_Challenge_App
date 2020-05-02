var db=require('../Schemas/tendor-schema')

async function fetchRecords(request,response){
    var records=await db.find({},{"_id":0},(err)=>{
           if (err) return handleError(err);
          })
     return records
}
module.exports={fetchRecords:fetchRecords};