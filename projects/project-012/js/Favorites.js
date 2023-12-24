export class GithubUser {
    static async search(username) {
        const endpoint = `https://api.github.com/users/${username}`
        
        const data = await fetch(endpoint)
        const { login, name, public_repos, followers } = await data.json()
        return ({
            login,
            name,
            public_repos,
            followers
        }) 
    }
}

export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()

        GithubUser.search('maykbrito').then( user => console.log(user))
    }

    
    load() {
        this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
    }

    save() {
        localStorage.setItem('@github-favorites', JSON.stringify(this.entries))
    }

    async add(username) {
        try {
            const userExists = this.entries.find(entry => entry.login === username)

            if (userExists) {
                throw new Error ('Usuário já existe')
            }
            
            const user = await GithubUser.search(username)
        
            
            if(user.login === undefined) {
                throw new Error('Usuário não encontrado!')
            }
            console.log('Aqui caralho', user)
            this.entries = [user, ...this.entries]
            this.update()
            this.save()
        } catch(error) {
            alert(error.message)
        }
    }

    delete(user) {
        console.log(user.login)
        const filteredEntries = this.entries.filter(entry => entry.login != user.login )
        
        this.entries = filteredEntries
        this.update()
        this.save()
    }
}

export class FavoritesView extends Favorites{
    constructor(root) {
        super(root)
        
        this.tbody = this.root.querySelector('table tbody')
        
        this.update()
        this.onAdd()
    }

    onAdd() {
        const addButton = this.root.querySelector('.search button')
        addButton.onclick = () => {
            const { value } = this.root.querySelector('.search input')
            this.add(value)
        }
    }
    
    update() {
        this.removeAllTr()
        
        this.entries.forEach(user => {
            const row = this.createRow()
            console.log(row)
            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user img').alt = `Imagem de ${user.name}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user a').href = `https://github.com/${user.login}`
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers
            row.querySelector('.remove').onclick = () => {
                const isDeleteOk = confirm('Tem certeza que deseja cancelar essa linha?')
                console.log('Deletando')
                if(isDeleteOk) {
                    this.delete(user)
                }
            }
            this.tbody.append(row) 
        })
    }

    createRow() {
        console.log('linha criada')
        const tr = document.createElement('tr')
      
        tr.innerHTML  = `
            <td class="user">
                <img src="https://github.com/maykbrito.png" alt="imagem de mayk brito">
                <a href="https://github.com/maykbrito" target="_blank">
                    <p>Mayk Brito</p>
                    <span>maykbrito</span>
                </a>
            </td>
            <td class="repositories">76</td>
            <td class="followers">9589</td>
            <td><button class="remove">&times;</button></td>
        `
        
        return tr
    }

    removeAllTr() {
        this.tbody.querySelectorAll('tr')
            .forEach((tr) => {
                tr.remove()
            })
    }
}