const express = require('express');
const bodyParser = require('body-parser');

const Promotions = require('../models/promotions');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.get((req, res, next)=>{res.end('Will send all the promotions to you!');})
.post((req, res, next)=>{res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next)=>{res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');})
.delete((req, res, next)=>{res.end('Deleting all promotions');
});

promoRouter.route('/:promoId')
.get((req, res, next)=>{res.end('Will send details of the ' + req.params.promoId +  ' promotions to you!');
})
.post((req, res, next)=>{res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next)=>{
    res.write('Updating the promotion: '+req.params.promoId + '\n');
    res.end('Will update the promotion: '+ req.body.name + ' with details: ' + req.body.description);;})
.delete((req, res, next)=>{res.end('Deleted ' + req.params.promoId);
});

module.exports = promoRouter;