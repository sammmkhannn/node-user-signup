const config = {
  VERSION: 1,
  BUILD: 1,
  URL: "http://127.0.0.1",
  API_PATH: "/api",
  PORT: process.env.PORT || 8080,
  DB: {
    //mongoDB configuration
    HOST: "localhost",
    PORT: "27017",
    DATABASE: "db",
  },
};

//Get DB connection string for connecting to mongoDB database

config.getDBString = () => {
  return `mongodb://${config.DB.HOST}:${config.DB.PORT}/${config.DB.DATABASE}`;
};

config.getHTTPUrl = () => {
  return `http://${config.URL}:${config.PORT}`;
};

export default config;
