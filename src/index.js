// import { nanoid } from "nanoid";
// //                >якщо в ці дужки вписати цифру то стільки символів буде мати id
// const id = nanoid();
// console.log(id);//Z0jdZKSbXLm0lr42y7Mry

// import { customAlphabet } from "nanoid";
// const alfabet = 'abc123';
// const customNanoid = customAlphabet(alfabet, 10)

// const id = customNanoid();
// console.log(id)


// import {  success,  notice,  info,  error,  defaultModules,} from '@pnotify/core/dist/PNotify.js';
// import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
// import '@pnotify/core/dist/BrightTheme.css';

// defaultModules.set(PNotifyMobile, {});

// const mySuccess = success({
//     text: 'Операція завершена успішно'
// })
// const myNotice = notice({
//     text: 'Операція 1',
// });
// const myInfo = info({
//     text: 'Операція 2',
// });
// const myError = error({
//     text: 'Помилка',
// });
// console.log(mySuccess);
// console.log(myError);
// console.log(myInfo);
// console.log(myNotice)



// import { Chart, registerables } from 'chart.js';

// Chart.register(...registerables);

// const date = {
//     labels: ['january', 'february', 'march', 'april', 'may', 'june', 'july'],
//     datasets: [
//     {
//         label: 'Temp',
//         data: [15, 13, 16, 18, 20, 22, 25],
//         fill: false,
//         borderColor: 'rgb(80, 192, 190)',
//         tension: 0.1,
//     },
//     ],
// };

// const config = {
//     type: 'line',
//     data: date,
//     options: {},
// };

// document.addEventListener('DOMContentLoaded', () => {
//     const a = document.getElementById('myChart').getContext('2d');
//     new Chart(a, config);
// });




// import * as basicLightbox from 'basiclightbox';
// import 'basiclightbox/dist/basicLightbox.min.css';

// const img =
//     '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRw0eHnT5LB5QFT7aVv_LBQxIk0Fdp2U2SFw&s" alt="BMW">';
// const instance = basicLightbox.create(img);
// instance.show();







