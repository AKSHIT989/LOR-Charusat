const { GraphQLObjectType, GraphQLInputObjectType, GraphQLString } = require("graphql");

exports.personalDetailsModel = new GraphQLObjectType({
  name: "personalDetails",
  fields: () => ({
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    charusat_id: { type: GraphQLString },
    mobile: { type: GraphQLString },
  }),
});

exports.personalDetailsInputModel = new GraphQLInputObjectType({
  name: "personalDetailsInput",
  fields: () => ({
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    charusat_id: { type: GraphQLString },
    mobile: { type: GraphQLString },
  }),
});