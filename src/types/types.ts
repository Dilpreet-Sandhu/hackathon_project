import { IHabit } from "@/models/habit.model";


export type ApiResponse = {
    success : boolean,
    message ?: string,
    data : unknown | unknown[]
};