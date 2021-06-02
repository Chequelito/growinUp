const { Species } = require('../models');

const speciesdata = [
  {
    name: 'Spot',
    owner: 'Kim',
    kingdom_id: 1,
    filename: '-.jpg',
    description:
      'A fun, kind hearted dog.',
  },
  {
    name: 'Mr Hibiscus',
    owner: 'Kim',
    kingdom_id: 2,
    filename: '-.jpg',
    description:
      'Some kind of fern, idk',
  },
  {
    name: 'Tips',
    owner: 'Dave',
    kingdom_id: 3,
    filename: '-.jpg',
    description:
      'A fun guy ;)',
  },
 
];

const seedSpecies = () => Species.bulkCreate(speciesdata);

module.exports = seedSpecies;
