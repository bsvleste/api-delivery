import {prisma} from '../../../../database/prismaClient'
import {hash}from 'bcrypt'
interface ICreateClient{
    username:string
    password:string
}

export class CreateClientUseCase{

    async execute({username,password}:ICreateClient){

        //Validar se o usuario existe
        const clientExist = await prisma.clients.findFirst({
            where:{
                username:{
                    equals:username,
        //so funciona com postgres mode:'insensitive'
                }
                
            }
        })

        if(clientExist){
            throw new Error("Client already exists")
        }
        //criptografar o password
        const passwordHash = await hash(password,8)
        //Salvar o client
        const client = await prisma.clients.create({
            data:{
                username,
                password:passwordHash
            }
        })
        return client
    }
}