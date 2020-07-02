import mockingoose from "mockingoose";

import Users from "../../src/models/Users";

describe('teste mongoose Users model', () => {
    it('should return doc with findById', () => {
        const _doc = {
            _id: '507f191e810c19729de860ea',
            name: 'name',
            email: 'name@email.com.br'
        };

        mockingoose(Users).toReturn(_doc, 'findOne');

        return Users.findById({ _id: '507f191e810c19729de860ea' }).then(doc => {
            expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc);
        });
    });

    it('should return doc with hash password with save', () => {
        const _doc = {
            name: 'name',
            email: 'name@email.com.br',
            password: 'password'
        };

        const _docReturn = {
            name: 'name',
            email: 'name@email.com.br',
            password: 'tetetet'
        };

        mockingoose(Users).toReturn(_docReturn, 'save');

        return Users.create(_doc).then(doc => {
            expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_docReturn);
        });
    })
})