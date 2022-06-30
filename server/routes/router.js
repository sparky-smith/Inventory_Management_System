const express = require('express');
const route = express.Router();
const services = require('../services/render')
const controller_con = require('../controller/controller_con')
const controller_dist = require('../controller/controller_dist')
const controller_ins = require('../controller/controller_ins')
const controller_ret = require('../controller/controller_ret')
const controller_exp = require('../controller/controller_exp')


route.get('/', services.homeRoutes)
route.get('/inspection', services.inpsection)
route.get('/distribution', services.distribution)
route.get('/return', services.return)
route.get('/expandable', services.expandable)
route.get('/condemnation', services.condemnation)
route.get('/inspection_form', services.inspection_form)
route.get('/distribution_form', services.distribution_form)
route.get('/condemnation_form', services.condemnation_form)
route.get('/return_form', services.return_form)
route.get('/expandable_form', services.expandable_form)

route.post('/api/inspection', controller_ins.create)
route.post('/api/distribution', controller_dist.create)
route.post('/api/condemnation', controller_con.create)
route.post('/api/return', controller_ret.create)
route.post('/api/expandable', controller_exp.create)

route.get('/api/inspection', controller_ins.find)
route.get('/api/distribution', controller_dist.find)
route.get('/api/condemnation', controller_con.find)
route.get('/api/return', controller_ret.find)
route.get('/api/expandable', controller_exp.find)


// getting update forms
route.get('/update-inspection/:id', services.update_inspection)
route.get('/update-distribution/:id', services.update_distribution)
route.get('/update-condemnation/:id', services.update_condemnation)
route.get('/update-return/:id', services.update_return)
route.get('/update-expandable/:id', services.update_expandable)

// posting the update form method
route.post('/update-inspection/:id', controller_ins.update)
route.post('/update-distribution/:id', controller_dist.update)
route.post('/update-condemnation/:id', controller_con.update)
route.post('/update-return/:id', controller_ret.update)
route.post('/update-expandable/:id', controller_exp.update)


// deleting the rows
route.get('/delete_ins/:id', controller_ins.delete);
route.get('/delete_dist/:id', controller_dist.delete);
route.get('/delete_con/:id', controller_con.delete);
route.get('/delete_ret/:id', controller_ret.delete);
route.get('/delete_exp/:id', controller_exp.delete);


module.exports = route;