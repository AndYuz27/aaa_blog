import axios from "axios";

export const setPersonInfo = (id, body) => {
    axios.put(`https://ithub-blog.herokuapp.com/api/users/update/${id}`, body).then((res) => {
        if (res.data.message !== "ok") {
            console.log("Отвал сервера");
        } else {
            console.log(
                "хмм..... Повезло Повезло"
            );
        }
    });
};

export const eegPosts = async () => {
    try {
        const res = await axios.get(`https://ithub-blog.herokuapp.com/api/posts`)

        return res.data.data;
    } catch (e) {
        console.log("ERROR")
    }
}
export const delPost = async () => {
    try {
        const res = await axios.delete(`https://ithub-blog.herokuapp.com/api/posts`)

        return res.data.data;
    } catch (e) {
        console.log("ERROR")
    }
}


