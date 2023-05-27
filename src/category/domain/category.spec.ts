import { Category } from "./category";


describe("Unity test of category", () => {
    test("Should be true entities category", () => {
        const created_At = new Date()

        const cat: Category = new Category(
            {
                name: "Paulo",
                description: "Same description",
                isActive: true,
                created_At
            });

        expect(cat.props).toStrictEqual(
            {
                name: "Paulo",
                description: "Same description",
                isActive: true,
                created_At
            }
        )
    })
})