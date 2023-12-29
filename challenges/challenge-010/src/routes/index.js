const { Router } = require("express")

const userRoutes = require("./user.routes")
const moviesNotesRoutes = require("./moviesNotes.routes")
const moviesTagsRoutes = require("./moviesTags.routes")

const routes = Router()
routes.use("/users", userRoutes)
routes.use("/movies_notes/", moviesNotesRoutes)
routes.use("/movies_tags/", moviesTagsRoutes)

module.exports = routes