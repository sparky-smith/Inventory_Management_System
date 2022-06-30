var userDb = require('../model/model_con')

// create and save new user
exports.create = (req, res)=>{
    if(!req.body){
        res.status(400).send({message:"content can not be empty!"});
        return;
    }
    // console.log(req.body)
    const user = new userDb({
        id:req.body.id,
        ledger:req.body.ledger,
        page:req.body.page,
        nomenclature:req.body.nomenclature,
        unit:req.body.unit,
        supplier:req.body.supplier,
        quantity:req.body.quantity,
        serv:req.body.serv,
        cost_of_procurement:req.body.cost_of_procurement,
        date_of_procurement:req.body.date_of_procurement,
        no_of_years_of_service:req.body.no_of_years_of_service,
        no_of_years_of_nonutilization:req.body.no_of_years_of_nonutilization,
        reason_for_disposal:req.body.reason_for_disposal,
        r_nr:req.body.r_nr,
        disposal_action:req.body.disposal_action,
        salvage:req.body.salvage,

    })
    // console.log(user)
    user.save(user).then(data =>{
        res.redirect('/condemnation')
    }).catch(err =>{
        res.status(500).send({
            message:err.message || "Some error occurred while creating a create operation"
        })
    })
}


//retrieve and return all uers / retrieve and return a single user
exports.find= (req, res)=>{
    if(req.query.id){
        const id = req.query.id;
        userDb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"Not found use with id"+id})
            }else{
                res.send(data)
            }
        }).catch(err =>
            res.status(500).send({message:"Error retrieving user with id" + id}))
    }else{
        userDb.find()
    .then(user => {
        res.send(user)
    })
    .catch(err =>{
        res.status(500).send({message: err.message || "Error occurred while retriving user information"})
    })}
}

exports.update = (req, res, next) =>{
    console.log(req.params.id);
    userDb.findByIdAndUpdate({_id:req.params.id},req.body, (err,docs) =>{
        if(err){
            console.log("Something wrong!")
            next(err)
        }else{
            res.redirect("/condemnation")
        }
    } 
    )
}


// delete
exports.delete = (req, res, next) =>{
    userDb.findByIdAndDelete({_id:req.params.id}, (err, docs)=>{
        if(err){
            console.log("Something went wrong!")
            next(err)
        }else{
            console.log("Deleted Successfully!")
            res.redirect("/condemnation")

        }
    })
}