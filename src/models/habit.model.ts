import mongoose,{ Document, model, models, Schema } from "mongoose";


export interface IHabit extends Document { 

    title : string;
    userId : mongoose.Schema.Types.ObjectId,
    start_date : Date,
    end_date ?: Date ;
    reminder : string,
    timeOfDay : string,
};

const habitSchema = new Schema<IHabit>({

    title : {
        type : String,
        required : [true, "title is required"]
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    start_date : {
        type : Date
    },
    end_date : {
        type : Date
    },
    timeOfDay : {
        type : String
    },
    reminder : {
        type :String
    }
});


export const Habit = models.Habit || model("Habit",habitSchema);
