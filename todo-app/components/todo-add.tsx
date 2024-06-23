"use client";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { addTodo } from "@/action/Todo.action";
import { useState, useTransition } from "react";
 
const formSchema = z.object({
  newTask: z.string().min(1).max(50),
  priority: z.enum(["HIGH", "MEDIUM", "LOW"]),
})

export interface TodoAddProps {
  refreshData: () => void
}

export const TodoAdd = ({ refreshData }:TodoAddProps) => {

  const [isLoading, setIsLoading] = useState(false);
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newTask: "",
      priority: "LOW",
    },
  })
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    const { newTask, priority } = values;
    setIsLoading(true);
    startTransition(() => {
      addTodo(newTask, priority).then(() => {
        refreshData();
        setIsLoading(false);
      });
		})
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-[80%] flex justify-center items-start gap-5 min-h-[7%]">

        {/* NEW TODO INPUT */}
        <FormField
          control={form.control}
          name="newTask"
          render={({ field }) => (
            <FormItem className="min-w-[40%]">
              <FormControl>
                <Input placeholder="Add new todo..." {...field}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* PRIORITY SELECTION */}
        <FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <FormItem className="flex items-center justify-center w-28">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Priority" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-primary">
                  <SelectItem className="text-red-500" value="HIGH">HIGH</SelectItem>
                  <SelectItem className="text-yellow-500" value="MEDIUM">MEDIUM</SelectItem>
                  <SelectItem className="text-green-500" value="LOW">LOW</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
          
        {/* ADD BUTTON */}
        <Button type="submit" disabled={isLoading}>Add</Button>
      </form>
    </Form>
  );
};