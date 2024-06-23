'use client';

import { deleteTodo } from "@/action/Todo.action";
import { TodoElement, TodoElementProps, TodoItem } from "./todo-element";
import { ScrollArea } from "./ui/scroll-area";
import { useState, useTransition } from "react";

export interface TodoBoxProps {
  data: TodoItem[]
  refreshData: () => void
}

export const TodoBox = ({data, refreshData} : TodoBoxProps) => {

  /*
    Create a Delete Button Loading Handler
    purpose: to handle the loading state of the delete button and to limir the number of delete to 1 at a time
  */
  const [isLoading, setIsLoading] = useState(false);
  const [isPending, startTransition] = useTransition();
  const deleteHandler = async (id:number) => {
    setIsLoading(true);
    startTransition(() => {
      deleteTodo(id).then(() => {
        refreshData();
        setIsLoading(false);
      });
		})
  }

  return (
    <div className="w-full h-[85%] flex flex-col items-center justify-start pt-5">
      <div className="flex flex-col items-center justify-center w-[80%] h-fit max-h-full bg-card rounded-lg border border-border p-2">
        <ScrollArea className="w-full">
          <div className="flex flex-col items-center justify-center w-full h-full px-5">
            {data.length === 0 && <p className="text-lg text-center">No Todos Found!</p>}
            {data.map((item, index) => {
              const todoItem : TodoElementProps = {
                item: item,
                index: index,
                refreshData: refreshData,
                deleteHandler: deleteHandler,
                isLoading: isLoading
              }
              return (
                <TodoElement {...todoItem} key={index}/>
            )})}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};