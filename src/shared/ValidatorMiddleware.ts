import { NextFunction, Request, Response } from "express";
import { HttpException } from "./errors/HttpException";
import { RequestValidator } from "./RequestValidator";


export class ValidatorMiddleware {
    constructor(private validator: RequestValidator) {

    }

    async execute(request: Request, response: Response, next: NextFunction) {
        try{
            await this.validator.validate(request)
            return next()
        } catch(error) {
            if(error instanceof HttpException){
                return response.status(error.statusCode).json({ error: error.response })
            }
            return response.status(500).json('unknow error')
        }
    }
}