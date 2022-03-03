import { PayloadValidator } from "./PayloadValidator";
import { PrototypeInjector } from "./PrototypeInjector";
import { ValidatorMiddleware } from "./ValidatorMiddleware";

export class PayloadValidatorMiddlewareFactory {
    create(dto: Object) {
        return new ValidatorMiddleware(new PayloadValidator(new PrototypeInjector(dto)))

    }
}

