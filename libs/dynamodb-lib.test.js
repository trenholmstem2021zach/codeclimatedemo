const dynamodblib = require('./dynamodb-lib')

it('Get DocumentClient Stub', async () => {

  expect(dynamodblib.default.get({})).toBeInstanceOf(Promise)

});

it('should insert item into table', async () => {

  process.env.IS_OFFLINE = "true"
  await dynamodblib.default
      .put({TableName: 'files', Item: {id: '1', hello: 'world'}});

  const {Item} = await dynamodblib.default.get({TableName: 'files', Key: {id: '1'}}).promise();

  expect(Item).toEqual({
    id: '1',
    hello: 'world',
  });
});
