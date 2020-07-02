import HttpException from "../../src/exceptions/HttpException"

describe('test HttpException class', () => {
    it('should be a HttpException', () => {
        const error = new HttpException(404, "Not Found");

        expect(error.status).toBe(404);
        expect(error.message).toBe("Not Found");
    })
})