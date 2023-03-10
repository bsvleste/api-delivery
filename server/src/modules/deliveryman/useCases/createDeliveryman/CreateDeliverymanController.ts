import { Request, Response } from "express";
import { CreateDeliverymanUseCase } from "./CreateDeliverymanUseCase";


export class CreateDeliverymanController{

    async handle(req:Request,res:Response):Promise<Response>{
        const createDeliverymanUseCase = new CreateDeliverymanUseCase();
        const {password,username} = req.body;

        const result = await createDeliverymanUseCase.execute({
            username,
            password

        })
        return res.status(201).json(result)
    }
}