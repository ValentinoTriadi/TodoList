"use client";

import { TodoAdd } from "@/components/todo-add";
import { TodoBox } from "@/components/todo-box";
import { TodoItem } from "@/components/todo-element";
import { getTodoList } from "@/data/Todo.data";
import { useEffect, useState } from "react";

export default function Home() {

  // Contain todo list
  const [data, setData] = useState<TodoItem[]>([]);

  // Function to fetch data from database
  async function fetchData() {
    const res = await getTodoList();
    setData(res);
  }

  // Refresh Data
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="flex h-screen flex-col items-center justify-start py-10 bg-gradient-to-br from-background to-background2">
      <h1 className="text-4xl font-bold pb-[2%]">TODO LIST APP</h1>
      <TodoAdd refreshData={fetchData}/>
      <TodoBox data={data} refreshData={fetchData}/>
    </main>
  );
}
