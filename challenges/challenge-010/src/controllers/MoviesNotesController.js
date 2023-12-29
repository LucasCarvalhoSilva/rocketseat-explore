const knex = require("../database/knex")

class MoviesNotesController{
    async create(request, response) {
        const { user_id } = request.params

        const { title, description, rating, tags } = request.body

        console.log("hamada")
        
        const [note_id] = await knex("movie_notes").insert( {
            user_id,
            title,
            description,
            rating
        })

        const tagsToInsert = tags.map(tag => {
            return{
                user_id,
                name: tag,
                note_id
            }
        })

        await knex("movie_tags").insert(tagsToInsert)


        response.json("Inserido com sucesso")
    }

    async show(request, response) {
        const { id } = request.params

        const movie_note = await knex("movie_notes").where({ id }).first()
        const tags = await knex("movie_tags").where({ note_id: id }).orderBy("name")

        return response.json({
            ...movie_note,
            tags
        })
    }

    async delete(request, response) {
        const { id } = request.params

        await knex("movie_notes").where({ id }).delete()

        return response.json("deletado com sucesso")
    }

    async index(request, response) {
        const { title, user_id, tags} = request.query

        let movie_notes 

        if(tags) {
            const filteredTags = tags.split(',').map(tag => tag.trim())
            movie_notes = await knex("movie_tags")
                .select([
                    "movie_notes.id",
                    "movie_notes.title",
                    "movie_notes.description",
                    "movie_notes.user_id"
                ])
                .where("movie_notes.user_id",user_id)
                .whereLike("movie_notes.title",`%${title}%`)
                .whereIn("name",filteredTags)
                .innerJoin("movie_notes","movie_notes.id","movie_tags.note_id")
                .orderBy("movie_notes.title")
        }else {
            movie_notes = await knex("movie_notes")
            .where({ user_id })
            .whereLike("title", `%${title}%`)
            .orderBy("title")
        }

        const userTags = await knex("movie_tags").where({user_id})
        const movieNotesWithTags = movie_notes.map(movie_note => {
            const movieNoteTag = userTags.filter( tag => tag.note_id === movie_note.id)

            return {
                ...movie_note,
                tags: movieNoteTag
            }
        })

        return response.json(movieNotesWithTags)
    }
}

module.exports = MoviesNotesController