import { Request, Response } from "express";
import { UpdateDeliverymanUseCase } from "./UpdateDeliverymanUseCase";

export class UpdateDeliverymanController{

    async handle(req:Request,res:Response):Promise<Response>{

        const {id} = req.params;
        const{idDeliveryman} = req;

        const updateDeliverymanUseCase = new UpdateDeliverymanUseCase();

        const updateDelivery = updateDeliverymanUseCase.execute({
            id,
            idDeliveryman
        })
        return res.status(201).json(updateDelivery)

    }
}