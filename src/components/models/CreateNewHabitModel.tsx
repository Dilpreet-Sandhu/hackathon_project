"use client";
import { ReactNode, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../Button/Button";
import InputWithLabel from "../extra/InputWithLabel";
import OptionInput from "../extra/OptionInput";
import { useCreateHabitMutation } from "@/redux/slices/apiSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addUncompletedHabit } from "@/redux/slices/habitslice";
import { Habit } from "@/types/types";

export const CreateNewHabitModel = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="min-w-32 bg-[#1a1a1a] border border-white/10 text-white/70">
        <DialogTitle>Create New Habit</DialogTitle>
        <CreateNewHabitForm />
      </DialogContent>
    </Dialog>
  );
};

const CreateNewHabitForm = () => {

  const [create] = useCreateHabitMutation();
  const dispatch = useDispatch();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const startDate = new Date(formData.get("startDate") as string );
    const endDate  = new Date(formData.get("endDate") as string );  

    const data = {
      title: formData.get("title") as string,
      startDate ,
      endDate ,
      reminder: formData.get("reminder") as string,
      timeOfDay: formData.get("timeOfDay") as string,
    };

    try {

      const toastId = toast.loading("Create new Habit...");

      const res = await create(data);



      if (res?.data?.success) {
        const reduxHabit : Habit = {
          _id : (res?.data?.data as Habit)._id,
          title : (res?.data?.data as Habit).title,
          completed : false
        };
        dispatch(addUncompletedHabit(reduxHabit));
        toast.success("Habit created successfully!",{id : toastId});
      }

      
    } catch (error) {
      console.log("error while creating new habit ", error);
    }
    
  }

  return (
    <form onSubmit={handleSubmit}>
        
        <InputWithLabel pname="title" label="Habit Title" type="text" placeholder="Enter habit title"/>
        <InputWithLabel pname="startDate" label="Enter start Date" type="date"/>
        <InputWithLabel pname="endDate" label="Enter End Date" type="date"/>
        <InputWithLabel pname="reminder" label="reminder" defaultValue={"09:00"} type="time"/>
        <OptionInput/>

      <DialogFooter>
        <DialogClose asChild>
          <Button className="bg-transparent border border-white/10 text-[10px] py-2 px-3 text-white">
            Cancel
          </Button>
        </DialogClose>
        <DialogClose asChild>
        <Button
          type="submit"
          className="bg-zinc-900 text-[10px] py-2 border border-white/40 px-4 text-white"
        >
          Create
        </Button>
        </DialogClose>
      </DialogFooter>
    </form>
  );
};
