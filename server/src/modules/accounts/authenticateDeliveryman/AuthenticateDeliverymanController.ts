import { Request, Response } from "express";
import { AuthenticateDeliverymanUseCase } from "./AuthenticateDeliverymanUseCase";


export class AuthenticateDeliverymanController{
    async handle(req:Request,res:Response):Promise<Response>{
        const authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase();
        const{username,password} = req.body;

        const deliverymanAuthenticated = await authenticateDeliverymanUseCase.execute({
            username,
            password
        })
        return res.status(201).json(deliverymanAuthenticated)
    }
}