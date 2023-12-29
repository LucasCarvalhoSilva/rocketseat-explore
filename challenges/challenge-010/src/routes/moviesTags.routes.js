const Router = require("express")

const MoviesTagsController = require("../controllers/MoviesTagsController")
const movieTagsRoutes = Router()

const movieTagsController = new MoviesTagsController()

movieTagsRoutes.get("/:user_id", movieTagsController.index)

module.exports = movieTagsRoutes