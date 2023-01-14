import { Request, Response } from "express";
import { FindDeliveryAvailableUseCase } from "./FindDeliveryAvailableUseCase";

export class FindDeliveryAvailableController{
 
    async handle(req:Request,res:Response):Promise<Response>{
        const findDeliveryAvailableUseCase = new FindDeliveryAvailableUseCase();
        const deliveries = await findDeliveryAvailableUseCase.execute()

        return res.status(201).json(deliveries)
    }
}