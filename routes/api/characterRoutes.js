const router = require('express').Router();
const Character = require('../../controller/Character');

router.route('/')
  .get(Character.findAll)
  .post(Character.create);

router.route('/user')
  .post(Character.createCharacter)

router.route('/:id')
  .delete(Character.delete);

module.exports = router