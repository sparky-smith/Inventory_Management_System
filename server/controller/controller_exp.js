var userDb = require('../model/model_exp')

// create and save new user
exports.create = (req, res)=>{
    if(!req.body){
        res.status(400).send({message:"content can not be empty!"});
        return;
    }
    // console.log(req.body)
    const user = new userDb({
        date:req.body.date,
        nomenclature_of_expandable:req.body.nomenclature_of_expandable,
        quantity:req.body.quantity,
        purpose_of_issue:req.body.purpose_of_issue,
        name_of_consumer:req.body.name_of_consumer,
        remarks:req.body.remarks
    })
    // console.log(user)
    user.save(user).then(data =>{
        res.redirect('/expandable')
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
            res.redirect("/expandable")
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
            res.redirect("/expandable")

        }
    })
}