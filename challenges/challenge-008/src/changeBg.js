export const changeClass = (primaryRoot) => {
    console.log("mudandoBG", primaryRoot)
    switch(primaryRoot) {
        case '/universe':
            console.log("define -> universe")
            document.documentElement.classList.toggle("universe")
            if(document.documentElement.classList.contains("explore")) {
                document.documentElement.classList.toggle("explore")
            }
            if(document.documentElement.classList.contains("home")) {
                document.documentElement.classList.toggle("home")
            }
            break
        case '/explore':
            console.log('define -> explore')
            document.documentElement.classList.toggle("explore")
            if(document.documentElement.classList.contains("universe")) {
                document.documentElement.classList.toggle("universe")
            }
            if(document.documentElement.classList.contains("home")) {
                document.documentElement.classList.toggle("home")
            }
            break
        case '/':
            console.log('define -> home')
            if(document.documentElement.classList.contains("home")) {

            } else {
                document.documentElement.classList.toggle("home")
            }
            

            if(document.documentElement.classList.contains("explore")) {
                document.documentElement.classList.toggle("explore")
            }
            if(document.documentElement.classList.contains("universe")) {
                document.documentElement.classList.toggle("universe")
            }
            break
    }
}