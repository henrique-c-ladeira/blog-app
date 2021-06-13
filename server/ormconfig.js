const ormconfig = {
  type: 'mongodb',
  url: process.env.DATABASE_URL,
  useNewUrlParser: true,
  synchronize: true,
  logging: true,
  entities: ['*/dist/entity/*.*'],
  useUnifiedTopology: true,
};

// For heroku -> entities: ['*/dist/entity/*.*'], @TODO IMPORTANT

module.exports = ormconfig;
