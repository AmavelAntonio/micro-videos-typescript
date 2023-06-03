import { isAnyArrayBuffer } from "util/types"
import { v4 as uuidV4 } from "uuid";
import UniqueEntityId from "../../shared/domain/unique-entity-id-vo";

export type EntitiesCategories = {
    name: string
    description?: string
    isActive?: boolean 
    created_At?: Date
}


export class Category {

    public readonly id: UniqueEntityId;

    constructor(public readonly props: EntitiesCategories, id?: UniqueEntityId){
        this.id = id || new UniqueEntityId()
        this.props.description = this.props.description ?? null
        this.props.isActive = this.props.isActive ?? true
        this.props.created_At = this.props.created_At ?? new Date()
    }

    get name(): string {
       return this.props.name
    }

    private set description (description: string) {
        this.props.description = description ?? null;
    }

    get description (): string {
        return this.props.description;
    }

    private set isActive (isActive: boolean ) {
        this.props.isActive = isActive ?? null;
    }

    get isActive(): boolean {
        return this.props.isActive;
    }

    get created_At(): Date | undefined {
        return this.props.created_At;
    }
}