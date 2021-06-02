const { Kingdom } = require('../models');

const kingdomdata = [
  {
    name: 'Fungi',
  },
  {
    name: 'Plant',

  },
  {
    name: 'Animal',

  },
];

const seedKingdom = () => Kingdom.bulkCreate(kingdomdata);

module.exports = seedKingdom;
