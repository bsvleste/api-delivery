import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";


export class CreateClientController {

    async handle(req:Request,res:Response):Promise<Response>{
        const createClientUseCase = new CreateClientUseCase();
        const {password,username} = req.body;

        const result = await createClientUseCase.execute({
            username,
            password

        })
        return res.status(201).json(result)
    }
}