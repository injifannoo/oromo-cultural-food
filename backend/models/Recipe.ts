import mongoose from "mongoose";

const RecipeSchema=new mongoose.Schema({
  title:{type:String,
    required:true
  },
  description:{type:String,
    required:true
  },
  region:{type:String,
    required:true
  },
  imageUrl:{type:String,
    required:true
  },
  points:{type:Number,
    default:0
  }

});

export default mongoose.model("Recipe",RecipeSchema);