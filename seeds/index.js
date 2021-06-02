const sequelize = require('../config/connection');
const seedKingdom = require('./kingdomData');
const seedPaintings = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedKingdom();

  await seedPaintings();

  process.exit(0);
};

seedAll();
