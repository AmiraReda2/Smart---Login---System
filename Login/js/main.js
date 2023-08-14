// var dataUser =[];
// dataUser = JSON.parse(localStorage.getItem("dataUser"))

// var signInEmail = document.getElementById('signEmail');
// var signInPassword = document.getElementById('signPassword');

// document.getElementById('login').addEventListener('click', function () {
//     if (signInEmail.value == '' || signInPassword.value == '') {
//         document.getElementById('message').innerHTML = `<p class ='text-center text-white'>All inputs is required</p>`;
//     } else {
//         checkUser();
//     }
// })


//  function checkUser(){
//     for (var i = 0; i < dataUser.length; i++) {
//         if (singInEmail.value == dataUser[i].email && signInPassword.value == dataUser[i].password) {
//             var y = dataUser[i].name;
//             localStorage.setItem('userName', y);
//             location.href = '../../Home/index.html';
//             break;
//         }
//     }
// }


var user = [];
user = JSON.parse(localStorage.getItem('user'))

var singInEmail = document.getElementById('signEmail');
var signInPassword = document.getElementById('signPassword');




document.getElementById('login').addEventListener('click', function () {
    if (singInEmail.value == '' || signInPassword.value == '') {
        document.getElementById('message').innerHTML = `<p class ='text-center'>All inputs is required</p>`;
    } else {
        checkUser();
    }
})


function checkUser() {
    for (var i = 0; i < user.length; i++) {
        if (singInEmail.value == user[i].email && signInPassword.value == user[i].password) {
            var y = user[i].name;
            localStorage.setItem('userName', y);
            location.href = '../../Home/index.html';
            break;
        }
    }
}