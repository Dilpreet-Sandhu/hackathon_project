
import { CreateNewHabitModel } from "@/components/models/CreateNewHabitModel";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import { IconFolderCode } from "@tabler/icons-react";


export function EmptyBox() {

    return (
        <Empty>
            <EmptyHeader>
                <EmptyMedia variant={"icon"}>
                    <IconFolderCode/>
                </EmptyMedia>
                <EmptyTitle className="text-white">No Habits yet</EmptyTitle>
                <EmptyDescription>
                    You haven&apos;t created any Habits yet. Get started by creating
                    your first Habit.
                </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
                <div className="flex">
                    <CreateNewHabitModel>
                        <button className="px-5 py-2.5 text-[14px] font-medium bg-white text-black rounded-md">
                            Create New Habit
                        </button>
                    </CreateNewHabitModel>
                </div>
            </EmptyContent>
        </Empty>
    )

}