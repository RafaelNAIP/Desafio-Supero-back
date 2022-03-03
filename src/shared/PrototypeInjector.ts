export class PrototypeInjector {
    constructor(private prototype: Object){

    }

    public inject(object: Object){
        return Object.setPrototypeOf(object, this.prototype)
    }
}