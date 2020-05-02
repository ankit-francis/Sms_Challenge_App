var routes=require('express').Router();
var PaintTendors=require('../controllers/paintTendors-controller');

routes.get('/fetchRecords',PaintTendors.fetchTendorsRecords);

module.exports=routes;