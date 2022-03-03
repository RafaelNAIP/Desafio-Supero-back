import { NextFunction, Request, Response } from "express";
import { HttpException } from "./HttpException";

export class ExecptionListener {
    catch(error: Error, request: Request, response: Response, next: NextFunction) {
        if(error instanceof HttpException) {
            return response.status(error.statusCode).json({ error: error.response })
        }

        return response.status(500).json("Internal server error")
    }
}