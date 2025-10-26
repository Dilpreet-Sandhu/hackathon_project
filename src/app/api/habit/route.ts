import dbConnect from "@/lib/dbConnection";
import { Habit } from "@/models/habit.model";
import { User } from "@/models/user.model";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";
import { endOfDay, startOfDay } from 'date-fns';
import { HabitLog } from "@/models/habitlog.model";


export async function GET() {

    try {

        await dbConnect();

        const kindeUser = await getKindeServerSession().getUser();

        const user = await User.findOne({kindeId : kindeUser?.id});;

        if (!user) {
            return NextResponse.json({
                success : false,
                message : "no user found"
            });
        }

        const habits = await Habit.find({
            userId : user._id
        }).lean();

        const today = new Date();
        const from = startOfDay(today);
        const to = endOfDay(today);

        const todayLogs = await HabitLog.find({
            userId : user._id,
            date : {$gte : from,$lte : to},
            completed : true
        });

        const completedHabits = new Set(todayLogs.map(log => log.habitId.toString()));

        const habitsWithStatus = habits.map(habit => ({
            ...habit,
            completed : completedHabits.has(String(habit._id))
        }));


        return NextResponse.json({
            success : true,
            data : habitsWithStatus
        });

        
    } catch (error) {

        console.log("error while getting all the habits ",error);

        return NextResponse.json({
            success : false,
            message : "couldn't fetch habits"
        });
        
    }

}


export async function POST(req : Request) {

    try {
        await dbConnect();
        const kindeUser = await getKindeServerSession().getUser();

        const user = await User.findOne({kindeId : kindeUser?.id});;

        if (!user) {
            return NextResponse.json({
                success : false,
                message : "no user found"
            });
        }

        const body = await req.json();

        const {title,startDate,endDate,reminder,timeOfDay} = body;

        if ([title,startDate,endDate,reminder,timeOfDay].some(field => !field)) {
            return NextResponse.json({
                success : false,
                message : "all fields are required"
            });
        }

        const newHabit = await Habit.create({
            userId : user._id,
            title,
            start_date : startDate,
            end_date : endDate,
            reminder,
            timeOfDay
        });


        if (!newHabit) {
            return NextResponse.json({
                success : false,
                message : "couldn't create a habit"
            })
        }

        return NextResponse.json({
            success : true,
            message : "habit created successfully"
        });

    }
    catch (error) {
        console.log("error while creating a habit ",error);
    }
}