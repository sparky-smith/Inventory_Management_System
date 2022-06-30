var userDb = require('../model/model_dist')

// create and save new user
exports.create = (req, res)=>{
    if(!req.body){
        res.status(400).send({message:"content can not be empty!"});
        return;
    }
    // console.log(req.body)
    const user = new userDb({
        id:req.body.id,
        date_of_issue:req.body.date_of_issue,
        nomenclature:req.body.nomenclature,
        ledger:req.body.ledger,
        page:req.body.page,
        available_quantity:req.body.available_quantity,
        quantity_issued:req.body.quantity_issued,
        purpose_of_use:req.body.purpose_of_use,
        issue_of_location:req.body.issue_of_location,
        name_of_receiver:req.body.name_of_receiver,
        name_of_wing:req.body.name_of_wing,

    })
    // console.log(user)
    user.save(user).then(data =>{
        res.redirect('/distribution')
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
            res.redirect("/distribution")
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
            res.redirect("/distribution")

        }
    })
}