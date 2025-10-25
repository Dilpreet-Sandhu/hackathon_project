import mongoose, { Document, model, models, Schema } from 'mongoose';


interface IHabitLog extends Document {

    userId : mongoose.Schema.Types.ObjectId;
    habitId : mongoose.Schema.Types.ObjectId;
    date : Date;
    completed : boolean;

}

const habitLogSchema = new Schema<IHabitLog>({

    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    habitId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Habit"
    },
    date : {
        type : Date
    },
    completed : {
        type : Boolean,
        required : true
    }

});

export const HabitLog = models.HabitLog || model("HabitLog",habitLogSchema);