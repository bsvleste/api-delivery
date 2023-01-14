import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
    sub:string
}

export async function ensureAuthenticateDeliveryman(req:Request,res:Response, next:NextFunction){

    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({
            message:"Token missing"
        })
    }
    const [,token] = authHeader.split(" ")
    try {
        const{ sub} =  verify(token,'98d7fc1c47596c741f869d874ee37980')as IPayload
        req.idDeliveryman = sub
        return next();
    } catch (error) {
        return res.status(401).json({
            message:"Invalid Token"
        })
    }
}