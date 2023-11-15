const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

//routes
// /api/thoughts
router
  .route('/')
  .get(getThoughts)
  .post(createThought);

// /api/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  .post(addReaction)

// /api/:thoughtId/reactions/:reactionId
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction)

module.exports = router;