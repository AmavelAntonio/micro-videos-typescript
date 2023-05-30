import InvalidUuidError from "@seedwork/errors/invalid-uuid.error";
import { v4 as uuidV4, validate as uuidValid} from "uuid";


export default class UniqueEntityId {
    constructor(public readonly id?: string) {
        this.id = id || uuidV4();
        this.validate()
    }

    private validate() {
        const isValid = uuidValid(this.id);

        if(!isValid) {
            throw new InvalidUuidError()
        }
    }
}