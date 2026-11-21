function  studlog(){
let stud=document.getElementById("bod");

let log1=localStorage.getItem("logname");
stud.innerHTML="Welcome"+" " +log1+""+'<i class="fa-solid fa-face-smile"></i>';
}
studlog();