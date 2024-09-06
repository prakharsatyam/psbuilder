import { Schema,model } from "mongoose";
const userSchema = new Schema(
    {
        name:String,
        start:{
                type:Date,
                default:Date.now
        },   
        end:{
                type:Date,
                default:Date.now
        },
        duration:{
            type:Number,
            default: function(){
                return Math.round((this.end-this.start)/(1000*60*60))
            }
        },
        slots:{
            type:[String],
            default: [],
            set: function(set){
                return[... new set(slots)];
            }
        },
        isAdmin:{
            type:Boolean,
            required:true,
            default:false
        }
    },{
        timestamps:true
    }
);
export const User =model('user',userSchema)