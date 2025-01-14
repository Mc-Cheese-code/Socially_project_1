import { PrismaClient } from "@prisma/client";

const prismaClinetSingleton = () =>{
    return new PrismaClient();
}

declare const globalThis: {
    prismaGlobal: ReturnType<typeof prismaClinetSingleton>
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClinetSingleton()

export default prisma;

if(process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma