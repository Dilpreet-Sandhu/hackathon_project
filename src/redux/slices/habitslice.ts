import { Habit } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";




interface HabitState {

    completedHabits : Habit[];
    unCompletedHabits : Habit[];

}

const initialState : HabitState = {
    completedHabits :[],
    unCompletedHabits : []
}


const  habitSlice = createSlice({
        name : "habit",
        reducerPath : "habit",
        initialState,
        reducers : {
            setCompletedHabits(state,action) {
                state.completedHabits = action.payload;
            },
            setUncompletedHabits(state,action) {   
                state.unCompletedHabits = action.payload;
            },
            addCompletedHabit(state,action : {type : string,payload : Habit}) {
                const data = {
                    ...action.payload,
                    completed : true
                }
                state.completedHabits.push(data);     
            },
            addUncompletedHabit(state,action : {type : string,payload : Habit}) {
                state.unCompletedHabits.push(action.payload)
            },
            removeUncompletedHabit(state,action : {type : string,payload : string}) {
                state.unCompletedHabits = state.unCompletedHabits.filter(habit => habit._id !== action.payload);
            }
            
        }
        
});


export const {setCompletedHabits,setUncompletedHabits,addCompletedHabit,addUncompletedHabit,removeUncompletedHabit} = habitSlice.actions;
export default habitSlice;