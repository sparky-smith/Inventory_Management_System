const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    
    id:{
        type:String,
        require:true
    },
    date_of_issue:{
        type: Date,
        require:true
    },
    nomenclature:{
        type: String,
        require:true
    },
    ledger:{
        type: Number,
        require:true
    },
    page:{
        type: Number,
        require:true
    },
    available_quantity:{
        type: Number,
        require:true
    },
    quantity_issued:{
        type: Number,
        require:true
    },
    purpose_of_use:{
        type: String,
        require:true
    },
    issue_of_location:{
        type: String,
        require:true
    },
    name_of_receiver:{
        type: String,
        require:true
    },
    name_of_wing:{
        type: String,
        require:true
    }
})

const userDb = mongoose.model('userdbDist', schema);
module.exports=userDb;