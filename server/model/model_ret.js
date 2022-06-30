const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    
    id:{
        type:String,
        require:true
    },
    return_date:{
        type: Date,
        require:true
    },
    issued_item_name:{
        type: String,
        require:true
    },
    nomenclature:{
        type: String,
        require:true
    },
    type:{
        type: String,
        require:true
    },
    purpose_of_use:{
        type: String,
        require:true
    },
    name_of_receiver:{
        type: String,
        require:true
    },
    issue_location:{
        type: String,
        require:true
    },
    quantity_issued:{
        type: String,
        require:true
    },
})

const userDb = mongoose.model('userdbRet', schema);
module.exports=userDb;