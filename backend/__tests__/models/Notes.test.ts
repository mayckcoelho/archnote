import mockingoose from "mockingoose";

import Notes from "../../src/models/Notes";

describe('teste mongoose Notes model', () => {
    it('should return doc with findById', () => {
        const _doc = {
            _id: '507f191e810c19729de860ea',
            title: 'title',
            content: 'content',
            attachments: []
        };

        mockingoose(Notes).toReturn(_doc, 'findOne');

        return Notes.findById({ _id: '507f191e810c19729de860ea' }).then(doc => {
            expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc);
        });
    });
})