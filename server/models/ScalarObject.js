const { GraphQLScalarType } = require('graphql');

exports.ScalarObject = new GraphQLScalarType({
  name: 'Object',
  description: 'Object custom scalar type',
  serialize(data) {
    if (typeof data === 'object') {
        return data;
    }
    return null; 
  },
  parseValue(data) {
    if (typeof data === 'object') {
        return data;
    }
    return null; 
  },
});
