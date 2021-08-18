const userauthResolvers = require("./userAuth");
const lorrequestResolvers = require("./lorRequest");

const rootResolvers = {
  ...userauthResolvers,
  ...lorrequestResolvers,
};

module.exports = rootResolvers;
