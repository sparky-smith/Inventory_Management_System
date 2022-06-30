const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    
    date:{
        type:Date,
        require:true
    },
    nomenclature_of_expandable:{
        type: String,
        require:true
    },
    quantity:{
        type: Number,
        require:true
    },
    purpose_of_issue:{
        type: String,
        require:true
    },
    name_of_consumer:{
        type: String,
        require:true
    },
    remarks:{
        type: String,
        require:true
    },
   
})

const userDb = mongoose.model('userdbExp', schema);
module.exports=userDb;