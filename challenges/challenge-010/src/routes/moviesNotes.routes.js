const Router = require("express")

const MoviesNotesController = require("../controllers/MoviesNotesController")
const movieNoteRoutes = Router()

const movieNoteController = new MoviesNotesController()

movieNoteRoutes.post("/:user_id", movieNoteController.create)
movieNoteRoutes.get("/:id", movieNoteController.show)
movieNoteRoutes.delete("/:id", movieNoteController.delete)
movieNoteRoutes.get("/", movieNoteController.index)



module.exports = movieNoteRoutes