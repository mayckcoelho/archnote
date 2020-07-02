import mockingoose from "mockingoose";

import Attachments from "../../src/models/Attachments";

describe('teste mongoose Attachments model', () => {
    it('should return doc with findById', () => {
        const _doc = {
            _id: '507f191e810c19729de860ea',
            name: 'name',
            path: 'path'
        };

        mockingoose(Attachments).toReturn(_doc, 'findOne');

        return Attachments.findById({ _id: '507f191e810c19729de860ea' }).then(doc => {
            expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc);
        });
    });
})