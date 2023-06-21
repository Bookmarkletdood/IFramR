let Name

document.getElementById("Enter-Name-Submit").onclick = function(){

	Name = 
	document.getElementById("Enter-Name-Input").value;
	
	document.getElementById("Enter-Name-Header").innerHTML = "Welcome to IFramR " + Name;
}
