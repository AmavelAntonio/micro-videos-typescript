import exp from "constants";
import { Category, EntitiesCategories } from "./category";
import { omit } from "lodash"
import {v4 as uuidV4, validate as uuidV4Validade} from "uuid";
import UniqueEntityId from "@seedwork/domain/unique-entity-id-vo";

type PropsCategories = {
    props: EntitiesCategories
    id?: UniqueEntityId
}


describe("Unity test of category", () => {
    

    test("Should be test if id ins't null", () => {
        const category = new Category({name: "Buca"}, new UniqueEntityId)

        const data: PropsCategories [] = [
            { props: { name: "Paulo"}, id: null },
            { props: { name: "Sola"}, id: undefined},
            { props: { name: "AGHghbed" }, id: new UniqueEntityId()}
        ]

        data.forEach((i) => {
            const category = new Category({name: i.props.name }, i.id as any);
            expect(category.id).not.toBeNull();
            expect(category.id).toBeTruthy();
            expect(category.id).toBeInstanceOf(UniqueEntityId)
        })

        expect(category.id).not.toBeNull()
    })

    test("Should be true entities category", () => {
        const created_At = new Date()

    
        let category = new Category({
            name: "Paulo"
        })
        const props = omit(category.props, "created_At");
        console.log(category)

        expect(props).toStrictEqual({
            name: "Paulo",
            description: null,
            isActive: true,
        })

        expect(category.props.created_At).toBeInstanceOf(Date)

         category = new Category({
            name: "João",
            description: "movie",
            isActive: false,
            created_At
         })

         expect(category.props).toMatchObject({
            name: "João",
            description: "movie",
            isActive: false,
            created_At 
         })

         category = new Category({
            name: "Paulo Sergio",
            description: "Sound",
            created_At
         })

         const props2 = omit(category.props, "isActive")

         expect(props2).toMatchObject({
            name: "Paulo Sergio",
            description: "Sound",
            created_At
          })
    }),
    
    test("Should test getters and setter description", () => {
        let props = new Category({name: "Nicolau"})

        props['description'] = "Something like this";

        expect(props).toMatchObject({
            name: "Nicolau",
            description: "Something like this"
        })

    }),

    test("Should test isActive getter and setter", () => {
        let props = new Category({name: "Agnaldo"});

        props['isActive'] = true;

        expect(props.isActive).toBe(true)
    })

    test("Should be test createdAt getter", () => {
        
        let props = new Category({name: "Paulo"})

        expect(props.created_At).toBeInstanceOf(Date)

    })

})