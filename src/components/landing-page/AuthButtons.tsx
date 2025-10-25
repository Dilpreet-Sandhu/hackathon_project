

import { LoginLink, RegisterLink, } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "../Button/Button";
import { getKindeServerSession, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";

const AuthButtons = async () => {

    const user = await getKindeServerSession().getUser();

    
    

  return (
    <div className="flex gap-4">
       
       {
        user == null ? <Buttons/> : (
          <LogoutLink>
            <Button className="cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5 duration-500">
              <p className="text-[15px] font-medium">Logout</p>
            </Button>
  
          </LogoutLink>
        )
       }
      
    </div>
  );
};


const Buttons = () => {
  return (
    <>
    <LoginLink>
        <Button className="cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5 duration-500">
          <p className="text-[15px] font-medium">Login</p>
        </Button>
      </LoginLink>
      <RegisterLink>
        <Button className="cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5 duration-500">
          <p className="text-[15px] font-medium">Register</p>
        </Button>
      </RegisterLink>
    </>
  )

}

export default AuthButtons;
