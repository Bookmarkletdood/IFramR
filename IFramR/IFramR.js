let Name

document.getElementById("Enter-Name-Submit").onclick = function(){

	Name = 
	document.getElementById("Enter-Name").value;
	
	document.getElementById("Enter-Name-Header").innerHTML = "Welcome to IFramR " + Name;
}
