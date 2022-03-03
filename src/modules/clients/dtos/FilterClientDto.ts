import { IsEnum, IsOptional, IsString } from "class-validator";
import { Request } from "express";

export class FilterClientDto {
    @IsOptional()
    @IsString()
    @IsEnum(["Em Atraso", "Dentro do Prazo", "Pago"])
    contractSituation: string

    static fromRequest(request: Request) {
        const instance = new FilterClientDto()

        instance.contractSituation = request.query.contractSituation as string

        return instance
    }
}