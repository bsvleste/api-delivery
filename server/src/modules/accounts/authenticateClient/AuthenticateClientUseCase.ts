import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import { prisma } from "../../../database/prismaClient"

interface IAutheticateClient{
    username:string
    password:string
}

export class AuthenticateClientUseCase{
    async execute({username,password}:IAutheticateClient){

        //verificar se username esta cadastrado
        const client = await prisma.clients.findFirst({
            where:{
                username
            }
        })
        if(!client){
            throw new Error("username or password invalid!")
        }
        //verificar se a senha corresponde ao username
        const passwordMatch = await compare(password,client.password)
        if(!passwordMatch){
            throw new Error("username or password invalid!")
        }
        //gerar o token
        const token = sign({
            username
        },"d66722eaf305568c8dfca60a7c8939c9",{
            subject:client.id,
            expiresIn:"1d"
        })
        return token
        
    }
}