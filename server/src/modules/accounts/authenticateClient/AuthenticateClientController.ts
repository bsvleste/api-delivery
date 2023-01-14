import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";


export class AuthenticateClientController{
    async handle(req:Request,res:Response):Promise<Response>{
        const authenticateClientUseCase = new AuthenticateClientUseCase();
        const{username,password} = req.body;

        const clientAuthenticated = await authenticateClientUseCase.execute({
            username,
            password
        })
        return res.status(201).json(clientAuthenticated)
    }
}