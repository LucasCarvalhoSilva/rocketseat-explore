const knex = require("../database/knex")

class MoviesTagsController{
    async index(request, response) {
        const { user_id } = request.params

        const tags = await knex("movie_tags")
        .where({ user_id })

        response.json(tags)
    }
}

module.exports = MoviesTagsController   