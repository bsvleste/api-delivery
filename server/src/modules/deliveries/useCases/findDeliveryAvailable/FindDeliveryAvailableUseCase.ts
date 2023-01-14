import { prisma } from "../../../../database/prismaClient";


export class FindDeliveryAvailableUseCase{
    async execute(){
        const deliveriesWithoutEndDate = await prisma.deliveries.findMany({
            where:{
                endAt:null,
                idDeliveryman:null
            }
        })
        return deliveriesWithoutEndDate
    }
}