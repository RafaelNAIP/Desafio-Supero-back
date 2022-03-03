import { Router } from "express"
import { ClientController } from "./modules/clients/ClientController"
import { CreateClientDto } from "./modules/clients/dtos/CreateClientDto"
import { ClientService } from "./modules/clients/ClientService"
import { PayloadValidatorMiddlewareFactory } from "./shared/PayloadValidatorMiddlewareFactory"
import { QueryValidatorMiddlewareFactory } from "./shared/QueryValidatorMiddlewareFactory"
import { FilterClientDto } from "./modules/clients/dtos/FilterClientDto"

const routes = Router()

const createClientController = new ClientController(new ClientService)

const payloadFactory = new PayloadValidatorMiddlewareFactory()
const queryFactory = new QueryValidatorMiddlewareFactory()
const validator = payloadFactory.create(new CreateClientDto())
const queryValidator = queryFactory.create(new FilterClientDto())

routes.post('/clients', validator.execute.bind(validator) ,createClientController.create.bind(createClientController))
routes.put('/clients/:id', createClientController.update.bind(createClientController))
routes.delete('/clients/:id', createClientController.delete.bind(createClientController))
routes.get('/clients', queryValidator.execute.bind(queryValidator) ,createClientController.index.bind(createClientController))


export {routes}