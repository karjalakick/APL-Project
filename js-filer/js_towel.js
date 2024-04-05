// Funktion för att sätta en cookie
function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue + "; path=/";
}

closeSidebar();
function openSidebar() {
  document.getElementById("mySidebar").style.display = "block";
}

function closeSidebar() {
  document.getElementById("mySidebar").style.display = "none";
}
//SER DU DETTA