import axios from "axios";

export const updCat = (id, body) => {
    axios.put(`${API_URL}/update/${id}`, body).then((res) => {
        if (res.data.message !== "ok") {
            alert("РукаЛицо просто **ВАША МОБИЛОЧКА ПРЕВРАТИЛАСЬ В КИРПИЧ ИЗ-ЗА ОШИБКИ**");
        } else {
            alert(
                "Паспортные данные вашей кота(кошки) изменены."
            );
        }
    });
};