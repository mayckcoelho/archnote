import axios from "axios"

const api = axios.create({
    baseURL: 'http://localhost:8082',
    headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json;charset=UTF-8',
    }
});

// api.interceptors.response.use(function (response) {
//     return response;
// }, function (e) {
//     let errors
//     const status = e.response.status

//     if (status) {
//         switch (status) {
//             case 400:
//                 if (errors)
//                     errors.map(error => { return message.warning(error.message) })
//                 else
//                     message.warning(e.response.data.ERRORMESSAGE);
//                 break
//             case 401:
//                 localStorage.removeItem(consts.USER_TOKEN);
//                 break
//             case 403:
//                 message.error(e.response.data.ERRORMESSAGE);
//                 break;
//             case 409:
//                 message.warning(e.response.data.ERRORMESSAGE);
//                 break;
//             default:
//                 break;
//         }
//     }
//     return Promise.reject(e);
// });

export default api;