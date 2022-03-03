export class HttpException extends Error {
    constructor(public statusCode: number, public response: any) {
        super(response)
        
    }
}