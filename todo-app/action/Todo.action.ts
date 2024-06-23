'use server';

import prisma from "@/lib/prisma";
import { Priority } from "@prisma/client";

// Add new todo
export const addTodo = async (title: string, priority: Priority) => {
    return await prisma.todo.create({
        data: {
            title,
            priority,
            completed: false
        }
    });
}

// Update the completed status of a todo item
export const updateCompleted = async (id: number, completed: boolean) => {
    return await prisma.todo.update({
        where: {
            id
        },
        data: {
            completed
        }
    });
}

// Delete a todo item
export const deleteTodo = async (id: number) => {
    return await prisma.todo.delete({
        where: {
            id
        }
    });
}