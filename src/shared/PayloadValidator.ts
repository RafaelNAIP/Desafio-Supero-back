import { PrototypeInjector } from "./PrototypeInjector";
import { RequestValidator } from "./RequestValidator";
import { validate } from 'class-validator'
import { Request } from "express";
import { BadRequestExecption } from "./errors/BadRequestException";

export class PayloadValidator implements RequestValidator {
    constructor(private prototypeInjector: PrototypeInjector){
        
    }
    public async validate(request: Request): Promise<void> {
        const errors = await validate(this.prototypeInjector.inject(request.body ?? {}))

        if(errors.length > 0){
            throw new BadRequestExecption(errors)
        }

        return 
    }
}