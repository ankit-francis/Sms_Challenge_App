   var tendorService=require('../services/tendor-service');
   
   function fetchTendorsRecords(request,response) {
        tendorService.fetchRecords(request,response).then((records)=>{
            response.send(records);
        });
    }

    module.exports={
        fetchTendorsRecords:fetchTendorsRecords
    }