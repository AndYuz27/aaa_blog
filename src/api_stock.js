import axios from "axios";

export const API_URL = `https://ithub-blog.herokuapp.com/api/`;

export const getUsers = async () => {
    try {
        const res = await axios.get(`${API_URL}/users`);
        return res.data.data;
    } catch (e) {
        console.log('Едрить колотить! Ошибка СТОП 000000 =>' ,e);
    }
};

export const getUser = (id) => {
    axios
        .get(`${API_URL}/users/${id}`)
        .then((res) => console.log(res.data.data))
        .catch((e) => console.log(e));
};

export const getPersonInfo = (id) => {
    axios
        .get(`${API_URL}/users/${id}`)
        .then((res) => console.log(res.data.data))
        .catch((e) => console.log(e));
};

export const signUp = (body) => {
    axios.post(`${API_URL}/users/add`, body).then((res) => {
        if (res.data.message === "ok") {
            alert("Кот с паспортными данными уже существует, попробуй другой номер паспорта(ID)");
        } else {
            alert(
                "Ваш кот добавлен, перезагрузи страничку дружище!"
            );
        }
    });
};

export const signIn = (body) => {
    axios.post(`${API_URL}users/auth`, body).then((res) => {
        if (res.data.message === "ok") {
            alert("Кот с паспортными данными уже существует, попробуй другой номер паспорта(ID)");
        } else {
            alert(
                "Ваш кот добавлен, перезагрузи страничку дружище!"
            );
        }
    });
};

export const setPersonInfo = (id, body) => {
    axios.put(`${API_URL}users/update/${id}`, body).then((res) => {
        if (res.data.message !== "ok") {
            alert("РукаЛицо просто **ВАША МОБИЛОЧКА ПРЕВРАТИЛАСЬ В КИРПИЧ ИЗ-ЗА ОШИБКИ**");
        } else {
            alert(
                "Паспортные данные вашей кота(кошки) изменены."
            );
        }
    });
};

export const delCat = (id) => {
    axios
        .delete(`${API_URL}/delete/${id}`)
        .then((res) =>
            alert(
                "Ваш кот был удален из нашего приложения"
            )
        )
        .catch((e) => alert("ОШИБКА: Ваш кот пытался уехать из Саратова, но у него не получилось. **Не пытайтесь покинуть Саратов**"));
};
