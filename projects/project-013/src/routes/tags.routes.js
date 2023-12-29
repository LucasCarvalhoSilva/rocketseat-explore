const { Router } = require("express")

const TagsController = require("../controllers/TagsController")

const tagsRoutes = Router()

const tagController = new TagsController()

tagsRoutes.get("/:user_id", tagController.index)

module.exports = tagsRoutes