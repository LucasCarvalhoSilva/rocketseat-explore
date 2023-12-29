const { Router } = require("express")

const NotesController = require("../controllers/NotesController")

const notesRoutes = Router()



const noteController = new NotesController()

notesRoutes.get("/", noteController.index)
notesRoutes.post("/:user_id", noteController.create)
notesRoutes.get("/:id", noteController.show)
notesRoutes.delete("/:id", noteController.delete)

module.exports = notesRoutes