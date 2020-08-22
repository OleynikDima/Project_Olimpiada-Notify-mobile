"use strict"

const users =[
    {id:1 , url:'./images/img-people-1.png'},
    {id:2 , url:'./images/img-people-2.png'},
    {id:3 , url:'./images/img-people-3.png'},
    {id:4 , url:'./images/img-people-4.png'},
    {id:5 , url:'./images/img-people-5.png'},
    {id:7 , url:'./images/img-people-7.png'},
    {id:8 , url:'./images/img-people-8.png'},
    {id:9 , url:'./images/img-people-9.png'},
    {id:10 , url:'./images/img-people-10.png'},
    {id:11 , url:'./images/img-people-11.png'},
    {id:12 , url:'./images/img-people-12.png'},
    {id:13 , url:'./images/img-people-13.png'},
    {id:14 , url:'./images/img-people-14.png'},
    {id:15 , url:'./images/img-people-15.png'},
    {id:16 , url:'./images/img-people-16.png'},
    {id:17 , url:'./images/img-people-17.png'},
    {id:18 , url:'./images/img-people-18.png'},
    {id:20 , url:'./images/img-people-20.png'},
    {id:21 , url:'./images/img-people-21.png'},
    {id:22 , url:'./images/img-people-22.png'},
];


console.log('go!');

function mediaWidth(){
    const width = window.innerWidth;
     if (width > 758){
           return 22
     }else {
         return 8
     }
}
function startFaceImg(){
    const width = window.innerWidth;
     if (width > 758){
           return 0
     }else {
         return 1
     }
}




const listPeople = document.querySelector('.list-js');
// listPeople.addEventListener('mouseenter', eventTarget)


function createItemLi(users){
const html = users.map(user => `<li class="sociale-people__item"><img class="sociale-people__img" src ="${user.url}"/></li>`).slice(startFaceImg(),mediaWidth()).join('')
// console.log(html);

listPeople.insertAdjacentHTML('afterbegin', html);
};
createItemLi(users);



