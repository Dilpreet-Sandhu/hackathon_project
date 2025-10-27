import dbConnect from "@/lib/dbConnection";
import { HabitLog } from "@/models/habitlog.model";
import { User } from "@/models/user.model";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";



export async function POST(req : Request) {

    try {
        await dbConnect();

        const user = await getKindeServerSession().getUser();

        const dbUser = await User.findOne({kindeId : user?.id});

        if (!dbUser) {
            return NextResponse.json({
                success : false,
            });
        }

        const body = await req.json();

       const {habitId} = body;

       if (!habitId) {
        return NextResponse.json({
            success : false,
            message : "habitId is required"
        },{status : 400})
       }
        
       const habitLog = await HabitLog.create({
            userId : dbUser._id,
            habitId : habitId,
            date : new Date(),
            completed : true
       });

       if (!habitLog) {
            return NextResponse.json({
                success : false,
                message : "couldn't complete the habit"
            },{status : 500});
       }

       return NextResponse.json({
        success : true,
        message : "habit completed successfully"
       })
        
    } catch (error) {
        console.log("error while completiing a habit: ",error);

        return NextResponse.json({
            success : false,
            message : "couldn't complete a habit",

        })
    }


}