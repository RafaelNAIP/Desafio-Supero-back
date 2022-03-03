import { Request } from "express";

export interface RequestValidator {
    validate(request: Request): Promise<void> | void 
}