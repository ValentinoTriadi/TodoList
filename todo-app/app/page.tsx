import { TodoAdd } from "@/components/todo-add";
import { TodoBox } from "@/components/todo-box";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-start gap-4 py-10 bg-gradient-to-br from-background to-background2">
      <h1 className="text-4xl font-bold">TODO LIST APP</h1>
      <TodoAdd />
      <TodoBox />
    </main>
  );
}
