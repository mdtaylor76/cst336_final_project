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
    /*      
        data.forEach( function(i) {
            console.log(i);
            console.log(`<option value="${i.orderID}"> ${i.orderID} </option>`);
            $("#history").append(`<option value="${i.orderID}"> ${i.orderID} </option>`);
        });
    */
    }
}); //document