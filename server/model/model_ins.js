const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    
    id:{
        type:String,
        require:true
    },
    inspection_date:{
        type: Date,
        require:true
    },
    receipt_no:{
        type: Number,
        require:true
    },
    inspect_note_no:{
        type: Number,
        require:true
    },
    supply_order_no:{
        type: Number,
        require:true
    },
    supplier:{
        type: String,
        require:true
    },
    nomenclature:{
        type: String,
        require:true
    },
    item_name:{
        type: String,
        require:true
    },
    issued_person:{
        type: String,
        require:true
    },
    issued_person_section:{
        type: String,
        require:true
    },
})

const userDb = mongoose.model('userdbIns', schema);
module.exports=userDb;