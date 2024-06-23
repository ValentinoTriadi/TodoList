"use server";

import { db } from "@/lib/prisma"

// Get all the todo items
export const getTodoList = async () => {
    return await db.todo.findMany({
        orderBy: [
            {
                priority: "desc"
            },
            {
                completed: "asc"
            },
            {
                title: "desc"
            }
        ]
    });
}