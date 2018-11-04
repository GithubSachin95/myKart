const mongoose = require('mongoose');
const schema = mongoose.Schema;
const now = require("../libs/time")

let cartSchema = new schema(
    {
        name :{
            type : String,
            default : "defaultProductName"
        },
        productID :{
            type :String,
            unique: true
        },
        description:{
            type : String,
            default : "productDescription"
        },
        vendor:{
            type:String,
            default : "defaultProductVendor"
        },
        views:{
            type : Number,
            default : 0 
        },
        created:{
            type : Date,
            default : now.now,
        },
        deliveryMethod:{
            type: String,
            default : "delivery"
        },
        quantity:{
            type : Number,
            default : 0
        }
        
    }
)

mongoose.model('cart' , cartSchema);