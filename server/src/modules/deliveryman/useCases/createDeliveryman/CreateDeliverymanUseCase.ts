import { hash } from "bcrypt"
import { prisma } from "../../../../database/prismaClient"

interface ICreateDeliveryman{
    username:string
    password:string
}

export class CreateDeliverymanUseCase{
    async execute ({username,password}:ICreateDeliveryman){
        //Validar se o usuario existe
        const delivermanAlreadExist = await prisma.deliveryman.findFirst({
            where:{
                username:{
                    equals:username,
        //so funciona com postgres mode:'insensitive'
                }
                
            }
        })

        if(delivermanAlreadExist){
            throw new Error("Deliveryman already exists")
        }
        //criptografar o password
        const passwordHash = await hash(password,8)
        //Salvar o client
        const deliveryman = await prisma.deliveryman.create({
            data:{
                username,
                password:passwordHash
            }
        })
        return deliveryman
    }
}