class Api {
    constructor() {
        this.url = "https://ithub-blog.herokuapp.com/api/"
    }
    getUsers() {
        return fetch(`${this.url}users`)
    }
    getUser(id) {
        return fetch(`${this.url}users/${id}`)
    }
    getPersonInfo() { // информация о себе
        return fetch(`${this.url}users/me`)
    }
    setPersonInfo(id, body) { // можно поменять имя, описание, изображение
        return fetch(`${this.url}users/update/${id}`, {
            method: "PUT",
            header: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
    }
    signUp(body) { // email и password required!
        return fetch(`${this.url}users/add`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
    }
    logIn(body) { // email и password only
        return fetch(`${this.url}users/auth`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
    }
}

export default Api;