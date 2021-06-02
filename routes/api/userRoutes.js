const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Plant, Pet } = require('../../models');

// create new user
router.post('/', async (req, res) => {
  try {
    const newUser = req.body;
    // hash the password from 'req.body' and save to newUser
    
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


router.post('/seed', (req, res) => {
  User.bulkCreate([
    {
      name: "Dave",
      email: "dave@gmail.com",
      userName: "david",
      password: "secret"

    }, 
    {
      name: "steve",
      email: "steve@gmail.com",
      userName: "steven",
      password: "secret"

    }, 
    {
      name: "doug",
      email: "doug@gmail.com",
      userName: "douglas",
      password: "secret"

    }, 
    {
      name: "rick",
      email: "rick@gmail.com",
      userName: "richard",
      password: "secret"

    }, 
    {
      name: "bob",
      email: "bob@gmail.com",
      userName: "robert",
      password: "secret"

    }, 
    {
      name: "chuck",
      email: "chuck@gmail.com",
      userName: "charles",
      password: "secret"

    }, 
    {
      name: "bryan",
      email: "bryan@gmail.com",
      userName: "bryan",
      password: "secret"

    }, 
    {
      name: "adam",
      email: "adam@gmail.com",
      userName: "adam",
      password: "secret"

    }, 
    {
      name: "eve",
      email: "eve@gmail.com",
      userName: "eve",
      password: "secret"

    }, 
    {
      name: "wendy",
      email: "wendy@gmail.com",
      userName: "wendy",
      password: "secret"

    }, 
    {
      name: "rita",
      email: "rita@gmail.com",
      userName: "rita",
      password: "secret"

    }, 
  
  ])
.then (user => res.json(user))
});

module.exports = router;
