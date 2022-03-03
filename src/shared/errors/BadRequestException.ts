import { HttpException } from "./HttpException";

export class BadRequestExecption extends HttpException {
    constructor(response: any){
        super(400, response)
    }
}