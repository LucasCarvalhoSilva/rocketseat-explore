const { Router } = require("express")

const UserController = require("../controllers/UserController")

const userRoutes = Router()

function myMiddleware(request, response, next) {
    console.log("Você passou pelo middleware")
/* 
    if(!request.body.isAdmin){
        return response.json({message: "user unauthorized"})
    } */

    next()
}






const userController = new UserController

userRoutes.post("/", myMiddleware, userController.create)
userRoutes.put("/:id", userController.update)

module.exports = userRoutes