import UniqueEntityId from "./uniqueentity.vo";
import invalidUidError from "../errors/invalid-uuid.error"
import exp from "constants";

describe("Test Unique Entity VO", () => {

    /*beforeEach(() => {
        jest.clearAllMocks()
    })*/

    const spyOn = jest.spyOn(UniqueEntityId.prototype as any, "Validate")

   /* it("should throw error when uuid is invalid", () => {

        expect(new UniqueEntityId("9c3d6257-b681-4698-91ee-2cb61e142e83")).toThrow(new invalidUidError())
    })*/

    it("Should test if passed Id in constructor",()=> {
        const uuid = "9c3d6257-b681-4698-91ee-2cb61e142e83";
        const vo = new UniqueEntityId(uuid);

        expect(vo.id).toBe(uuid);
        expect(spyOn).toHaveBeenCalled();
    })

    it("Should test function have been called", () => {
        const vo = new UniqueEntityId();
        expect(vo.id).toBeTruthy();
        expect(spyOn).toHaveBeenCalled();
    })

    it("Should test error is function", () => {
        const error = new invalidUidError();

        expect(error).toBeTruthy()
        expect(error).toBeInstanceOf(Error);
    })
})
