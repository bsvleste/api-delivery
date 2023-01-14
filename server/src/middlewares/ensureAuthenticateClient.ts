import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
    sub:string
}

export async function ensureAuthenticateClient(req:Request,res:Response, next:NextFunction){

    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({
            message:"Token missing"
        })
    }
    const [,token] = authHeader.split(" ")
    try {
        const{ sub} =  verify(token,'d66722eaf305568c8dfca60a7c8939c9')as IPayload
        req.idClient = sub
        return next();
    } catch (error) {
        return res.status(401).json({
            message:"Invalid Token"
        })
    }
}