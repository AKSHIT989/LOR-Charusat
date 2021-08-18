const userType = `
type Student{
  id: Int!
  charusat_id: String!
  user_type: String!
  first_name: String!
  last_name: String!
  inst: String!
  degree: String!
  mobile: String!
  email: String!
  password: String!
  github_url: String!
  linkedin_url: String!
}

type UserAuthData{
  userId: ID!
  token: String!
  userType: String!
}

input StudentInput{
  charusat_id: String!
  user_type: String!
  first_name: String!
  last_name: String!
  inst: String!
  degree: String!
  mobile: String!
  email: String!
  password: String!
  github_url: String!
  linkedin_url: String!
}
`;

exports.userType = userType;
