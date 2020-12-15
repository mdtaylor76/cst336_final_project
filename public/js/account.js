/* global $ */
$(document).ready(function() {
    
    getUserData();

    async function getUserData() {

        let id = $('#userid').val();
        console.log("userid: " + id);
        let url = `/api/customer?id=${id}`;
        let response = await fetch(url);
        let data = await response.json();
        
        console.log(data);
        $('#fname').val(data[0].nameFirst);
        $('#lname').val(data[0].nameLast);
        $('#email').val(data[0].userEmail);

    /*      
        data.forEach( function(i) {
            console.log(i);
            console.log(`<option value="${i.orderID}"> ${i.orderID} </option>`);
            $("#history").append(`<option value="${i.orderID}"> ${i.orderID} </option>`);
        });
    */
    }
    
function FormChanges(form) {

	// get form
	if (typeof form == "string") form = document.getElementById(form);
	if (!form || !form.nodeName || form.nodeName.toLowerCase() != "form") return null;
	
	// find changed elements
	var changed = [], n, c;
	for (var e = 0, el = form.elements.length; e < el; e++) {
		n = form.elements[e];
		c = false;
		
		// standard values
		c = (n.value != n.defaultValue);

		if (c) changed.push(n);
	}
	return changed;
}
}); //document