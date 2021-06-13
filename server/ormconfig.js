const ormconfig = {
  type: 'mongodb',
  url: process.env.DATABASE_URL,
  useNewUrlParser: true,
  synchronize: true,
  logging: true,
  entities: [join(__dirname, '/../**/**.entity{.ts,.js}')],
  useUnifiedTopology: true,
};

module.exports = ormconfig;
