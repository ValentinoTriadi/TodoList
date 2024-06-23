"use server";

import prisma from "@/lib/prisma"

// Get all the todo items
export const getTodoList = async () => {
    return await prisma.todo.findMany({
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