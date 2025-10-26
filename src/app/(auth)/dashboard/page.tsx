import AddNewButton from "@/components/Button/AddNewButton"
import RenderHabits from "@/components/dashboard/main/RenderHabits";



const Dashboard = () => {


  // if (true) {
  //   return (
  //     <div className="w-full h-full flex items-center justify-center">
  //       <EmptyBox/>
  //     </div>
  //   )
  // }

  return (
    <div className="w-full h-full">

      <RenderHabits/>

      <AddNewButton/>
       
    </div>
  )
}

export default Dashboard
