import { IsDate, IsDateString, IsEnum, IsNumber, IsString } from "class-validator"

export class CreateClientDto {
    @IsString()
    name: string

    @IsString()
    cpf: string

    @IsString()
    celphone: string

    @IsNumber()
    contractNumber: number

    @IsDateString()
    contractDate: Date

    @IsNumber()
    contractValue: number

    @IsString()
    @IsEnum(["Em Atraso", "Dentro do Prazo", "Pago"])
    contractSituation: string

    @IsString()
    @IsEnum([ "Agradecer Pagamento", "Cobrar", "Cancelar Contrato"])
    action: string
}