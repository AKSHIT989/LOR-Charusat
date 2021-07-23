module.exports = {
  load: {
    before: ["timer", "responseTime", "logger", "cors", "responses", "gzip"],
    after: ["parser", "router"],
  },
  settings: {
    cors: {
      enabled: true,
      headers: '*', // ["Content-Type", "Authorization", "X-Frame-Options", "x-csrf-token"]
    //   methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"],
      origin: '*',
    },
  },
};
