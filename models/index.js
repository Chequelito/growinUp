const User = require('./User');
const Plant = require('./Plant');
const Pet = require('./Pet');

User.hasMany(Plant, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});


User.hasMany(Pet, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});


Plant.belongsTo(User, {
  foreignKey: 'user_id',
});



Pet.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Plant, Pet };