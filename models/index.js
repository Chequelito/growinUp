const User = require('./User');
const Plant = require('./Plant');
const Pet = require('./Pet');

User.hasOne(Plant, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Plant.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Pet, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Pet.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Plant, Pet };