
document.getElementById("copyrightyear").innerHTML = new Date().getFullYear();

document.getElementById("currentdate").innerHTML = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric"})
