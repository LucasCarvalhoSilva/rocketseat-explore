const { hash, compare } = require("bcryptjs")
const knex = require("../database/knex")

const AppError = require("../utils/AppError")

class UsersController{
    async create(request, response) {
        const { name, email, password } = request.body

        const usersWithSameEmail = await knex("users").where({ email })

        const usersWithEmailExist = usersWithSameEmail.length > 0

        if(usersWithEmailExist) {
            throw new AppError("email já está cadastrado")
        }

        const hashedPassword = await hash(password, 8)

        const database = await knex("users").insert(({
            name,
            email,
            password: hashedPassword
        }))

        response.json()
    }

    async update(request, response) {
        const { id } = request.params
        
        const { name, email, password, old_password } = request.body
        
        const user = await knex("users").where({ id }).first()
        if(!user) {
            throw new AppError("Usuário não encontrado")
        }

        console.log(user)
        if(password && !old_password) {
            throw new AppError("Você precisa informar a senha antiga para definir uma nova")
        }

        if(password && old_password) {
            console.log(user)
            console.log("Abrimos")
            const checkOldPassword = await compare(old_password, user.password)

            if(!checkOldPassword) {
                throw new AppError("Senha antiga não confere")
            }
        }   

        const hashedPassword = await hash(password, 8)
        
        await knex("users")
        .where({ id })
        .update({
            name,
            email,
            password: hashedPassword,
            updated_at: knex.raw('DATETIME(\'now\')')
        })
        .then(() => {
            response.json("Alteração realizada com sucesso")
        })
        .catch((error) => {
            response.json(error)
        })
    }

    async delete(request, response) {
        const { id } = request.params

        await knex("users").where({ id }).delete()

        return response.json()
    }
}

module.exports = UsersController