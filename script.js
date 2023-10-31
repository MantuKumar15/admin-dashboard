
// function w3_open() {
//   document.getElementById("mySidebar").style.display = "block";
// }

// function w3_close() {
//   document.getElementById("mySidebar").style.display = "none";
// }

function w3_open() {
  document.getElementById("main").style.marginLeft = "20%";
  document.getElementById("mySidebar").style.width = "20%";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("openNav").style.display = 'none';
}
function w3_close() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
}

function Remove(){
    
    window.alert("Are you sure you want to Delete?");
}

function goToAddUser(){
  window.location.href="/addUser.html";
}

function goToHome(){
  window.location.href="/Dashboard.html";
}

function goToAdmin(){
  window.location.href="/Dashboard.html";
}

function goToLogin(){
  window.location.href='/index.html';
}

function goToHome1(){
  window.location.href="/Dashboard.html";
}

function goToEdit(){
  window.location.href='/editPage.html';
}