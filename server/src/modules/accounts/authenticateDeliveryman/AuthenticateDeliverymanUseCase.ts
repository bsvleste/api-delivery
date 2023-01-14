import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import { prisma } from "../../../database/prismaClient"

interface IAutheticateDeliveryman{
    username:string
    password:string
}

export class AuthenticateDeliverymanUseCase{
    async execute({username,password}:IAutheticateDeliveryman){

        //verificar se username esta cadastrado
        const deliveryman= await prisma.deliveryman.findFirst({
            where:{
                username
            }
        })
        if(!deliveryman){
            throw new Error("username or password invalid!")
        }
        //verificar se a senha corresponde ao username
        const passwordMatch = await compare(password,deliveryman.password)
        if(!passwordMatch){
            throw new Error("username or password invalid!")
        }
        //gerar o token
        const token = sign({
            username,
        },"98d7fc1c47596c741f869d874ee37980",{
            subject:deliveryman.id,
            expiresIn:"1d"
        })
        return token
        
    }
}