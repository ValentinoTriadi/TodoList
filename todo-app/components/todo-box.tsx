'use client';

import { TodoAdd } from "./todo-add";
import { Priority, TodoElement, TodoElementProps, TodoItem } from "./todo-element";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

export const TodoBox = () => {

  const dummy : TodoItem[] = [
    {
      id: 1,
      title: "Create a Button component",
      completed: false,
      priority: Priority.HIGH
    },
    {
      id: 2,
      title: "Create a Checkbox component",
      completed: false,
      priority: Priority.MEDIUM
    },
    {
      id: 3,
      title: "Create a AddTodo component",
      completed: false,
      priority: Priority.LOW
    },
    {
      id: 4,
      title: "Create a DeleteTodo component",
      completed: false,
      priority: Priority.HIGH
    },
    {
      id: 5,
      title: "Create a EditTodo component",
      completed: false,
      priority: Priority.MEDIUM
    },
    {
      id: 6,
      title: "Create a FilterTodo component",
      completed: false,
      priority: Priority.LOW
    }
  ]

  function handleCheckBoxClick(item: any) {
    console.log("clicked");
  }

  return (
    <div className="w-full h-[85%] flex flex-col items-center justify-start pt-5">
      <div className="flex flex-col items-center justify-center w-[80%] h-fit max-h-full bg-card rounded-lg border border-border p-2">
        {/* <h1 className="text-2xl font-semibold my-2 text-accent">TODO BOX</h1> */}
        <ScrollArea className="w-full">
          <div className="flex flex-col items-center justify-center w-full h-full px-5">
            {dummy.map((item, index) => {
              const todoItem : TodoElementProps = {
                item: item,
                index: index
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