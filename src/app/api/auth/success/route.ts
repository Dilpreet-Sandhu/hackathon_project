import routes, { baseUrl } from "@/config/routes";
import dbConnect from "@/lib/dbConnection";
import { User } from "@/models/user.model";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {

    try {

        await dbConnect();

        const {getUser} =  getKindeServerSession();

        const user = await getUser();

        if (!user || !user.id) {
            return NextResponse.json({message : "user not found"},{status : 500});
        }

        console.log(user);

        const dbUser = await User.findOne({kindeId : user.id});

        if (!dbUser) {

            const username = user.given_name + "" + + (user.family_name || "") + "";

            await User.create({
                username,
                email : user.email,
                kindeId : user.id
            });

        }


        return NextResponse.redirect(`${baseUrl}${routes.dashboard}`);

        
    } catch (error) {
        console.log("error while logging in: ",error);
        return NextResponse.error();
        
    }

}