export let config  = {
  "database": {
    "connectionString": "mongodb://localhost:27017/gym-test"
  },
  "server": {
    "port": 3000,
    "jwtSecret": "random-secret-password",
    "jwtExpiration": "1h",
    "routePrefix": "/",
    "plugins": [
      "good",
      "hapi-auth-jwt2",
      "hapi-swagger",
      "static"
    ]
  }
};

