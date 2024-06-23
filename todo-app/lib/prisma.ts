import { PrismaClient } from '@prisma/client';

var global = globalThis as any;

let prisma : PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma ) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;