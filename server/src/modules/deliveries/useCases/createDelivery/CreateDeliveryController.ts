import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";


export class CreateDeliveryController{
    async handle(req:Request,res:Response):Promise<Response>{
        const createDeliveryUseCase  = new CreateDeliveryUseCase()
        const{itemName} = req.body
        const {idClient} = req;
        
        const delivery = await createDeliveryUseCase.execute({
            itemName,
            idClient

        })
        return res.status(201).json(delivery)
    }
}