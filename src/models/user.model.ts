import { Document, Schema,model, models } from "mongoose";


interface IUser extends Document {

    username : string;
    email : string;
    fcmToken ?: string;
    kindeId : string;
}

const userSchema = new Schema<IUser>({

    username : {
        type : String,
        required : [true,"name is required"]
    },
    email : {
        type : String,
        required : [true,"email is required"]
    },
    fcmToken : {
        type : String
    },
    kindeId : {
        type : String
    }

});


export const User = models.User || model<IUser>("User",userSchema);