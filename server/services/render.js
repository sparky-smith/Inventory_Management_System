const axios = require('axios');
const userDb_ins = require('../model/model_ins');
const userDb_dist = require('../model/model_dist');
const userDb_con = require('../model/model_con');
const userDb_ret = require('../model/model_ret');
const userDb_exp = require('../model/model_exp');
const PORT = process.env.PORT || 8000;

exports.homeRoutes = (req, res) =>{
    res.render('home')
}
exports.inpsection = (req, res) =>{
    axios.get(`http://localhost:${PORT}/api/inspection`).then(function(response){
        console.log(response.data)
        res.render('inspection',{ins:response.data})
    }).catch(err => {
        res.send(err)
    })
}
exports.distribution = (req, res) =>{
    axios.get(`http://localhost:${PORT}/api/distribution`).then(function(response){
        console.log(response.data)
        res.render('distribution',{dist:response.data})
    }).catch(err => {
        res.send(err)
    })
}
exports.return = (req, res) =>{
    axios.get(`http://localhost:${PORT}/api/return`).then(function(response){
        console.log(response.data)
        res.render('return',{ret:response.data})
    }).catch(err => {
        res.send(err)
    })
}
exports.expandable = (req, res) =>{
    axios.get(`http://localhost:${PORT}/api/expandable`).then(function(response){
        console.log(response.data)
        res.render('expandable',{exp:response.data})
    }).catch(err => {
        res.send(err)
    })
}
exports.condemnation = (req, res) =>{
    axios.get(`http://localhost:${PORT}/api/condemnation`).then(function(response){
        console.log(response.data)
        res.render('condemnation',{con:response.data})
    }).catch(err => {
        res.send(err)
    })
}


exports.inspection_form = (req, res) =>{
    res.render('ins-modal')
}
exports.condemnation_form = (req, res) =>{
    res.render('con-modal')
}
exports.distribution_form = (req, res) =>{
    res.render('dist-modal')
}
exports.return_form = (req, res) =>{
    res.render('ret-modal')
}
exports.expandable_form = (req, res) =>{
    res.render('exp-modal')
}

exports.update_inspection = (req, res)=>{
    console.log(req.params.id)
    userDb_ins.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}, (err,data)=>{
        if(err){
            console.log("Can't retrieve data and edit")
        }else{
            res.render('ins-modal_update', {ins:data});
        }
    })
}
exports.update_distribution = (req, res)=>{
    console.log(req.params.id)
    userDb_dist.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}, (err,data)=>{
        if(err){
            console.log("Can't retrieve data and edit")
        }else{
            console.log(data)
            res.render('dist-modal_update', {dist:data});
        }
    })
}
exports.update_condemnation = (req, res)=>{
    console.log(req.params.id)
    userDb_con.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}, (err,data)=>{
        if(err){
            console.log("Can't retrieve data and edit")
        }else{
            res.render('con-modal_update', {con:data});
        }
    })
}
exports.update_return = (req, res)=>{
    console.log(req.params.id)
    userDb_ret.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}, (err,data)=>{
        if(err){
            console.log("Can't retrieve data and edit")
        }else{
            res.render('ret-modal_update', {ret:data});
        }
    })
}
exports.update_expandable = (req, res)=>{
    console.log(req.params.id)
    userDb_exp.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}, (err,data)=>{
        if(err){
            console.log("Can't retrieve data and edit")
        }else{
            res.render('exp-modal_update', {exp:data});
        }
    })
}
