class Api {
    constructor() { 
        this.url = "https://srv.petiteweb.dev/api/blog/"
    }
    getUsers() {
        return fetch(`${this.url}users`)
    }
    getUser(id) {
        return fetch(`${this.url}users/${id}`)
    }
    getPersonInfo(id) { // информация о себе
        return fetch(`${this.url}users/me/${id}`)
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
    //когда грузится главная страница
    getPosts(){
        return fetch(`${this.url}posts`)
    }
    //когда я авторизован и хочу добавить пост
    getPost(id){
        return fetch(`${this.url}posts/${id}`)
    }
    //когда я авторизован и хочу добавить пост 
    addPost(body){
        return fetch(`${this.url}posts/add`,{
            method:"POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
    }
    //если автор поста - пользователь сайта(я), на странице с постом изменить свой пост 
    updatePost(id, body) { // если автор поста - пользователь сайта (я), на странице с постом изменять свой пост (можно в личном кабинете).
        return fetch(`${this.url}posts/update/${id}`, {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
    }
    deletePost(id) { // если я авторизован на сайте, можно удалять свой пост
        return fetch(`${this.url}posts/${id}`, {
            method: "DELETE"
        })
    }
}

export default Api;