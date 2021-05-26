const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Plant, Pet } = require('../../models');

// create new user
router.post('/', async (req, res) => {
  try {
    const newUser = req.body;
    // hash the password from 'req.body' and save to newUser
    newUser.password = await bcrypt.hash(req.body.password, 10);
    // create the newUser with the hashed password and save to DB
    const userData = await User.create(newUser);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
  }
);

// GET all users
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [{ model: Plant }, { model: Pet }],
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single user
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [{ model: Plant }, { model: Pet }],
    });

    if (!userData) {
      res.status(404).json({ message: 'No user found with that id!' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
