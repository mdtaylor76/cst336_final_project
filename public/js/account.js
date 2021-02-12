/* global $ */
$(document).ready(function() {
    
    let change = [];
    let id = $('#userID').val();
    
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
    }
    
    $('#fname').on("change", function() {
        change.push("fname"); 
    });
    
    $('#lname').on("change", function() {
        change.push("lname");
    });
    
    $('#email').on("change", function() {
        change.push("email");
    });
    
    $('#password').on("change", function() {
        change.push("password");
    });
    
    $('#test').on("click", function() {
        console.log(change);
    });

}); //document