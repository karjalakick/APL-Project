// Funktion för att sätta en cookie
function setCookie(cname, cvalue) {
  var d = new Date();
  // Ställ in tiden till 24 timmar
  d.setTime(d.getTime() + (24*60*60*1000)); 
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
} 

function openSidebar() {
  document.getElementById("mySidebar").style.display = "block";
}

function closeSidebar() {
  document.getElementById("mySidebar").style.display = "none";
}

document.getElementById("confirmedButton").addEventListener("click", function() {
  document.getElementById("dialogBox1").style.display = "block";
});

document.getElementById("deniedButton").addEventListener("click", function() {
  document.getElementById("dialogBox2").style.display = "block";
});



function closeDialog(dialogId) {
  document.getElementById(dialogId).style.display = "none";
}