const ormconfig = {
  type: 'mongodb',
  url: process.env.DATABASE_URL,
  useNewUrlParser: true,
  synchronize: true,
  logging: true,
  entities: ['server/dist/entity/*.*'],
  useUnifiedTopology: true,
};

module.exports = ormconfig;
