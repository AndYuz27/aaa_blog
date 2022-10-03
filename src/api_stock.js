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

//