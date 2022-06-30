const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    
    id:{
        type:String,
        require:true
    },
    ledger:{
        type: String,
        require:true
    },
    page:{
        type: Number,
        require:true
    },
    nomenclature:{
        type: String,
        require:true
    },
    unit:{
        type: String,
        require:true
    },
    quantity:{
        type: Number,
        require:true
    },
    serv:{
        type: String,
        require:true
    },
    cost_of_procurement:{
        type: Number,
        require:true
    },
    date_of_procurement:{
        type: Date,
        require:true
    },
    no_of_years_of_service:{
        type: Number,
        require:true
    },
    no_of_years_of_nonutilization:{
        type: Number,
        require:true
    },
    reason_for_disposal:{
        type: String,
        require:true
    },
    r_nr:{
        type: String,
        require:true
    },
    disposal_action:{
        type: String,
        require:true
    },
    salvage:{
        type: String,
        require:true
    },
})

const userDb = mongoose.model('userdbCon', schema);
module.exports=userDb;