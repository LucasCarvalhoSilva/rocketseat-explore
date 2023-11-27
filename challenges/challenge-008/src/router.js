import { changeClass } from "./changeBg.js"

export class Router{

    add(routeName, page) {
        this.route[routeName] = page
        console.log("Rota -> ", routeName, page , "adicionada com sucesso")
    }

    route(event) {
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)

        const {pathname} = window.location
        changeClass(pathname)
        this.handle()
    }

    handleRoute(routeDestineName) {

        console.log("Funcionou caramba")
        
        window.history.pushState({}, "", routeDestineName)

        const {pathname} = window.location
        changeClass(pathname)
        this.handle()
    }


    handle() {
        const { pathname } = window.location
        console.log(pathname)
        const route = this.route[pathname]
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })
    }
}