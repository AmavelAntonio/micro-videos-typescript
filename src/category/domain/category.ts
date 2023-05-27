import { isAnyArrayBuffer } from "util/types"

type EntitiesCategory = {
    name: string
    description?: string
    isActive?: boolean 
    created_At?: Date
}


export class Category {
    constructor(public readonly props: EntitiesCategory){}

    get name(): string {
       return this.props.name
    }

    set name(name: string) {
        this.props.name = name
    }

    set description (description: string | undefined) {
        this.props.description = description;
    }

    get description (): string | undefined {
        return this.props.description;
    }

    set isActive (isActive: boolean | undefined) {
        this.props.isActive = isActive;
    }

    get isActive(): boolean | undefined {
        return this.props.isActive;
    }

    set created_At(createdAt: Date | undefined ) {
        this.props.created_At = createdAt;
    }

    get created_At(): Date | undefined {
        return this.props.created_At;
    }
}