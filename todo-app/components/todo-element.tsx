import { useState } from "react"
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import { Separator } from "./ui/separator"
import { cn } from "@/lib/utils"

export enum Priority {
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW"
}

export interface TodoItem {
  id: number
  title: string
  completed: boolean
  priority: Priority
}

export interface TodoElementProps {
  item: TodoItem
  index: number
}

export const TodoElement = ({item, index} : TodoElementProps) => {
  const { id, title, completed, priority } = item;
  const [checked, setChecked] = useState(completed);
  const priorityColor = priority === Priority.HIGH ? "text-red-500" : priority === Priority.MEDIUM ? "text-yellow-500" : "text-green-500";
  const strikeThrough = checked ? "line-through opacity-25" : "none";

  const checkHandler = () => {
    console.log("clicked");
    setChecked(!checked);
    console.log(checked);
    strikeThrough === "line-through opacity-25" ? "none" : "line-through opacity-25";
  }

  const deleteHandler = () => {
    console.log("deleted");
  }

  return (
    <div className="w-full">
      {index != 0 && <Separator className="my-2"/>}
      <div className="flex items-center justify-between w-full h-fit min-h-12">
        <div className="flex items-center justify-start gap-5">
          <Checkbox defaultChecked={checked} onChange={checkHandler} onClick={checkHandler}/>
          <p className={cn(priorityColor, strikeThrough)}>{title}</p>
        </div>
        <div className="flex items-center justify-end gap-5">
          <Button onClick={deleteHandler} className="hover:text-destructive">DELETE</Button>
        </div>
      </div>
    </div>
  )
}