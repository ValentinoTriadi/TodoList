import { useEffect, useState, useTransition } from "react"
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import { Separator } from "./ui/separator"
import { cn } from "@/lib/utils"
import { Priority } from "@prisma/client"
import { deleteTodo, updateCompleted } from "@/action/Todo.action"


export interface TodoItem {
  id: number
  title: string
  completed: boolean
  priority: Priority
}

export interface TodoElementProps {
  item: TodoItem
  index: number
  refreshData: () => void
  deleteHandler: (id: number) => void
  isLoading: boolean
}

export const TodoElement = ({item, index, refreshData, deleteHandler, isLoading} : TodoElementProps) => {
  const { id, title, completed, priority } = item; // Destructure the item object
  
  // State
  const [checked, setChecked] = useState(completed);
  const priorityColor = priority === Priority.HIGH ? "text-red-500" : priority === Priority.MEDIUM ? "text-yellow-500" : "text-green-500";
  const strikeThrough = checked ? "line-through opacity-25" : "none";

  // Update the checked state
  useEffect(() => {
    setChecked(completed);
  }, [completed])

  // Check Handler
  const checkHandler = () => {
    setChecked(!checked);
    strikeThrough === "line-through opacity-25" ? "none" : "line-through opacity-25";
    updateCompleted(id, !checked); // Update Database
  } 

  return (
    <div className="w-full">
      {index != 0 && <Separator className="my-2"/>}
      <div className="flex items-center justify-between w-full h-fit min-h-12">
        <div className="flex items-center justify-start gap-5">
          <Checkbox checked={checked} onClick={checkHandler}/>
          <p className={cn(priorityColor, strikeThrough)}>{title}</p>
        </div>
        <div className="flex items-center justify-end gap-5">
          <Button onClick={() => deleteHandler(id)} className="hover:text-destructive" disabled={isLoading}>DELETE</Button>
        </div>
      </div>
    </div>
  )
}