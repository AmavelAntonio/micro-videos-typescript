import { v4 as uuidV4, validate as uuidValid } from "uuid";
import InvalidUuidError from "../../@seedwork/errors/invalid-uuid.error";

export default class UniqueEntityId {

    constructor(public readonly id?: string) {
        this.id = id || uuidV4()
        this.Validate();
    }

    private Validate () {
        const validUuid = uuidValid(this.id);

        if(!validUuid) {
             throw new InvalidUuidError();
        }
    }
}