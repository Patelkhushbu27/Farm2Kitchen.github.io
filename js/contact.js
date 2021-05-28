function validation() {
	let fn = document.getElementById("Frist Name");
	let ln = document.getElementById("Last Name");
	

	if(fn.value =="" || ln.value == ""){
		alert("Fill Your Name");
		return false;
	}
	else{
		return true ;
	}
}