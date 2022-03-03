import { PayloadValidator } from "./PayloadValidator";
import { PrototypeInjector } from "./PrototypeInjector";
import { QueryValidator } from "./QueryValidator";
import { ValidatorMiddleware } from "./ValidatorMiddleware";

export class QueryValidatorMiddlewareFactory {
    create(dto: Object) {
        return new ValidatorMiddleware(new QueryValidator(new PrototypeInjector(dto)))

    }
}

