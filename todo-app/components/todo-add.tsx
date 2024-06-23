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
 
const formSchema = z.object({
  newTask: z.string().min(1).max(50),
  priority: z.enum(["HIGH", "MEDIUM", "LOW"]),
})

export const TodoAdd = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newTask: "",
      priority: "LOW",
    },
  })
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-[80%] flex justify-center items-center gap-5">
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
        <Button type="submit">Add</Button>
      </form>
    </Form>
  );
};