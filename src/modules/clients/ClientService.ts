
import ClientSchema from "../../database/Schemas/ClientSchema";
import { HttpException } from "../../shared/errors/HttpException";
import { CreateClientDto } from "./dtos/CreateClientDto";
import { FilterClientDto } from "./dtos/FilterClientDto";

export class ClientService {
    async create(dto: CreateClientDto) {
        const clientExists = await ClientSchema.findOne({ cpf: dto.cpf })

        if (clientExists) {
            throw new HttpException(409,'Client already exists')
        }

        return ClientSchema.create(dto)

    }

    async update(dto: CreateClientDto, id: string) {
        const clientExists = await ClientSchema.findOne({ _id: id })

        if(!clientExists) {
            throw new HttpException(404,"Client doesn't exists")
        }

       return ClientSchema.updateOne({ _id: id }, dto)
       
    }

    async delete(dto: CreateClientDto, id: string) {
        const clientExists = await ClientSchema.findOne({ _id: id })

        if(!clientExists) {
            throw new HttpException(404,"Client doesn't exists")
        }

        return ClientSchema.deleteOne({_id: id})
    }

    async index(dto: FilterClientDto) {
        if (dto.contractSituation) {
            return await ClientSchema.find(dto)
        }

        return await ClientSchema.find()
    }
}