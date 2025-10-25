import mongoose, { Document, model, models, Schema } from "mongoose";


interface IJournal extends Document {

    date : Date,
    userId : mongoose.Schema.Types.ObjectId,
    text : string

}

const journalSchema = new Schema<IJournal>({

    date : {
        type : Date
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    text : {
        type : String,
       
    }

});

export const Journal = models.Journal || model("Journal",journalSchema);