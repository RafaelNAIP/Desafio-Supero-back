import Client from "../../database/Schemas/ClientSchema";
import { Request, Response } from 'express'
import { ClientService } from "./ClientService";
import { FilterClientDto } from "./dtos/FilterClientDto";

export class ClientController {
    private readonly clientService: ClientService

    constructor(clientService: ClientService) {
        this.clientService = clientService
    }

    public async create(request: Request, response: Response) {

        const client = await this.clientService.create(request.body)
        return response.json(client)
    }

    public async update(request: Request, response: Response) {

        const client = await this.clientService.update(request.body, request.params.id)
        return response.json(client)
    }

    public async delete(request: Request, response: Response) {

        const client = await this.clientService.delete(request.body, request.params.id)
        return response.json(client)
    }

    public async index(request: Request, response: Response) {
        const client = await this.clientService.index(FilterClientDto.fromRequest(request))
        return response.json(client)

    }
}
