import { prisma } from "../../../../database/prismaClient";

interface IUpdateDeliveryman{
    idDeliveryman:string;
    id:string
}


export class UpdateDeliverymanUseCase{
    async execute({id,idDeliveryman}:IUpdateDeliveryman){
        const deliverie = await prisma.deliveries.update({
            where:{
                id
            },
            data:{
                idDeliveryman
            }
        })
        return deliverie
    }
}