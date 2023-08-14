// var signUpName = document.getElementById("signName");
// var signUpEmail = document.getElementById("signEmail");
// var signUpPassword = document.getElementById("signPassword");
 
// var dataUser = [];
//  if(localStorage.getItem('dataUser')!= null){
//     dataUser =  JSON.parse(localStorage.getItem('dataUser'));
//  }
//  else{
//     dataUser =[];
//  }

// function add(){
//     if(signUpName.value == ''|| signUpEmail.value == '' || signUpPassword.value == '' ){
//         document.getElementById("message").innerHTML = `<p class='text-center text-white'>All Inputs Is Required</p>`;
//     }
//     else{
//         var obj = {
//             name:signUpName.value,
//             email:signUpEmail.value,
//             password:signUpPassword.value
//         }
//         dataUser.push(obj);
//         location.href = '../../Login/index.html';
//         localStorage.setItem(dataUser,JSON.stringify(dataUser))
//     }
// }


var signUpName = document.getElementById('signName');
var signUpEmail = document.getElementById('signEmail');
var signUpPassword = document.getElementById('signPassword');
var user = [];

if (localStorage.getItem('user') != null) {
    user = JSON.parse(localStorage.getItem('user'))
} else {
    user = [];
}


function add() {
    if (signUpName.value == '' || signUpEmail.value == '' || signUpPassword.value == '') {
        document.getElementById('message').innerHTML = `<p class = 'text-center'>All inputs is required</p>`
    } else {
        var obj = {
            name: signUpName.value,
            email: signUpEmail.value,
            password: signUpPassword.value
        }
        user.push(obj);
        location.href = '../../Login/index.html';
        localStorage.setItem('user', JSON.stringify(user));
    }
}